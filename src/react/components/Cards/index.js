import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'
import {Text} from '../StoryBook'

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
