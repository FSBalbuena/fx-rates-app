import React from 'react'
import PropTypes from 'prop-types'
import {Footer,Text,Wrapper} from './StoryBook'



const FooterComponent=({background,text,isDesktop})=>(
        <Wrapper >
            <Footer bg={background}>
                <Text textAlign={"center"} >
                    {text}
                </Text>
            </Footer>
        </Wrapper>
)

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
