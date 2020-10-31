
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
            red_points: -1,
            blue_points: -1,
            green_points: -1,
        }
    }

    componentDidMount ()
    {
        this.getPoints()
    }

    getPoints = () =>
    {
        axios.get( apiUrl + 'house/points', { params: { house: 'red' } } )
            .then( ( response ) =>
            {
                this.setState( { red_points: response.data.total_points },
                    () =>
                    {

                        axios.get( apiUrl + 'house/points', { params: { house: 'blue' } } )
                            .then( ( response ) =>
                            {
                                this.setState( { blue_points: response.data.total_points },
                                    () =>
                                    {
                                        axios.get( apiUrl + 'house/points', { params: { house: 'green' } } )
                                            .then( ( response ) =>
                                            {
                                                this.setState( { green_points: response.data.total_points },
                                                    () =>
                                                    {
                                                        console.log( this.state )
                                                    } )
                                            } )
                                            .catch( ( error ) =>
                                            {
                                                console.log( error, error.response );
                                            } )
                                    } )
                            } )
                            .catch( ( error ) =>
                            {
                                console.log( error, error.response );
                            } )
                    } )
            } )
            .catch( ( error ) =>
            {
                console.log( error, error.response );
            } )
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
                                <p>
                                    To generate a greater sense of community, we are proud to have a house and a family system. Initiates are sorted into one of three houses, <b>RED</b>, <b>BLUE</b>, and <b>GREEN</b>.
Each house is composed of 6 families, each containing around <b>5 to 7 initiates and led by 1-2 members / officers</b>.
                                </p>
                                <p>
                                    In each initiation cycle, there are three total <b>all house competitions</b>. This is when all the different houses compete to show which house is smarter, faster, and stronger than the others.
                                    At the end of the initiation cycle, we will tally up all the house points earned throughout the cycle to determine the clear winner. Any and all <b>initiation points</b> count towards your <b>house's points</b>, so go out there and make your house proud by attending events and winning points in the house competitions!.
</p>
                            </div>
                        </section>
                        <section id="main" class="wrapper style1">
                            <div class="inner">
                                <h1>House Points</h1>
                                <div style={ styles.pointContainer }>
                                    <HousePoint house='RED' points={ this.state.red_points } />
                                    <HousePoint house='BLUE' points={ this.state.blue_points } />
                                    <HousePoint house='GREEN' points={ this.state.green_points } />
                                </div>
                            </div>
                        </section>


                        <footer id="footer" class="wrapper style2">
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
