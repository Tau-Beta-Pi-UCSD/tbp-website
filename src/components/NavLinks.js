import React, { useState } from 'react'
import NavItem from './NavItem'

const NavLinks = props =>
{
    const [ active, setActive ] = useState( props.location.pathname.substring( 1 ) )

    const mobileStyle = () =>
    {
        if ( props.mobile ) return styles.mobile
    }

    const activateLink = val =>
    {
        setActive( val )
        if ( props.close ) props.close()
    }

    return (
        <nav style={ { width: '' } }>
            <ul style={ { listStyleType: 'none', padding: 0, margin: 0, width: '100%' } }>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem
                        to='home'
                        name='Home'
                        setActive={ activateLink }
                        active={ active }
                    />
                </li>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem to='initiation' name='Initiation' setActive={ activateLink } active={ active } />
                </li>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem to='membership' name='Membership' setActive={ activateLink } active={ active } />
                </li>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem to='community' name='TBP Community' setActive={ activateLink } active={ active } />
                </li>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem to='events' name='Events' setActive={ activateLink } active={ active } />
                </li>
                <li
                    style={ mobileStyle() }
                >
                    <NavItem to='houses' name="Houses & Families" setActive={ activateLink } active={ active } />
                </li>
            </ul>
        </nav>
    )
}

const styles = {
    mobile: {
        fontSize: 'large',
        padding: '10px 0',
        border: 'solid',
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: '0 0 1px 0',
        textTransform: 'uppercase',
        fontSize: '0.8em',
        fontWeight: 'bold',
        letterSpacing: '0.25em',
        lineHeight: '0.75',
        outline: 0,
        padding: '2em',
        width: '100%'
    },
}

export default NavLinks
