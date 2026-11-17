import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = props =>
{
    return (
        <Link
            to={ props.to }
            style={ {
                ...( props.active === props.to ) ? { color: 'white' } : {},
                border: 'none',
                userSelect: 'none',
                mozUserSelect: 'none',
                WebkitUserSelect: 'none'
            } }
            onClick={ () => { props.setActive( props.to ) } }
        >
            <div>
                { props.name }
            </div>
        </Link>
    )
}

export default NavItem
