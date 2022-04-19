import React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'

let rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
