import styled from 'styled-components'
import {Link} from 'react-router-dom'
import WithLayout from '../../containers/WithLayout'

/*--------------------------------------CONFIG VARIABLES---------------------------------*/
const flexCenterConfig=`
display:flex;
justify-content:center;
align-items:center;
`
/*--------------------------------------  GENERAL   ------------------------------- */

const BaseSelector=styled.select`
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

/*------------------------------------------------------------HOME COMPONENTS--------- */

export const Footer=WithLayout(styled.footer`
${flexCenterConfig}
position:absolute;
top:${props=>props.isDesktop?"-7.41vh":"-12.81vw"};
left:0px;
width:100%;
background:${props=>props.bg || "#4E42E2"};
height:${props=>props.isDesktop?"7.41vh":"12.81vw"};
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

/*----------------------------------------------RATES COMPONENT--------------- */

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

export const Selector=WithLayout(styled(BaseSelector)`
font-size: ${props=>props.isDesktop?"2.10vw":"6.25vw"};
line-height:${props=>props.isDesktop?"2.43vw":"7.18vw"} ;
border-radius: ${props=>props.isDesktop?"0.5vw":"1.56vw"};
width:${props=>props.isDesktop?"25.13vw":"75vw"};
height:${props=>props.isDesktop?"4.95vw":"14.68vw"};
padding:${props=>props.isDesktop?"1.25vw":"3.75vw"};
background: url(images/arrow-down.png) 96% / 10% no-repeat #EEE;
background-color:#FFFFFF;
`)


/*----------------------------------------------CREATE COMPONENTS----------------------------------------------- */
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
font-size: ${props=>props.isDesktop?"2.65vh":"5.62vw"};
line-height:${props=>props.isDesktop?"3.12vh":"6.56vw"} ;
border-radius: ${props=>props.isDesktop?"0.735vh":"1.56vw"};
font-weight: bold;
font-family: Roboto;
font-style: normal;
display:block;
width: 70%;
height: 6.83vh;
background: #4488FF;
border: 1px solid #4488FF;
box-sizing: border-box;
box-shadow: 0px 1.25vmin 1.25vmin rgba(0, 0, 0, 0.25);
color: #FFFFFF;
margin:6.6% 0px;
`)

export const FormSelect=WithLayout(styled(BaseSelector)`
font-size: ${props=>props.isDesktop?"2.92vh":"6.25vw"};
line-height:${props=>props.isDesktop?"3.12vh":"7.18vw"} ;
border-radius: ${props=>props.isDesktop?"0.735vh":"1.56vw"};
height:${props=>props.isDesktop?"6.83vh;":"14.68vw"} ;
width:100%;
padding:0px 3.12vmin;
margin:3.12vmin 0px;
background: url(images/arrow-down.png) 96% / 10% no-repeat #EEE;
background-color:#FFFFFF;
`)

export const FeeSelector=WithLayout(styled(FormSelect)`
border-radius: ${props=>props.isDesktop?
    "0px 0.735vh 0.735vh 0px"
    :
    "0px 1.56vw 1.56vw 0px"};
width:30%;
`)

export const FormInput=WithLayout(styled.input`
font-size: ${props=>props.isDesktop?"2.92vh":"6.25vw"};
line-height:${props=>props.isDesktop?"3.12vh":"7.18vw"} ;
border-radius: ${props=>props.isDesktop?
    "0.735vh 0px 0px 0.735vh"
    :
    "1.56vw 0px 0px 1.56vw"};
height:${props=>props.isDesktop?"6.83vh;":"14.68vw"} ;
font-family: Roboto;
font-style: normal;
font-weight: bold;
color: #272D3A;
background: #FFFFFF;
width:70%;
border:none;
padding:0px 3.75vmin;
margin:3.12vmin 0px;
`)

export const Rate=WithLayout(styled(Text)`
font-size:${props=>props.isDesktop?"2vh":"4.37vw"} ;
line-height:${props=>props.isDesktop?"2.4vh":"5.93vw"} ;
margin:4vmin 0px;
color:#4488FF;
text-align:center;
`)

export const FlexDiv=styled.div`
${flexCenterConfig}
width:100%;
`