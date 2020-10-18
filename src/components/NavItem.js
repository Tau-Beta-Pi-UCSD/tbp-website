import React from 'react'

const NavItem = props =>
{
    return (
        <a
            href={ props.to }
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
        </a>
    )
}

export default NavItem
