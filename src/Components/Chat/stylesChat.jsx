import styled from 'styled-components';
import Theme from "../../globals/globalstyles"

export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
`
export const TopBar=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:10vh;
    margin:50px;
    background-color:${Theme.color.lightBlue };
    border-radius:20px;
    position:relative;

`
export const Container=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin:20px;
`
export const UserImage = styled.img`
    width:80px;
    height:auto;
`
export const User = styled.h1`
    font-size:1.5em;
    color:#ffffff;
    margin-left:20px;
    
`
export const Dots=styled.img`
    width:40px;
    cursor: pointer;
    margin-right:20px;

`
export const Write=styled.input`
    width:100%;
    height:7vh;
    background-color:#FFF;
    border:none;
    border-radius:10px;
    padding:5px;
    border:1px solid #dbdbdb;

`
export const SendImg=styled.img`
    width:60px;
    height:auto;
    position:absolute;
    right:0;
    cursor: pointer;

`
export const SendContainer=styled.div`
    display:flex;
    align-items:center;
    position:relative;
    margin:20px;
`
export const ConfigBox=styled.div`
    position:absolute;
    width:8vw;
    height:8vh;
    background-color:#FFF;
    right:45px;
    top:55px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:1px solid #dbdbdb;
`
export const Clear=styled.h2`
    font-size:1em;
    font-weight:100;
    margin:5px;
    cursor: pointer;
`