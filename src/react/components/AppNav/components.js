import styled from 'styled-components'
import {AppLink} from '../StoryBook'

export const NavBar=styled.nav`
    padding:${props=>props.p || "5vmin 0px"};
    background:${props=>props.bg || "#f9f9f9"};
    position:absolute;
    left:0px;
    top:0px;
    width:100%;
    height:5vmin;
    min-height:41px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    z-index:10
`


export const NavLink=styled(AppLink)`
    color: ${props=>props.color?
    props.color
    :
    props.active?"#4488FF":"#272D3A"};
    font-style: normal;
    font-weight: bold;
    font-size: 4.37vmin;
    line-height: 4.37vmin;
    margin-right:7.18vmin;
    z-index:11;
    :hover{
        color:#4488FF;
    };
    @media (min-width:800px){
        font-size: 2.45vmin;
        line-height: 2.45vmin;
    }
`