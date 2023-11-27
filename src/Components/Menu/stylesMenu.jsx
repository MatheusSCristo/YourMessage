import styled from 'styled-components';

export const Wrapper = styled.div`
    height:100vh;
    display:flex;
    align-items:center;

`
export const Box = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#FFF;
    height:90%;
    width:500px;
    margin-left:50px;
    border:1px solid #00000079;
    border-radius:30px;
`
export const TopWrapper = styled.div`
    display:flex;
    margin:20px;
    justify-content:space-between;
`
export const Name = styled.h1`
    font-size:1em;
    color:#000;
   
`
export const User = styled.h1`
    font-size:0.8em;
    color:#a8a8a8;
    
`
export const UserImage = styled.img`
    width:50px;
    height:auto;
`
export const MessageBox = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const Message=styled.h1`
    font-size:1.5em;
    color:#000;
    width:100%;
    padding-left:40px;
    margin-bottom:10px;

`
export const Search=styled.input`
    width:80%;
    height:5vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:40px;
    font-size:1em;
`

export const Container=styled.div`
    width:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const SearchImg=styled.img`
    height:2vh;
    background-color:#EDEDED;
    left:60px;
    position:absolute;
    cursor:pointer;
`