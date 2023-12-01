import styled from 'styled-components';
import Theme from "../../globals/globalstyles"

export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100vh;
    justify-content:center;
    @media (max-width:900px){
        height:fit-content
    }
`
export const Welcome=styled.h1`
    font-size:5em;
    color:${Theme.color.lightBlue};
    margin-bottom:40px;
    @media (max-width:900px){
        font-size:3em;
        text-align:center;
    }
    @media (max-width:400px){
        font-size:2em;
        text-align:center;
    }
`

export const Box=styled.div`
    width:30%;
    height:600px;
    border-radius:20px;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width:900px){
        width:fit-content;
    }

`
export const NameBox=styled.div`
    display:flex;
    justify-content:space-evenly;
`

export const Name=styled.input`
    width:40%;
    height:5vh;
    background-color:#F9F9F9;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:5px;
    font-size:1em;
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
export const PassError=styled.span`
    font-size:0.8em;
    color:#fe4444
`