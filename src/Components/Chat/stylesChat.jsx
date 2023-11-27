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