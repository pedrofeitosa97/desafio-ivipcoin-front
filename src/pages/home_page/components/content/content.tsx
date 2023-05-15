import React, { useState, useEffect } from 'react'
import { Fab, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { StyledContentDiv } from './styled'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../../../../components/card';
import { useRequests } from '../../../../hooks/request.hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { StyledModal } from './styled';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Content() {
const { getFullTaskListRequest, createUserTaskRequest, getCurrentUserRequest } = useRequests()
const [alignment, setAlignment] = useState('getProfile')
const [taskList, setTaskList] = useState([])
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [refreshTask, setRefreshTaskList] = useState(false)
const [taskListUpdate, setTaskListUpdate] = useState(false)
const [searchValue, setSearchValue] = useState<string>('');

useEffect(() => {
    getMyTaskList()
},[refreshTask, taskListUpdate])

const getFullTaskList = async () => {
    console.log(alignment)
    if(!alignment !== false || alignment !== 'getList') {
    const taskListData: any = await getFullTaskListRequest()
    const tasksWithDates = taskListData.map((task: any) => ({
        ...task,
        createdAt: new Date(task.created_at)
      }));
      
    const sortedTasks = tasksWithDates.sort((a: any, b: any) => b.createdAt - a.createdAt);
    setTaskList(sortedTasks)
    } else {
        setTaskList([])
    }
}

const getMyTaskList = async () => {
    const taskListData: any = await getFullTaskListRequest()
    const currentUser = getCurrentUserRequest()
    const currentUserTasks = taskListData.filter((task: any) =>  task.owner.user_id === currentUser?.uid);
    const tasksWithDates = currentUserTasks.map((task: any) => ({
        ...task,
            createdAt: new Date(task.created_at)
        }));
          
    const sortedTasks = tasksWithDates.sort((a: any, b: any) => b.createdAt - a.createdAt);
    setTaskList(sortedTasks)
}

const getMyTasks = async () => {
    if(!alignment !== false || alignment !== 'getProfile') {
        const taskListData: any = await getFullTaskListRequest()
        const currentUser = getCurrentUserRequest()
        const currentUserTasks = taskListData.filter((task: any) =>  task.owner.user_id === currentUser?.uid);
        const tasksWithDates = currentUserTasks.map((task: any) => ({
            ...task,
            createdAt: new Date(task.created_at)
          }));
          
        const sortedTasks = tasksWithDates.sort((a: any, b: any) => b.createdAt - a.createdAt);
        setTaskList(sortedTasks)
    } else {
        setTaskList([])
    }
}

const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
            setAlignment(newAlignment);
};


const handleSubmit = async () => {
    if (title && description !== '' ) {
        setTitle('')
        setDescription('')
        await createUserTaskRequest(title, description)
        handleClose()
        setRefreshTaskList(!refreshTask)
    }
};

const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if(event.target.value === '') {
        if(alignment == 'getProfile') {
            getMyTasks()
        } else if (alignment == 'getList') {
            getFullTaskList()
        }
    }
    const filteredArray = taskList.filter((task: any) => task.description.toLowerCase().includes(searchValue.toLowerCase()))
    setTaskList(filteredArray)
};


  return (
    <StyledContentDiv>
        <header>
            <Fab color="primary" onClick={handleOpen} aria-label="add">
                +
            </Fab>
            <div>
            <TextField
                label="Pesquisar"
                value={searchValue}
                onChange={handleSearchInputChange}
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
            <ToggleButton onClick={getMyTasks} value="getProfile" sx={{backgroundColor: 'rgba(255,250,240,0.08)', borderRadius: '6px', color: 'rgba(255,250,240,0.5)'}}>Minhas tarefas</ToggleButton>
            <ToggleButton onClick={getFullTaskList} value="getList" sx={{backgroundColor: 'rgba(255,250,240,0.08)', borderRadius: '6px', color: 'rgba(255,250,240,0.5)'}}>Lista de tarefas</ToggleButton>
            </ToggleButtonGroup>
            </div> 
        </header>
        <main>
            {taskList ?
                <ul className='task-list'>
                    {taskList.map((task, index) => (
                        <Card key={index} 
                        task={task}
                        setTaskListUpdate={setTaskListUpdate}
                        getMyTasks={getMyTasks}
                        taskList={taskList}
                        />
                    ))}
                </ul>
                :
                <></>
            }
        </main>
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography sx={{ marginBottom: '12px' }} id="modal-modal-title" variant="h6" component="h2">
                Criar tarefa
                </Typography>
                <label htmlFor="title">
                Título:
                <input placeholder='Digite o título da tarefa.' className="input-text" type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label htmlFor="description">
                Descrição:
                <input placeholder='Digite a descrição da tarefa.' className="input-text" type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
                Criar tarefa
                </Button>
            </Box>
        </StyledModal>
    </StyledContentDiv>
  )
}
