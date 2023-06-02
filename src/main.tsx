import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './styles/base/_base.scss';
import { Provider as UserProvider } from './context/userContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)
