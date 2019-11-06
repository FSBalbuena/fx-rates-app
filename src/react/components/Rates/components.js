import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'
import {Background,BaseSelector,Header} from '../StoryBook'



export const RatesBackground=WithLayout(styled(Background)`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:${props=>props.isDesktop?"space-around":"flex-start"};
    padding:${props=>props.isDesktop?"20vh 0px":"16vw 0px"};
    background:#4E42E2;
`)

export const Selector=WithLayout(styled(BaseSelector)`
margin:${props=>props.isDesktop?"0px":"3.12vw"};
font-size: ${props=>props.isDesktop?"2.10vw":"6.25vw"};
line-height:${props=>props.isDesktop?"2.43vw":"7.18vw"} ;
border-radius: ${props=>props.isDesktop?"0.5vw":"1.56vw"};
width:${props=>props.isDesktop?"25.13vw":"75vw"};
height:${props=>props.isDesktop?"4.95vw":"14.68vw"};
padding:${props=>props.isDesktop?"1.25vw":"3.75vw"};
background: url(images/arrow-down.png) 96% / 10% no-repeat #EEE;
background-color:#FFFFFF;
`)

export const Title=WithLayout(styled(Header)`
visibility:${props=>props.isDesktop?"visible":"hidden"};
text-align:center;
`)
