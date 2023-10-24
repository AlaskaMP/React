import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonLanguage } from './components/ButtonLanguage'
import { TypesAction, fromLanguageType, toLanguageType } from './Cases'
import { useStore } from './hooks/useStore'
import { Select } from './components/Select'
import { Button } from 'react-bootstrap'
export function App () {
  const { fromLanguage, toLanguage, dispatch } = useStore()
  return (
    <div className='Google_translate_clone'>
      <h1> Google Translate</h1>
      <main className='Translate'>
        {fromLanguage}
        <Select languageOption={Object.values(fromLanguageType)}/>
        <Button variant='link' onClick={() => { dispatch({ type: TypesAction.CHANGING_LANGUAGES, payload: 'asasas' }) }} disabled={fromLanguage === fromLanguageType.auto} ><ButtonLanguage/></Button>
        <Select languageOption={Object.values(toLanguageType)}/>
        {toLanguage}
      </main>
    </div>
  )
}
