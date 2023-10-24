import { useReducer } from 'react'
import { type StateApp, type Action } from '../types'
import { TypesAction, fromLanguageType, toLanguageType } from '../Cases'

const INITIAL_STATE: StateApp = {
  fromLanguage: fromLanguageType.es,
  toLanguage: toLanguageType.en,
  text: '',
  translatedText: '',
  loading: false
}
function reducer (state: StateApp, action: Action) {
  const { type } = action
  if (type === TypesAction.CHANGING_LANGUAGES && state.fromLanguage !== fromLanguageType.auto) {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    } as unknown as StateApp
  }
  return state
}
export function useStore () {
  const [{
    fromLanguage,
    toLanguage,
    text,
    translatedText,
    loading
  }, dispatch] = useReducer(reducer, INITIAL_STATE)

  return ({
    fromLanguage,
    toLanguage,
    text,
    translatedText,
    loading,
    dispatch
  })
}
