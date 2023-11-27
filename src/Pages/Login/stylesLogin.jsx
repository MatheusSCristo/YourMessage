import styled from 'styled-components';
import Theme from "../../globals/globalstyles"

export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100vh;
    justify-content:center;
    
`
export const Welcome=styled.h1`
    font-size:5em;
    color:${Theme.color.lightBlue};
    margin-bottom:40px;
`
export const Box=styled.div`
    width:30%;
    height:400px;
    border-radius:20px;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const Login=styled.h1`
    font-size:2em;
    color:#000;
    text-align:center;
    font-weight:200;
    margin:20px;
`
export const Input=styled.input`
    width:80%;
    height:5vh;
    background-color:#F9F9F9;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:5px;
    font-size:1em;
`
export const SignIn=styled.button`
    background-color:${Theme.color.lightBlue};
    color:#FFF;
    width:40%;
    height:5vh;
    border:none;
    border-radius:10px;
    font-size:1em;
    cursor: pointer;
`
export const Forgot=styled.h2`
    margin:10px;
    font-size:0.8em;
    font-weight:100;
    color:#000;
`
export const Create=styled.button`
    background-color:${Theme.color.darkBlue};
    color:#FFF;
    width:50%;
    height:5vh;
    border:none;
    border-radius:10px;
    font-size:1em;
    cursor: pointer;
    margin:20px;
`