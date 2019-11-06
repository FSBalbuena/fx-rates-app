import styled from 'styled-components'
import {Link} from 'react-router-dom'
import WithLayout from '../../containers/WithLayout'

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

export const Wrapper=styled.div`
position:relative;
top:0px;
left:0px;
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



/*--------------------------------------    NAVBAR    ------------------------------- */
export const NavBar=styled.nav`
position:absolute;
left:0px;
top:0px;
padding:${props=>props.p || "5vmin 0px"};
width:100%;
height:5vmin;
min-height:41px;
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

export const Footer=WithLayout(styled.footer`
position:absolute;
top:${props=>props.isDesktop?"-7.41vh":"-12.81vw"};
left:0px;
width:100%;
background:${props=>props.bg || "#4E42E2"};
height:${props=>props.isDesktop?"7.41vh":"12.81vw"};
display:flex;
justify-content:center;
align-items:center
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

export const HomeButton=WithLayout(styled(Button)`
color:#F9F9F9;
background:#272D3A;
width:70%;
padding:auto;
height:${props=>props.isDesktop?"9.27vh":"16.19vmin"};
font-size:${props=>props.isDesktop?"4.19vh":"7.35vmin"};
line-height:${props=>props.isDesktop?"4.19vh":"7.35vmin"};
width:${props=>props.isDesktop?"22.55vw":"62.8vmin"};
`)

/*----------------------------------------------FORM--------------- */

export const CardList=WithLayout(styled.div`
width:100%;
display:flex;
flex-direction:${props=>props.isDesktop?"row":"column"};
justify-content:${props=>props.isDesktop?"space-around":"flex-start"};
align-items:center
`)
export const Card=WithLayout(styled.article`
margin-top:${props=>props.isDesktop?"0vw":"8.43vw"};
width:${props=>props.isDesktop?"25.13vw":"90vw"};
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: ${props=>props.isDesktop?"0.5vw":"1.56vw"};
`)

export const CardHeader=WithLayout(styled.header`
width:100%;
background: #4488FF;
border-radius:${props=>props.isDesktop?"0.5vw 0.5vw 0px 0px":"1.56vw 1.56vw 0px 0px"} ;
padding:${props=>props.isDesktop?"0.7vw 1.25vw":"2.5vw 3.75vw"};
`)

export const CardTitle=WithLayout(styled.h3`
margin:0px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"1.56vw":"5.62vw"};
line-height: ${props=>props.isDesktop?"1.80vw":"6.56vw"};
color: #FFFFFF;
`)

export const CardText=WithLayout(styled(Text)`
color: #848484;
padding:${props=>props.isDesktop?"0.78vw 1.56vw":"2.81vw 5.62vw"};
margin:0px
`)

export const FormBox=WithLayout(styled(Card)`
margin:0px;
padding-top:${props=>props.isDesktop?"3vmin":"7vmin"};
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:${props=>props.isDesktop?"45vh":"90vw"};
min-height:${props=>props.isDesktop?"65vh":"77vh"}
`)

export const FormLabel=WithLayout(styled.label`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"2vh":"4.37vw"};
line-height: ${props=>props.isDesktop?"2.4vh":"5.93vw"};
color: #272D3A;
width:83%
`)

export const FormButton=WithLayout(styled(Button)`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"2.65vh":"5.62vw"};
line-height:${props=>props.isDesktop?"3.12vh":"6.56vw"} ;
display:block;
width: 70%;
height: 6.83vh;
background: #4488FF;
border: 1px solid #4488FF;
box-sizing: border-box;
box-shadow: 0px 1.25vmin 1.25vmin rgba(0, 0, 0, 0.25);
border-radius: ${props=>props.isDesktop?"0.735vh":"1.56vw"};
color: #FFFFFF;
margin:6.6% 0px;
`)

export const Selector=WithLayout(styled.select`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"2.10vw":"6.25vw"};
line-height:${props=>props.isDesktop?"2.43vw":"7.18vw"} ;
color: #272D3A;
border-radius: ${props=>props.isDesktop?"0.5vw":"1.56vw"};
width:${props=>props.isDesktop?"25.13vw":"75vw"};
height:${props=>props.isDesktop?"4.95vw":"14.68vw"};
border:none;
padding:${props=>props.isDesktop?"1.25vw":"3.75vw"};
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor:pointer;
background: url(images/arrow-down.png) 96% / 10% no-repeat #EEE;
background-color:#FFFFFF;
`)


export const FormInput=WithLayout(styled.input`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"2.92vh":"6.25vw"};
line-height:${props=>props.isDesktop?"3.12vh":"7.18vw"} ;
color: #272D3A;
background: #FFFFFF;
border-radius: ${props=>props.isDesktop?"0.735vh":"1.56vw"};
width:100%;
height:${props=>props.isDesktop?"6.83vh;":"14.68vw"} ;
border:none;
padding:0px 3.75vmin;
margin:3.12vmin 0px;
`)

export const FormSelect=WithLayout(styled.select`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.isDesktop?"2.92vh":"6.25vw"};
line-height:${props=>props.isDesktop?"3.12vh":"7.18vw"} ;
color: #272D3A;
width:100%;
border-radius: ${props=>props.isDesktop?"0.735vh":"1.56vw"};
height:${props=>props.isDesktop?"6.83vh;":"14.68vw"} ;
border:none;
padding:0px 3.12vmin;
margin:3.12vmin 0px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor:pointer;
background: url(images/arrow-down.png) 96% / 10% no-repeat #EEE;
background-color:#FFFFFF;
`)


export const Rate=WithLayout(styled(Text)`
 color:#4488FF;
 text-align:center;
 margin:4vmin 0px;
 font-size:${props=>props.isDesktop?"2vh":"4.37vw"} ;
 line-height:${props=>props.isDesktop?"2.4vh":"5.93vw"} ;
`)