import styled from 'styled-components';
import Theme from '../../globals/globalstyles';

export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    overflow:scroll;
    height:100vh;

`

export const Message=styled.div`
    width:30%;
    min-height:8vh;
    align-self:${({$received})=>$received==="true"?"start":"end"};
    background-color:${({$received})=>$received==="true"?"#FFF":Theme.color.lightBlue};
    margin:80px;
    border-radius:15px;
`
export const text=styled.h1`
    font-size:1em;
    margin:10px;

`