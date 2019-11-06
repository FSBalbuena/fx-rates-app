import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'
import {Card} from '../Cards'
import {Background,
     Button,
     BaseSelector,
     Text} from '../StoryBook'



export const FormBackground=WithLayout(styled(Background)`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:${props=>props.isDesktop?"6vh 0px":"16vw 0px"}
`)

export const FormBox=WithLayout(styled(Card)`
    padding-top:${props=>props.isDesktop?"3vmin":"7vmin"};
    width:${props=>props.isDesktop?"45vh":"90vw"};
    min-height:${props=>props.isDesktop?"65vh":"77vh"}
    margin:0px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`)

export const FormLabel=WithLayout(styled.label`
font-size: ${props=>props.isDesktop?"2vh":"4.37vw"};
line-height: ${props=>props.isDesktop?"2.4vh":"5.93vw"};
font-family: Roboto;
font-style: normal;
font-weight: bold;
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

export const FeeWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`