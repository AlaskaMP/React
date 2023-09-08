import { useImgRandomCat } from "./Hooks/useImgRandomCat"
import { useFactRandom } from "./Hooks/useFactRandom"
export function App(){
  //recuperar un hecho sobre gatos y la función para actualizar ese hecho 
  const {fact,refreshFact}=useFactRandom()
  const img=useImgRandomCat(fact)
  async function handleClick(){
    refreshFact()
  }
  return(
    <main className="Principal">
      <h1>App gatos</h1>
      <section>
        <p>{fact}</p>
        {img &&<img src={img} alt="Hola" />}
        <button onClick={handleClick}>Random Cat</button>
      </section>
    </main>
  )
}