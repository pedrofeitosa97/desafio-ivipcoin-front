import styled from 'styled-components'


export const StyledHeader = styled.header`
color: #FFFFFF;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 15%;
padding-inline: 10%;
border-bottom: 1px solid grey;

h1 {
    font-size: 18px;
}

img {
    border-radius: 50%;
    object-fit: cover;
    width: 70px;
    object-position: center 25%;
    height: 70px;
}

.profile-info {
    display: flex;
    align-items: center;
    height: 100px;
    gap: 20px;
}

.profile-img {
    display: none;
}
.profile-name {
    display: none;
}


@media (min-width: 1024px) {

padding-top: 5%;
padding-inline: 20%;

.profile-img,
.profile-name {
    display: flex;
    display: flex;
}
}

`