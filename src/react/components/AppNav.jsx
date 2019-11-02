import React from 'react'
import PropTypes from 'prop-types'
import {NavBar, NavLink} from './StoryBook'

const AppNav=({links,background})=>(
<NavBar bg={background}>
    {links
        .map(link=>(
        <NavLink key={link.text} {...link.props}>
            {link.text}
        </NavLink>))}
</NavBar>)

AppNav.propTypes={
    links:PropTypes.array,
    background:PropTypes.oneOfType(
        [PropTypes.string,PropTypes.object]
        )
}

AppNav.defaultProps={
    links:[],
    background:null
}
export default AppNav
