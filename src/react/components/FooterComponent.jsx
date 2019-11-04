import React from 'react'
import PropTypes from 'prop-types'
import {Footer,Text} from './StoryBook'

const styles=isDesktop=>({
    text:{
        fontSize: isDesktop?"2.5vh":"",
        lineHeight: isDesktop?"2.5vh":"",
    },
    wrapper:{
        position:"relative",
        top:"0px",
        left:"0px"
    },
    Footer:{
        top:isDesktop?"-7.41vh":"",
        height:isDesktop?"7.41vh":""
    }
})

const FooterComponent=({background,text,isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <div style={classes.wrapper}>
        <Footer bg={background} style={classes.Footer}>
            <Text textAlign={"center"} 
            style={classes.text}
            >
                {text}
            </Text>
        </Footer>
        </div>
)
}

FooterComponent.propTypes={
    text:PropTypes.string,
    background:PropTypes.oneOfType(
        [PropTypes.string,PropTypes.object]
        )
}
FooterComponent.defaultProps={
    text:"Footer Text",
    background:null,
    isDesktop:false
}
export default FooterComponent
