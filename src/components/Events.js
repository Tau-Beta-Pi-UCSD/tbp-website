import React from 'react'

const Events = props =>
{

    return (
        <section id="events" class={ "wrapper fade-up style2" }>
            <div class="inner">
                <div class="calendar-header">
                    { props.children }
                    {/* <div>
                        { props.children ?
                            null
                            : <h2>Upcoming Events</h2>
                        }
                        <h3>Week 4 - 5: Oct 17<sup>th</sup> - Oct 30<sup>th</sup></h3>
                    </div> */}
                    <a href="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dGJwLnVjc2RAZ21haWwuY29t&amp;color=%23227F63&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=WEEK&amp;title=TBP%20Calendar"
                        class="button">Subscribe To Our Calendar</a>
                </div>

                {/* <div class="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td>October 10, 4-5 PM</td>
                                <td>NanoEngineering Study Session</td>
                            </tr>
                            <tr>
                                <td>October 10, 5:30 PM - 7:00 PM</td>
                                <td>All House Competition #1 - Scavenger Hunt</td>
                            </tr>
                        </tbody>
                    </table> */}
                {/* </div> */}
            </div>
            <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dGJwLnVjc2RAZ21haWwuY29t&color=%23E67C73" 
                style={{border:"solid 1px #777", margin: "0 5rem 0 5rem", width: "80%", height:"40rem", frameborder:"0", scrolling:"no"}}></iframe>
        </section>
    )
}

export default Events
