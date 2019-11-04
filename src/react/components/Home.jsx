import React from 'react'
import PropTypes from 'prop-types'
import {Background, Header, HomeButton, AppLink} from './StoryBook'

const styles=(isDesktop)=>({
    background:{
        display:"flex",
        justifyContent:"space-evenly",
        padding:"12.60vmin 0px",
        alignItems:"center",
        flexDirection:"column"
    },
    header:{
        width:isDesktop?"70%":"89vmin",
        maxWidth:isDesktop?"36.25vw":"",
        fontSize:isDesktop?"7vh":"",
        lineHeight:isDesktop?"7vh":"",
        textAlign:"center"
    },
    button:{
        width:isDesktop?"25.55vw":"",
        fontSize:isDesktop?"4.19vh":"",
        lineHeight:isDesktop?"4.19vh":"",
        height:isDesktop?"9.27vh":"",
    }
})
const HomeComponent=({text,isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg="url(/images/planet.png)" style={classes.background}>
            <Header style={classes.header}>
                {text.header}
            </Header>
            <AppLink to={text.href}>
                <HomeButton style={classes.button} >
                    {text.button}
                </HomeButton>
            </AppLink>
            
        </Background>
    )
}

HomeComponent.propTypes={
    text:PropTypes.shape({
        header:PropTypes.string,
        button:PropTypes.string,
        href:PropTypes.string
    }),
    isDesktop:PropTypes.bool
}
HomeComponent.defaultProps={
    text:{
        header:"Welcome",
        button:"Start Free",
        href:"/rates"
    },
    isDesktop:false
}
export default HomeComponent
