
import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { apiUrl } from '../constants/server'
import HousePoint from '../components/HousePoint';

export class Houses extends Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            points: [],
            loading: true
        }
    }

    componentDidMount ()
    {
        this.getPoints()
    }

    getPoints = () =>
    {
        axios.get( apiUrl + 'house/points' )
            .then( ( response ) =>
            {
                const pointsArray = response.data
                var red = {}
                var blue = {}
                var green = {}
                for ( var i = 0; i < pointsArray.length; i++ )
                {
                    const points = pointsArray[ i ].total_points
                    switch ( pointsArray[ i ].houseId )
                    {
                        case 1:
                            red = { house: 'Red', points }
                            break
                        case 2:
                            blue = { house: 'Blue', points }
                            break
                        case 3:
                            green = { house: 'Green', points }
                            break
                        default:
                            break
                    }
                }

                this.setState( {
                    points: [ red, blue, green ],
                    loading: false
                } )
            } )
            .catch( ( error ) =>
            {
                console.log( error, error.response );
            } )
    }

    renderPoints ()
    {

        if ( this.state.points.length > 0 )
        {
            const data = [ ...this.state.points ]
            data.sort( ( a, b ) => { return b.points - a.points } )
            return data.map( item =>
            {
                return (
                    <tr key={ item.house }>
                        <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                            { item.house }
                        </b></td>
                        <td>{ item.points }</td>
                    </tr>
                )
            } )
        }
    }

    render ()
    {
        return (
            <>
                <head>
                    <title>TBP Houses</title>
                </head>
                <body>
                    <NavBar />
                    <div id="wrapper">
                        <section id="main" class="wrapper style2">
                            <div class="inner">
                                <h1 class="major">Houses and Families</h1>
                                <div class="table-wrapper">
                                    <h3>Current House Points Total</h3>
                                    { this.state.loading
                                        ?
                                        "Loading..."
                                        : null
                                    }
                                    <table>
                                        <tbody>
                                            { this.renderPoints() }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        <section id="what" class="wrapper style1 spotlights">
                            <section>
                                <div class="image"><img src="images/DSC_0066.JPG" alt="" data-position="25% 25%" />
                                </div>
                                <div class="content">
                                    <div class="inner">
                                        <h2>Houses and Families?</h2>
                                        <p>
                                            To generate a greater sense of community, we are proud to have a house and a family system. Initiates are sorted into one of three houses, <b>RED</b>, <b>BLUE</b>, and <b>GREEN</b>.
Each house is composed of 6 families, each containing around <b>5 to 7 initiates and led by 1-2 members / officers</b>.
                                </p>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section id="why" class="wrapper style2 spotlights">
                            <section>
                                <div class="image"><img src="images/DSC_0012.JPG" alt="" data-position="25% 25%" />
                                </div>
                                <div class="content">
                                    <div class="inner">
                                        <h2>House Points and Why You Need Them</h2>
                                        <p>
                                            Any and all <b>initiation points</b> count towards your <b>house's points</b>. Winning <b>all house competitions</b> contribute a huge amount of house points.
</p>
                                        <p>
                                            At the end of the initiation cycle, we will tally up all the house points earned throughout the cycle to determine a winner. <b>The winning house gets their initiation fees reduced.</b>
                                        </p>
                                        <p>
                                            So go out there and make your house proud by <b>attending events</b> and <b>winning the house competitions!</b>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <footer id="footer" class="wrapper style1">
                            <div class="inner">
                                <ul class="menu">
                                    <li>&copy; Tau Beta Pi California Psi. All rights reserved.</li>
                                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                    <li>Fajar B. Dirham was here :)</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </body>
            </>
        )
    }
}

const styles = {
    pointContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
}
export default Houses
