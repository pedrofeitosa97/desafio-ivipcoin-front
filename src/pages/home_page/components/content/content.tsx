import React, { useState, useEffect } from 'react'
import { Fab, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { StyledContentDiv } from './styled'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../../../../components/card';
import { useRequests } from '../../../../hooks/request.hooks';

export default function Content() {
const { getFullTaskListRequest } = useRequests()
const [alignment, setAlignment] = useState('getList')
const [taskList, setTaskList] = useState([])

const getTaskList = async () => {
    const taskListData: any = await getFullTaskListRequest()
    setTaskList(taskListData)
}

useEffect(() => {
    getTaskList()
},[])

const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
        console.log(alignment)
};

  return (
    <StyledContentDiv>
        <header>
            <Fab color="primary" aria-label="add">
                +
            </Fab>
            <div>
            <TextField
            label="Pesquisar"
            sx={{backgroundColor: 'rgba(255,250,240,0.08)', borderRadius: '6px', marginRight: '8px'}}
            InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'white' }}/>,
                }}
            />
            <ToggleButtonGroup
                color="secondary"
                className="button-check"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                >
                <ToggleButton value="getList" sx={{backgroundColor: 'rgba(255,250,240,0.08)', borderRadius: '6px', color: 'rgba(255,250,240,0.5)'}}>Lista de tarefas</ToggleButton>
                <ToggleButton value="getProfile" sx={{backgroundColor: 'rgba(255,250,240,0.08)', borderRadius: '6px', color: 'rgba(255,250,240,0.5)'}}>Minhas tarefas</ToggleButton>
            </ToggleButtonGroup>
            </div> 
        </header>
        <main>
            {taskList ?
                <ul className='task-list'>
                    {taskList.map((task, index) => (
                        <Card key={index} task={task} />
                    ))}
                </ul>
                :
                <></>
            }
        </main>
    </StyledContentDiv>
  )
}
