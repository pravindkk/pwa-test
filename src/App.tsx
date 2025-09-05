import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LoginPage } from './pages/LoginPage.tsx'
import { ChatPage } from './pages/ChatPage.tsx'
import { userSelector } from './redux/auth/auth.selector.ts'
import PWABadge from './PWABadge.tsx'
import SignupPage from './pages/SignupPage.tsx'

function App() {
  const user = useSelector(userSelector)
  let routes

  if (user) {
    routes = (
      <Routes>
        <Route element={<ChatPage />} path='/' />
        <Route path='*' element={<Navigate to ='/'/>}/>
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route element={<LoginPage />} path='/login' />
        <Route element={<SignupPage />} path='/signup' />
        <Route path='*' element={<Navigate to ='/login'/>}/>
      </Routes>
    )
  }
  return (
    <>
      {routes}
      <PWABadge />
    </>
  )
}

export default App
