import styled from 'styled-components';
import Theme from "../../../globals/globalstyles"
export const AddBox = styled.div`
    background-color:${Theme.color.lightBlue};
    position:absolute;
    width:60%;
    min-height:10vh;
    right:40px;
    top:15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:10px;
    z-index:1;
`
export const SearchAdd = styled.input`
    width:80%;
    height:4vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:10px;
    font-size:1em;
`
export const SearchName = styled.h1`
    font-size:1.5em;
    color: #fff;
    font-weight:500;

`
export const SearchUserName = styled.h2`
    font-size:1em;
    font-weight:100;
    color: #fff;
    
`
export const SearchWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    `
export const SearchNameBox = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    
`
export const SearchBoxConfig = styled.div`
    display:flex;
    justify-content:space-between;
`
export const Close = styled.h1`
    margin:5px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`
export const Connect=styled.h2`
    font-size:1em;
    color:white;
    font-weight:300;



`