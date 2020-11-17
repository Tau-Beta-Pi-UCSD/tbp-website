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
                        <h3>Weeks 6-7: November 9<sup>th</sup> - November 22<sup>nd</sup></h3>
                    </div>
                    <a href="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dGJwLnVjc2RAZ21haWwuY29t&amp;color=%23227F63&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK&amp;title=TBP%20Calendar"
                        class="button">Subscribe To Our Calendar</a>
                </div>

                <div class="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
								<td>November 12, 7pm – 8pm</td>
                                <td>CSE Leetcode Workshop</td>
                            </tr>
							<tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
								<td>November 13, 5pm – 6pm</td>
                                <td>Princeton Review Test Taking Strategies</td>
                            </tr>
							<tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
								<td>November 13, 7pm – 8pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
							<tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Saturday
                                </b></td>
								<td>November 14, 7pm – 8pm</td>
                                <td>Minecraft Building Night</td>
                            </tr>
							<tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
								<td>November 20, 4:00pm – 5:30pm</td>
                                <td>Trivia Night and Alumni Panel</td>
                            </tr>
							<tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Friday
                                </b></td>
								<td>November 20, 7pm – 8pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Events
