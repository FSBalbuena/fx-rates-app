import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'
import {Background, Header, Button} from '../StoryBook'


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

export const HomeHeader=WithLayout(styled(Header)`
    width:${props=>props.isDesktop?"70%":"89vmin"};
    max-width:${props=>props.isDesktop?"36vw":""};
    text-align:center;
`)

export const HomeBackground=styled(Background)`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    padding:12.60vmin 0px;
    background:url(/images/planet.png);
    background-size:cover;
`