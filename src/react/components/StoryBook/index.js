import styled from 'styled-components'
import {Link} from 'react-router-dom'
import WithLayout from '../../containers/WithLayout'

/*--------------------------------------  GENERAL   ------------------------------- */

export const BaseSelector=styled.select`
font-family: Roboto;
font-style: normal;
font-weight: bold;
color: #272D3A;
border:none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor:pointer;
`

export const AppLink=styled(Link)`
padding:${props=>props.p || "0px"};
margin:${props=>props.m || "0px"};
font-family: Roboto;
font-style:normal;
font-weight: ${props=>props.fw || "normal"};
font-size: ${props=>props.fs || "4.37vmin"};
text-decoration:none;
cursor:pointer;
`

export const Background=styled.main`
position:relative;
left:0px;
top:0px;
height:${props=>props.height || "auto"};
margin:${props=>props.m || "0px"};
padding:${props=>props.p || "0px"};
min-height:100vh;
width:100%;
background:${props=>props.bg || "none"};
background-size:cover;
`
export const Text=WithLayout(styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size:${props=>props.isDesktop?"1.21vw":"4.37vw"} ;
line-height:${props=>props.isDesktop?"1.45vw":"5.93vw"} ;
text-align: ${ props=>props.textAlign|| "left"};
color:${ props=>props.color || "#FFFFFF"};
width:${ props=>props.width || "100%"};
margin:${props=>props.m || "0px"};

`)

export const Header=WithLayout(styled(Text)`
font-size: ${props=>props.isDesktop?"7vh":"9.37vw"};
line-height: ${props=>props.isDesktop?"7vh":"10.93vw"};
`)

export const Button=styled.button`
cursor:pointer;
box-shadow: 0px 5.75758px 5.75758px rgba(0; 0, 0, 0.25);
border:none;
border-radius: 1.5vmin;
font-family: Roboto;
font-style: normal;
font-weight: bold;
`