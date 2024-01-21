import styled from 'styled-components';
import Theme from "../../globals/globalstyles"

export const Wrapper = styled.div`
    height:100vh;
    display:flex;
    width:500px;
    align-items:center;
    display:${({display})=>display};
    @media (max-width:1200px){
        width:50%;
    }
    @media (max-width:780px){
        position:absolute;
        top:70px;
        z-index:1;
    }

    @media (max-width:780px){
        width:70%;
    }
`
export const Box = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#FFF;
    height:90%;
    width:100%;
    margin-left:50px;
    border:1px solid #00000079;
    border-radius:30px;
    @media (max-width:780px){
        margin-left:10px;
    }
`
export const ShowButton=styled.img`
    display:${({display})=>display};
    cursor: pointer;
    width:50px;
    position:absolute;
    top:70px;
    background-color:#ffffff;
    padding:5px;
    border-radius:50%;
    z-index:2;

`


export const TopWrapper = styled.div`
    display:flex;
    margin:20px;
    justify-content:space-between;
    position:relative;
    
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
    height:50px;
    border-radius:50%;
    object-fit:cover;
    
`
export const AddFriendsImg = styled.img`
    width:50px;
    height:auto;
    cursor: pointer;
`

export const MessageBox = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const Message = styled.h1`
    font-size:1.5em;
    color:#000;
    width:100%;
    padding-left:40px;
    margin-bottom:10px;

`
export const Search = styled.input`
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

export const Container = styled.div`
    width:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const SearchImg = styled.img`
    height:2vh;
    background-color:#EDEDED;
    left:60px;
    position:absolute;
    cursor:pointer;
`

export const AddBox = styled.div`
    background-color:${Theme.color.lightBlue};
    position:absolute;
    width:200px;
    min-height:100px;
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
    height:3vh;
    background-color:#EDEDED;
    color:#8B8B8B;
    margin:10px;
    border:1px solid black;
    border-radius:10px;
    padding-left:20px;
    font-size:1em;
`
export const Dots = styled.img`
    width:45px;
    height:auto;
    margin-right:20px;
    cursor: pointer;

`
export const EditBox = styled.div`
    background-color:${Theme.color.lightBlue};
    position:absolute;
    width:fit-content;
    min-height:300px;
    right:90px;
    top:35px;
    border-radius:10px;
    z-index:1;

`
export const EditForm = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    `
export const EditButton=styled.button`
    width:40%;
    height:3vh;
    border-radius:5px;
    border:1px solid black;
    cursor: pointer;
`
export const ImgInput=styled.input`
    width:80%;
    height:3vh;
    border-radius:5px;
    margin:5px;

`
export const EditH2=styled.h2`
    margin:10px;
    font-size:1em;
    color:#FFF;
    font-weight:100;
`

export const ChangeName = styled.input`
    width:70%;
    border:1px solid #bcbcbc;
    height:4vh;
    border-radius:10px;
    padding-left:10px;
    
`
export const Edit = styled.h1`
    font-size:2em;
    color:#FFF;
    margin:20px;


`

export const SearchName = styled.h1`
    font-size:2em;
    color: #fff;

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
`