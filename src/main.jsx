import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './TodoApp.jsx'
// import './index.css'
import './styles.css'
import { Counter } from './assets/Counter'

import {JsMethods} from './assets/JsMethods'

import {GifExpert} from './assets/GifExpert'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter contador={4} base={5}/> */}
      < GifExpert />
  </React.StrictMode>,
)




