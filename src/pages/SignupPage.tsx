import { Box, Button, Input, Typography } from '@mui/material'
import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { signup } from "../redux/auth/auth.slice"

const SignupPage = () => {
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
      dispatch(signup())
      navigate('/', { replace: true })
      isFormDisabled.current = false
    }

    const nagivateToLogin = () => {
        navigate('/login')
    }
  
    return (
      <Box display="flex" flexDirection="column">
        <Typography>Signup Screen</Typography>
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
        <Button onClick={nagivateToLogin}>Navigate to Login</Button>
      </Box>
    )
}

export default SignupPage