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
                        <h3>Weeks 2-3: October 12<sup>th</sup> - October 25<sup>th</sup></h3>
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
                                <td>Oct 13, 8pm-9pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
                                <td>Oct 16, 7pm-8pm</td>
                                <td>Honor Society Info Session</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Monday
                                </b></td>
                                <td>Oct 19, 5pm-7pm</td>
                                <td>Northrop Grumman Tech Talk</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Monday
                                </b></td>
                                <td>Oct 19, 7pm-9pm</td>
                                <td>House Sorting</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Tuesday
                                </b></td>
                                <td>Oct 20, 12pm-4pm</td>
                                <td>Honors Career Fair</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Tuesday
                                </b></td>
                                <td>Oct 20, 8pm-9pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>Oct 22, 8pm-10pm</td>
                                <td>Netflix Party Movie Night</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Events
