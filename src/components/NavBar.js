import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
const NavBar = props =>
{
    const [ active, setActive ] = useState( props.location.pathname.substring( 1 ) )

    const activeStyle = type =>
    {
        if ( type === active ) return { color: 'white' }
    }
    return (
        <section id="sidebar">
            <div class="inner">
                <nav>
                    <ul>
                        <li
                            onClick={ () => { setActive( 'home' ) } }
                        >
                            <a href="home" style={ activeStyle( 'home' ) }>Home</a>
                        </li>
                        <li
                            onClick={ () => { setActive( 'initiation' ) } }
                        >
                            <a href="initiation" style={ activeStyle( 'initiation' ) }>Initiation</a>
                        </li>
                        <li
                            onClick={ () => { setActive( 'membership' ) } }
                        >
                            <a href="membership" style={ activeStyle( 'membership' ) }>Membership</a>
                        </li>
                        <li
                            onClick={ () => { setActive( 'officers' ) } }
                        >
                            <a href="officers" style={ activeStyle( 'officers' ) }>Officers</a>
                        </li>
                        <li
                            onClick={ () => { setActive( 'community' ) } }
                        >
                            <a href="community" style={ activeStyle( 'community' ) }>TBP Community</a>
                        </li>
                        <li
                            onClick={ () => { setActive( 'events' ) } }
                        >
                            <a href="events" style={ activeStyle( 'events' ) }>Events</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default withRouter( NavBar )
