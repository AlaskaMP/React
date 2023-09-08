export function getRandomCat(){
    return fetch('https://catfact.ninja/fact')
    .then(response=>response.json())
    .then(data=>{
      const {fact}=data
      return fact         
    })
}
