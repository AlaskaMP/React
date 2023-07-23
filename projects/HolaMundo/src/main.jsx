import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './App.css'




const root =ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <section className='App'>
    <App initialIsFollowing name='David Laid' username='davidlaid' />
    <App IsfollowinitialIsFollowinging={false}name='Jeff Seid' username='jeff_seid' />
    <App IsfollowinitialIsFollowinging name='Andrew Mar' username='andrew_sea' />

  </section>
  
  
 )
