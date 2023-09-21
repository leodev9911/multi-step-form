import { createRoot } from 'react-dom/client'
import App from './App'
import { StepProvider } from './context/changeStep'
import './style.css'

createRoot(document.getElementById('app')).render(
  <StepProvider>
    <App />
  </StepProvider>
)
