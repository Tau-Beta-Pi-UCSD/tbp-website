import React from 'react'

const HousePoint = props =>
{
    const classStyle = () =>
    {
        if ( props.place === 2 ) return 'style2'
        else return 'style1'
    }

    return (
        <section id={ props.house } class={ "wrapper spotlights " + classStyle() }>
            <section>
                <div class="content">
                    <div class="inner">
                        <h2>{ props.house }</h2>
                        <div style={ styles.points }>
                            { props.points }
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

const styles = {
    whole: {
        textAlign: 'center'
    },
    house: {
        fontSize: 'xx-large'
    },
    points: {
        fontSize: 'xxx-large',
        color: 'white',
        fontWeight: 'bold'
    },
    place: {
        width: 200,
        height: 200
    },
}

export default HousePoint
