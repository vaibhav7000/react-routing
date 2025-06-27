import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {AppMain} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppMain />
  </BrowserRouter>
)

