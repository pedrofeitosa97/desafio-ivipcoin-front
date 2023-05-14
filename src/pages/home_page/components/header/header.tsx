import React,{useEffect, useState} from 'react'
import { Button } from '@mui/material'
import { StyledHeader } from './styled'
import { useNavigate } from 'react-router-dom'
import { useRequests } from '../../../../hooks/request.hooks'

interface User {
  uid: string;
  name: string;
  photoURL: string;
}

export default function Header() {
  const navigate = useNavigate()
  const { getCurrentUserRequest } = useRequests()
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = getCurrentUserRequest();
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('task-manager:token')
    navigate('/')
  }
  return (
    <StyledHeader>
        <div>
            <h1>Task Manager</h1>
        </div>
        {currentUser ?
        <div className='profile-info'>
            <img className='profile-img' src={currentUser.photoURL} alt="" />
            <p className='profile-name'>{currentUser.name}</p>
            <Button onClick={handleLogout} color="primary" variant="contained">
               Logout
            </Button>
        </div>
        :
        <></>
        }
    </StyledHeader>
  )
}