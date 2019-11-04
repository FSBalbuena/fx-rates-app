import styled from 'styled-components'
import {Link} from 'react-router-dom'


/*--------------------------------------  GENERAL   ------------------------------- */
export const AppLink=styled(Link)`
padding:${props=>props.p || "0px"};
margin:${props=>props.m || "0px"};
font-family: Roboto;
font-style:normal;
font-weight: ${props=>props.fw || "normal"};
font-size: ${props=>props.fs || "4.37vmin"};
line-height: 30px;
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
export const Text=styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 4.37vmin;
line-height: 5.93vmin;
text-align: ${ props=>props.textAlign|| "left"};
color:${ props=>props.color || "#FFFFFF"};
width:${ props=>props.width || "100%"};
margin:${props=>props.m || "0px"};

`

export const Header=styled(Text)`
font-size: 9.37vmin;
line-height: 10.93vmin;

`



/*--------------------------------------    NAVBAR    ------------------------------- */
export const NavBar=styled.nav`
position:absolute;
left:0px;
top:0px;
padding:${props=>props.p || "5vmin 0px"};
width:100%;
min-height:41px;
height:5.28vmin;
background:${props=>props.bg || "#f9f9f9"};
display:flex;
justify-content:flex-end;
align-items:center;
z-index:10
`


export const NavLink=styled(AppLink)`
font-style: normal;
font-weight: bold;
font-size: 4.37vmin;
line-height: 4.37vmin;
color: ${props=>props.color?props.color:props.active?"#4488FF":"#272D3A"};
margin-right:7.18vmin;
z-index:11;
:hover{
    color:"#272D3A";
};
@media (min-width:800px){
    font-size: 2.45vmin;
    line-height: 2.45vmin;
}

`
/*--------------------------------------------------------------------- */

export const Footer=styled.footer`
position:absolute;
top:-12.81vmin;
left:0px;
width:100%;
background:${props=>props.bg || "#4E42E2"};
height:12.81vmin;
display:flex;
justify-content:center;
align-items:center
`
export const Button=styled.button`
cursor:pointer;
box-shadow: 0px 5.75758px 5.75758px rgba(0, 0, 0, 0.25);
border:none;
border-radius: 1.5vmin;
font-family: Roboto;
font-style: normal;
font-weight: bold;
`

export const HomeButton=styled(Button)`
color:#F9F9F9;
background:#272D3A;
width:70%;
padding:auto;
height:16.19vmin;
font-size:7.35vmin;
width:62.8vmin;

`

/*----------------------------------------------FORM--------------- */
export const FormInput=styled.input`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 6.25vw;
line-height: 7.18vw;
color: #272D3A;
background: #FFFFFF;
border-radius: 1.56vw;
width:75vw;
height:14.68vw;
border:none;
padding:3.75vw;
margin-top:3.12vw;
`

export const Card=styled.article`
margin-top:8.43vw;
width: 90vw;
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 1.56vw;
`
export const CardHeader=styled.header`
width:100%;
background: #4488FF;
border-radius: 1.56vw 1.56vw 0px 0px;
padding:2.5vw 3.75vw
`
export const CardTitle=styled.h3`
margin:0px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 5.62vw;
line-height: 6.56vw;
color: #FFFFFF;
`
export const FormBox=styled(Card)`
margin:0px;
padding-top:7.81vw;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
min-height:77vh
`

export const FormLabel=styled.label`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 4.37vmin;
line-height: 5.93vmin;
color: #272D3A;
width:83%
`
export const FormButton=styled(Button)`
display:block;
width: 70%;
height: 14.68vw;
background: #4488FF;
border: 1px solid #4488FF;
box-sizing: border-box;
box-shadow: 0px 1.25vw 1.25vw rgba(0, 0, 0, 0.25);
border-radius: 1.56vw;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 5.62vw;
line-height: 6.56vw;
color: #FFFFFF;
margin:9vw 0px;
`

export const FormSelect=styled.select`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 6.25vw;
line-height: 7.18vw;
color: #272D3A;
background: #FFFFFF;
border-radius: 1.56vw;
width:75vw;
height:14.68vw;
border:none;
padding:3.75vw;
margin-top:3.12vw;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`