import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import NavLinks from './NavLinks'
const NavBar = props =>
{
    const [ mobile, setMobile ] = useState( false )
    const [ active, setActive ] = useState( false )

    useEffect( () =>
    {
        window.addEventListener( "resize", resize );
        resize()
        return () =>
        {
            window.removeEventListener( "resize", resize );
        }
    }, [] )

    const resize = () =>
    {
        setMobile( ( window.innerWidth <= 736 ) )
    }

    const headerIcon = () =>
    {
        if ( active ) return '⌧'
        return '≡'
    }

    const activateMenu = () =>
    {
        if ( active ) document.body.style.overflow = "visible"
        else document.body.style.overflow = "hidden"

        setActive( !active )
    }

    const headerMenu = () =>
    {
        if ( active )
        {
            return (
                <section class="" style={ styles.headerMenu }>
                    <div class="inner">
                        <NavLinks { ...props } mobile={ true } close={ () => setActive( false ) } />
                    </div>
                </section>
            )
        }
    }

    // Mobile header
    if ( mobile ) return (
        <>
            <section id="sidebar" style={ styles.headerContainer }>
                <div class="inner" onClick={ activateMenu }>
                    <div style={ styles.hamburger } >
                        { headerIcon() }
                    </div>
                </div>
            </section>
            { headerMenu() }
        </>
    )

    // Normal header
    return (
        <section id="sidebar">
            <div class="inner">
                <NavLinks { ...props } />
            </div>
        </section>
    )
}

const styles = {
    headerContainer: {
    },
    hamburger: {
        fontSize: 'xx-large',
        color: 'white'
    },
    headerMenu: {
        position: 'fixed',
        zIndex: 1000,
        width: '100vw',
        backgroundColor: '#03396c',
        padding: '3em 0 0 0',
        height: '100vh'
    }
}
export default withRouter( NavBar )
