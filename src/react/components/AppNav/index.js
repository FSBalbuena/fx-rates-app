import React from 'react'
import PropTypes from 'prop-types'
import {NavBar, NavLink} from './components'

/*Part of AppNavContainer */

const AppNav=({links,background,pathname})=>(
    <NavBar bg={background}>
        {links.map(link=>(
            <NavLink 
            key={link.text}
            {...link}
            active={pathname===link.to?1:0}
            >
                {link.text}
            </NavLink>))}
    </NavBar>)

AppNav.propTypes={
    links:PropTypes.array,
    background:PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.object
        ]
        ),
    pathname:PropTypes.string
}

AppNav.defaultProps={
    links:[],
    background:null,
    pathname:"/home"
}
export default AppNav
