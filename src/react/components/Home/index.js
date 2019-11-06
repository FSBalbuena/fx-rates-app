import React from 'react'
import PropTypes from 'prop-types'
import {AppLink} from '../StoryBook'
import {HomeBackground,HomeButton,HomeHeader} from './components'


const HomeComponent=({text})=>(
        <HomeBackground>
            <HomeHeader>
                {text.header}
            </HomeHeader>
            <AppLink to={text.href}>
                <HomeButton >
                    {text.button}
                </HomeButton>
            </AppLink>
        </HomeBackground>
    )


HomeComponent.propTypes={
    text:PropTypes.shape({
        header:PropTypes.string,
        button:PropTypes.string,
        href:PropTypes.string
    })
}
HomeComponent.defaultProps={
    text:{
        header:"Welcome",
        button:"Start Free",
        href:"/rates"
    }
}
export default HomeComponent
