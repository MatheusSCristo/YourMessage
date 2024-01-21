import styled from 'styled-components';

export const Chat=styled.div`
    height:10vh;
    margin:10px 40px;
    display:flex;
    align-items:center;
    border:1px solid #e7e7e7;
    border-radius:15px;
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
    height:70%;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
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

export const LoadingBox=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:80%;
`
