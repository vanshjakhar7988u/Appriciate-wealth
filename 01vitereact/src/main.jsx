import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function My(){
  return(
    <>bali deni 2</>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <My />
    <App/>
  </StrictMode>,
)
