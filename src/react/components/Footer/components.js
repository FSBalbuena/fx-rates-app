import styled from 'styled-components'
import WithLayout from '../../containers/WithLayout'

export const FooterWrapper=styled.div`
    position:relative;
    top:0px;
    left:0px;
`

export const Footer=WithLayout(styled.footer`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    position:absolute;
    left:0px;
    top:${props=>props.isDesktop?"-7.41vh":"-12.81vw"};
    background:${props=>props.bg || "#4E42E2"};
    height:${props=>props.isDesktop?"7.41vh":"12.81vw"};
`)
