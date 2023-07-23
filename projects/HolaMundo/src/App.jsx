import { useState } from "react"
export function App({name,username,initialIsFollowing }){

  const [Isfollowing,SetIsfollowing]=useState(initialIsFollowing )

  const HandleClick =()=>{
     SetIsfollowing(!Isfollowing)
  

  }
  const text = Isfollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName= Isfollowing?'twitter-followcard-button following':'twitter-followcard-button notfollowing'
  
  return(
    
    <article className="twitter-followcard">
      <header className="twitter-followcard-header">
        <img className='twitter-followcard-avatar'src={`Img/${username}.jpg`} alt="avatar del usuario" />
        <div className="twitter-followcard-Info">
         <strong className="twitter-followcard-Infoname">{name}</strong>
         <span className="twitter-followcard-Infousername">@{username}</span>
        </div>
     
      </header>
      <aside >
        <button className={buttonClassName} onClick={HandleClick} >
          <span className="twitter-followcard-buttontext">{text}</span>
          <span className="twitter-followcard-stopfollow">dejar de seguir</span>
        </button>
      </aside>

    </article>
  )
}
