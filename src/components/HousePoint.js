import React from 'react'

const HousePoint = props =>
{
    return (
        <div style={ {
            ...styles.whole,
            ...props.points !== -1
                ? { opacity: 1 }
                : { opacity: 0 }
        } }>
            <h3 style={ styles.house }>{ props.house }</h3>
            <div style={ styles.points }>{ props.points }</div>
        </div>
    )
}

const styles = {
    whole: {
        transition: 'opacity .6s ease-in',
        textAlign: 'center'
    },
    house: {
        fontSize: 'xx-large'
    }
}

export default HousePoint
