import Form from 'react-bootstrap/Form'
import { type fromLanguageType, type toLanguageType } from '../Cases'
interface Props {
  languageOption: fromLanguageType[] | toLanguageType[]
}
export function Select ({ languageOption }: Props) {
  return (
      <Form.Select aria-label="Default Select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
  )
}
