import { type TypesAction, type fromLanguageType, type toLanguageType } from './Cases'
export interface StateApp {
  fromLanguage: fromLanguageType
  toLanguage: toLanguageType
  text: string
  translatedText: string
  loading: boolean
}
export interface Action {
  type: TypesAction
  payload: string
}
