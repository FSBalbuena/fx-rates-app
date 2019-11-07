import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'
import {Background,Header} from '../StoryBook'
import {CardText} from '../Cards'



export const RatesBackground=WithLayout(styled(Background)`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:${props=>props.isDesktop?"space-around":"flex-start"};
    padding:${props=>props.isDesktop?"20vh 0px":"16vw 0px"};
    background:#4E42E2;
`)

export const Title=WithLayout(styled(Header)`
visibility:${props=>props.isDesktop?"visible":"hidden"};
text-align:center;
`)

export const RateProperty = WithLayout(styled(CardText)`
    width:50%;
    display:inline;
    padding:${props=>props.isDesktop?"0.78vw 0px":"2.81vw 0px"};
    text-align:${props=>props.textAlign || "left"}
`)
export const CustomWrapper=WithLayout(styled.div`
display:flex;
justify-content:space-between;
text-align:center;
padding:${props=>props.isDesktop?"0px 1.56vw":"0px 5.62vw"};
`)

export const Divider=styled.hr`
width:90%;
margin:0px auto;
height:0.5vh;
color:#4488FF;
background-color:#4488FF
`