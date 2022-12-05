import styled from 'styled-components';

export const Overlay=styled.div` 
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
background-attachment: fixed;
background-repeat: no-repeat;
`;

export const ModalViewer = styled.div` 
max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
background-color: transparent;
border-radius: 10px;
overflow: hidden;
`;

export const ModalImg = styled.img` 
width: 100%;
height: 100%;

`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 4%;
    right: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 35px;
    
    border: 2px solid #fff;
    background-color: transparent;
    cursor: pointer;
`;