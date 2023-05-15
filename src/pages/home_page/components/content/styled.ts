import styled from 'styled-components'
import Modal from '@mui/material/Modal';

export const StyledModal = styled(Modal)`
input {
    display: block;
    width: 100%;
    height: 40px;
    padding-inline: 8px;
    margin-block: 8px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.5);
}
`

export const StyledContentDiv = styled.div`
padding-top: 5%;
background-color: rgb(19, 22, 24);
height: 500px;
margin-top: 40px;
margin-inline: 10%;
padding-inline: 2%;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 10px; 
  height: 10px;
}

::-webkit-scrollbar-button {
  background-color: #7B53A8;
}
::-webkit-scrollbar-thumb {
  background-color: #7B53A8;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background-color: #000000;
  border-radius: 10px;
}

::-webkit-scrollbar-corner {
  background-color: #fff;
}

header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px
}

main {
    display: flex;
    align-items: center;
    color: white;
    width: 100%;
    list-style: none;
    margin-top: 40px;
    border-radius: 8px;
}

.task-list {
    list-style: none;
    width: 100%;
}

.task-info h2 {
    display: none;
}

main ul li img {
    border-radius: 50%;
    object-fit: cover;
    width: 20px;
    object-position: center 25%;
    height: 20px;
}

.task-card {
    display: flex;
    margin-block: 12px;
    justify-content: space-between;
    overflow: auto;
    background-color: #09090A;
    padding: 16px 8px;
    border-radius: 8px;
}

.task-card {
    font-size: 12px;
}

.task-card div {
    display: flex;
    align-items: center;
    gap: 8px;
}

@media (min-width: 1024px) {
    padding-inline: 1%;
    padding-top: 2%;
    margin-inline: 20%;

header {
    flex-direction: row;
    gap: 0px;
}

input {
    height: 18px;
}

.task-info {
    display: flex;
    flex-direction: column;
}

.task-info h2 {
    display: flex;
    font-size: 14px;
}

main ul li img {
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    object-position: center 25%;
    height: 40px;
}

}
`