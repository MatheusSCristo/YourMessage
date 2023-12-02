import styled from 'styled-components';

export const Chat=styled.div`
    height:10vh;
    margin:10px 40px;
    display:flex;
    align-items:center;
    border:1px solid #a0a0a0;
    border-radius:5px;
    cursor:pointer;
`

export const UserImg=styled.img`
    width:60px;
    height:60px;
    margin:10px;
    object-fit:cover;
    border-radius:50%;
`
export const Name=styled.h1`
    font-size:1em;

`
export const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`
export const MessagePreview=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const Message=styled.h2`
    color:#5d5d5d;
    font-size:0.8em;
    font-weight:100;

`
