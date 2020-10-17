import React, { Component } from 'react'
import EventList from '../components/Events'
import NavBar from '../components/NavBar'
export class Events extends Component
{
    render ()
    {
        return (
            <>
                <head>
                    <title>TBP Events</title>
                </head>
                <body>
                    <NavBar />
                    <div id="wrapper">
                        <EventList>
                            <h1 class='major' style={ { margin: 0 } }>Events and Activities</h1>
                            <p>Unless otherwise stated, most of our events are exclusive to members and initiates only. Members can and are encouraged to bring plus ones.</p>
                        </EventList>


                        <section id="gaming" class="wrapper style1 spotlights">
                            <section>
                                <div href="initiation" class="image"><img src="images/Minecraft.jpg" alt=""
                                    data-position="center center" /></div>
                                <div class="content">
                                    <div class="inner">
                                        <h2>Tau Beta Play</h2>
                                        <p>
                                            Our members are active on Discord and you can catch us playing videogames, playing boardgames, chatting, or just vibing.
                                            If you are an initiate/member who is not on our discord, or you would like to play on our Minecraft server, contact us by hitting the play button below.
</p>
                                        <ul class="actions">
                                            <li><a href="mailto:tbp@ucsd.edu?Subject=Discord" target="_top" class="button">Play</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
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

export default Events
