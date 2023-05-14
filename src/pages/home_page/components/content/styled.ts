import styled from 'styled-components'


export const StyledContentDiv = styled.div`
padding-top: 5%;
background-color: rgb(19, 22, 24);
height: 500px;
margin-top: 40px;
margin-inline: 10%;
padding-inline: 2%;
overflow-y: scroll;


header {
    width: 100%;
    display: flex;
    justify-content: space-between;
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