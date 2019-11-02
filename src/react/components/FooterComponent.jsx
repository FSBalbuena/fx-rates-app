import React from 'react'
import PropTypes from 'prop-types'
import {Footer,Text} from './StoryBook'

const styles=isDesktop=>({
    text:{
        fontSize: isDesktop?"2.5vh":"",
        lineHeight: isDesktop?"2.5vh":"",
    }
})

const FooterComponent=({background,text,isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <Footer bg={background}>
            <Text textAlign={"center"} 
            style={classes.text}
            >
                {text}
            </Text>
        </Footer>
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
