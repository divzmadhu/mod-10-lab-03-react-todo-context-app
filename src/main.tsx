import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './context/TodoContext.tsx'
import AppProviders from "./context/AppProviders";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppProviders>
            <App />
        </AppProviders>
  </StrictMode>,
)
