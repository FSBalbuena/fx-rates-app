import React from 'react'
import PropTypes from 'prop-types'
import {NavBar, NavLink} from './StoryBook'

const AppNav=({links,background,pathname})=>(
<NavBar bg={background}>
    {links
        .map(link=>(
        <NavLink 
        key={link.text}
        {...link}
        active={pathname===link.to}
        >
            {link.text}
        </NavLink>))}
</NavBar>)

AppNav.propTypes={
    links:PropTypes.array,
    background:PropTypes.oneOfType(
        [PropTypes.string,PropTypes.object]
        ),
    pathname:PropTypes.string
}

AppNav.defaultProps={
    links:[],
    background:null,
    pathname:"/home"
}
export default AppNav
