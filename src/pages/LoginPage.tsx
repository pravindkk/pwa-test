import { Box, Button, Input, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/auth/auth.slice'

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isFormDisabled = useRef<boolean>(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    isFormDisabled.current = true
    console.log(email, password)
    setEmail('')
    setPassword('')
    dispatch(login())
    navigate('/', { replace: true })
    isFormDisabled.current = false
  }

  const navigateToSignup = () => {
    navigate('/signup')
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography>Login Screen</Typography>
      <Input
        type="email" 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password" 
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={isFormDisabled.current}>
        Submit
      </Button>
      <Button onClick={navigateToSignup} disabled={isFormDisabled.current}>
        Navigate to signup
      </Button>
    </Box>
  )
}