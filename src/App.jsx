import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import { AuthRoutes } from './routes/auth.routes'

function App() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default App
