import React, { useEffect, useState } from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { useRequests } from '../../hooks/request.hooks';

export default function Card(props: any) {
  console.log(props.task.username)
  const { getFullTaskListRequest } = useRequests()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const list = getFullTaskListRequest()
    if(username) {
      console.log(username)
    }
  }, [])

  return (
    <li className='task-card'>
        <div>
            <img src={props.task.picture} alt="" />
            <p>{props.task.username}</p>
        </div>
        <div className='task-info'>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
        </div>
        <div>
            <ModeOutlinedIcon style={{ cursor: 'pointer' }}/>
            <RestoreFromTrashOutlinedIcon style={{ cursor: 'pointer' }}/>
        </div>
    </li>
  )
}
