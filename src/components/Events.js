import React from 'react'

const Events = props =>
{

    return (
        <section id="events" class={ "wrapper fade-up style2" }>
            <div class="inner">
                <div class="calendar-header">
                    { props.children }
                    <div>
                        { props.children ?
                            null
                            : <h2>Upcoming Events</h2>
                        }
                        <h3>Week 2: January 11<sup>th</sup> - January 16<sup>th</sup></h3>
                    </div>
                    <a href="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dGJwLnVjc2RAZ21haWwuY29t&amp;color=%23227F63&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK&amp;title=TBP%20Calendar"
                        class="button">Subscribe To Our Calendar</a>
                </div>

                <div class="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Tuesday
                                </b></td>
                                <td>January 12, 2pm – 6pm</td>
                                <td>Winter Engineers on the Green</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Tuesday
                                </b></td>
                                <td>January 12, 7:30pm – 9:30pm</td>
                                <td>Red House Game Night</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Wednesday
                                </b></td>
                                <td>January 13, 7pm – 9pm</td>
                                <td>Blue House Movie Night</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>January 14, 7pm – 9pm</td>
                                <td>Resume Critique</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>January 14, 8pm – 9pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
                                <td>January 15, 6:30pm - 8:00pm</td>
                                <td>TBP x BMES Lab Expo Workshop</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
                                <td>January 15, 8pm - 9pm</td>
                                <td>Meet the Officers</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Saturday
                                </b></td>
                                <td>January 16, 8pm - 9pm</td>
                                <td>Minecraft Bingo Night</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Events
