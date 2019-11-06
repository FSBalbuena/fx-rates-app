import React from 'react'
import PropTypes from 'prop-types'
import {Text} from '../StoryBook'
import {FooterWrapper, Footer} from './components'


const FooterComponent=({background,text})=>(
        <FooterWrapper >
            <Footer bg={background}>
                <Text textAlign={"center"} >
                    {text}
                </Text>
            </Footer>
        </FooterWrapper>
)

FooterComponent.propTypes={
    text:PropTypes.string,
    background:PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.object
        ]
        )
}
FooterComponent.defaultProps={
    text:"Footer Text",
    background:null
}
export default FooterComponent
