import { useState } from 'react'

const TURNS = {
  X:'x',
  O:'o'
}

const Square=({index,children,updateboard,is_selected})=>{

  const className= is_selected? "square is-selected":"square"
  const handleClick=()=>{
    updateboard(index)
  }
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
const COMBOS_WINNER=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]  
]

export function App(){
 const [board,setBoard]=useState(Array(9).fill(null))
 const [turn,setTurn]=useState(TURNS.X)
 const [winner,setWinner]=useState(null)

 //funcion actualizadora del ganador 
 const checkWinner=(board)=>{
  for(const combo of COMBOS_WINNER){
    const [a,b,c]=combo
    
    if(board[a]&&board[a]==board[b]&&board[a]==board[c]){
      return board[a]
    }

  }
  return null
}
  
  
 //funcion actualizadora del tablero
 const updateboard =(index)=>{

    if(board[index]||winner) return 
    // actualizando el turno 
    const newTurn= turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //actualizando el tablero
    const newBoard=[...board]
    newBoard[index]=turn
    setBoard(newBoard)
    //actualizando ganador
    const newWinner=checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      
    }else if(!newBoard.includes(null)){
      setWinner(false)
    }

  }
  const restart=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
 
  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={restart}>
       Restart
      </button>
      <section className='game'>
        {
          board.map((_,index)=>
           {
              return(
              <Square  index={index} key={index} updateboard={updateboard} >
                {board[index]}
              </Square>
              )
           }
          )
        }
      </section>
      <section className='turn'>
        <Square is_selected={turn==TURNS.X}>
        {TURNS.X}
        </Square>
        <Square is_selected={turn==TURNS.O}>  
        {TURNS.O}
        </Square>
      </section>
      <section>      
        {
          winner !== null &&(
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner===false? 'Empate':'Ganó:'
                  }
                </h2>
                <header className='win'>
                  {winner&& 
                  <Square>
                    {winner}
                  </Square>
                  }
                </header>
                <footer>
                  <button onClick={restart}>
                    empezar de nuevo
                  </button>
                </footer>
              </div>
            </section>
          )
        }
      </section>   
    </main>
  )
}