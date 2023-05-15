import React, { useEffect, useState } from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { useRequests } from '../../hooks/request.hooks';
import { ICardProps } from '../../interfaces/interfaces';
import { CardLi } from './styled';
import Modal from '@mui/material/Modal/Modal';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import { StyledModal } from '../../pages/home_page/components/content/styled';
import Button from '@mui/material/Button/Button';
import { iUserNameRequest } from '../../interfaces/interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Card(props: ICardProps) {
  const { deleteUserRequest, getCurrentUserRequest, editUserTaskRequest } = useRequests()
  const [currentUser, setCurrentUser] = useState('')
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  useEffect(() => {
    const userNameRequest: iUserNameRequest | null = getCurrentUserRequest();
    if (userNameRequest != null) {
      const { name, photoURL, uid } = userNameRequest;
      const user: iUserNameRequest = { name, photoURL, uid };
      setCurrentUser(uid);
    }
  }, []);

  const handleSubmit = async () => {
    if (title && description !== '' ) {
        setTitle('')
        setDescription('')
        await editUserTaskRequest(title, description, props.task.id)
        handleCloseEdit()
        props.getMyTasks()
    }
      props.setTaskListUpdate(true)
    setTimeout(() => {
      props.setTaskListUpdate(false)
    }, 2000);
    };

    const handleDelete = async () => {
      handleCloseDelete()
      await deleteUserRequest(props.task.id)
      props.getMyTasks()
      props.setTaskListUpdate(true)
      setTimeout(() => {
        props.setTaskListUpdate(false)
      }, 2000);
    }

  return (
    <>
      <CardLi className='task-card'>
          <div>
              <img src={props.task.picture} alt="" />
              <p>{props.task.owner.username}</p>
          </div>
          <div className='task-info'>
              <h2>{props.task.title}</h2>
              <p>{props.task.description}</p>
          </div>
            <div className='right-icons'>
            {currentUser == props.task.owner.user_id ?
                <>
                  <ModeOutlinedIcon onClick={handleOpenEdit} style={{ cursor: 'pointer' }}/>
                  <RestoreFromTrashOutlinedIcon onClick={handleOpenDelete} style={{ cursor: 'pointer' }}/>
                </>
                :
                <></>
              }
            </div>
      </CardLi>
      <StyledModal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Editar tarefa
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
      <StyledModal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Deseja excluir a tarefa?
        </Typography>    
        <Button variant="contained" onClick={handleDelete} sx={{ mt: 2 }}>
                Excluir
        </Button>
      </Box>
    </StyledModal>
    </>
  )
}
