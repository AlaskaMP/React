import { useState,useEffect } from 'react'




const Mouse_follower=()=>{
  
  const [activated,Setactivated]=useState(false)
  const [position,Setposition]=useState(null)
  
  
 
  useEffect(()=>{
    const handlemove=(event)=>{
      const {clientX,clientY}=event
      Setposition({x:clientX,y:clientY})
    }
    if(activated){
      window.addEventListener('pointermove',handlemove)

    }
    return()=>{
      window.removeEventListener('pointermove',handlemove)
    }
    
  },[activated]
  )
  useEffect(() => {
    document.body.classList.toggle('no-cursor', activated)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [activated])
  return(
    <>
      {activated&&position&&(
        <img
        src="/img/pngwing.com.png" // Reemplaza con la ruta correcta de tu imagen del dragón
        alt="Dragón"
        style={{
          position: 'absolute',
          width: 150,
          height: 150,
          left: position.x - 75, // Ajusta la posición para que el puntero esté en el punto medio
          top: position.y - 75, // Ajusta la posición para que el puntero esté en el punto medio
          pointerEvents: 'none',
        }}
      />
      )}
      <button onClick={()=>Setactivated(!activated)}>
        {activated?'disable':'activate '}  follow pointer

      </button>
    </>
  )

}

export function App() {
  const [mounted,Setmounted]=useState(true)

  return(
    <main>
      
      {mounted&&<Mouse_follower/>}
      <button onClick={()=>{Setmounted(!mounted)}}>{mounted?'disassemble ':'mount '} componente</button>

      
    </main>
  )
}


