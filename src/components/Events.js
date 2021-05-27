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
                        <h3>Week 1 - 2: March 29<sup>th</sup> - April 10<sup>th</sup></h3>
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
                                <td>March 30, 5pm – 6pm</td>
                                <td>Northrop Grumman: Adapting to Change Panel</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Wednesday
                                </b></td>
                                <td>April 3, 7pm – 8pm</td>
                                <td>TBP Chess Tournament</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Monday
                                </b></td>
                                <td>April 5, 7 - 8pm</td>
                                <td>Weekly Board Games</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Tuesday
                                </b></td>
                                <td>April 6, 8pm – 10pm</td>
                                <td>All House Competition 3: Tier List War!</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Wednesday
                                </b></td>
                                <td>April 7, 5pm – 7pm</td>
                                <td>Resume Critique</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Thursday
                                </b></td>
                                <td>April 8, 5pm - 6pm</td>
                                <td>LinkedIn Workshop</td>
                            </tr>
                            <tr>
                                <td style={ { borderColor: 'white', borderWidth: '2px' } }><b>
                                    Saturday
                                </b></td>
                                <td>April 9, 7pm - 8pm</td>
                                <td>Minecraft Pro Gaming Speedrun</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Events
