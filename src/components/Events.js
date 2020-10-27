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
                        <h3>Week 4: October 26<sup>th</sup> - November 1<sup>st</sup></h3>
                    </div>
                    <a href="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dGJwLnVjc2RAZ21haWwuY29t&amp;color=%23227F63&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK&amp;title=TBP%20Calendar"
                        class="button">Subscribe To Our Calendar</a>
                </div>

                <div class="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Wednesday
                                </b></td>
                                <td>October 28, 10am – 11am</td>
                                <td>ECE Student-Faculty Mixer/Coffee Hour</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>October 29, 2pm – 3pm</td>
                                <td>Qualcomm CDMA Technology Software Division Tech Talk</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>October 29, 4pm – 5pm</td>
                                <td>High School Q & A Outreach</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
                                <td>October 30, 7pm – 8pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
                                <td>October 30, 8pm – 9pm</td>
                                <td>NanoChemE Trivia Night</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Events
