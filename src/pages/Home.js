import React, { Component } from 'react'
import Events from '../components/Events'
import NavBar from '../components/NavBar'
export class Home extends Component
{
    render ()
    {
        return (
            <>
                <head>
                    <title>Tau Beta Pi, California Psi</title>
                </head>
                <NavBar />
                <div id="wrapper">

                    <section id="intro" class="wrapper style1 fullscreen fade-up">
                        <div class="inner">
                            <h1>Tau Beta Pi, California Psi</h1>
                            <h3>The Premier Engineering Honor Society at UC San Diego</h3>
                            <p>Most prominent engineering honor society since 1994. Focusing on serving our members and the
                            public to promote integrity and excellence in engineering. </p>
                            <ul class="actions">
                                <li><a href="initiation" class="button scrolly">Join Us</a></li>
                                <li><a href="https://tbp.ucsd.edu/points" class="button scrolly">Point Tracking App</a></li>
                                <li><a href="events" class="button scrolly">Our Events</a></li>
                                <li><a href="#contact" class="button scrolly">Contact Us</a></li>
                            </ul>
                        </div>
                    </section>

                    <section id="who" class="wrapper style2 spotlights">
                        <section>
                            <div class="image"><img src="images/photos_25_26/IMG_7811.jpg" height="100%" width="110%" alt="" data-position="25% 25%" />
                            </div>
                            <div class="content">
                                <div class="inner">
                                    <h2>Who We Are</h2>
                                    <p>We are the Tau Beta Pi chapter at UC San Diego, one of the top three honor societies in the
                                    nation.
                                    Our Officers keep our chapter active and help promote the future growth of our chapter by
                                    nurturing our integrity, character, and charitability through hosting events.
						</p>
                                    <ul class="actions">
                                        <li><a href="community" class="button">Explore Our Chapter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id="join" class="wrapper style1 spotlights">
                        <section>
                            <a href="initiation" class="image"><img src="images/DSC_0015.JPG" height="100%" width="110%" alt=""
                                data-position="center center" /></a>
                            <div class="content">
                                <div class="inner">
                                    <h2>Invitations</h2>
                                    <p>Invitations are sent to students in the <strong>top 1/8th of the Junior class</strong> and
							<strong> top 1/5th of the Senior class</strong> during the first 2 weeks of Fall and Winter
							quarter.
							After being invited it's up to you to initiate.</p>
                                    <ul class="actions">
                                        <li><a href="initiation" class="button">Explore Initiation</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <a href="membership" class="image"><img src="images/DSC_0633.JPG" height="100%" width="110%" alt=""
                                data-position="top center" /></a>
                            <div class="content">
                                <div class="inner">
                                    <h2>Why Join?</h2>
                                    <p>Membership provides you access to our events and networking opportunities that will help you
							succeed in your future career.</p>
                                    <ul class="actions">
                                        <li><a href="membership" class="button">Explore Membership Benefits</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>

                    <Events />

                    <section id="contact" class="wrapper style1 fade-up">
                        <div class="inner">
                            <h2>Contact Us</h2>
                            <ul class="actions">
                                <li><a href="mailto:taubetapi.at.ucsandiego@gmail.com?Subject=General%20Questions" target="_top" class="button">General
							Questions</a></li>
                                <li><a href="mailto:taubetapi.at.ucsandiego@gmail.com?Subject=Company%20Positions" target="_top" class="button">Advertise
							Company Positions</a></li>
                                <li><a href="mailto:taubetapi.at.ucsandiego@gmail.com?Subject=Company%20info" target="_top" class="button">Company
							Information Session</a></li>
                            </ul>
                            <section>
                                <ul class="contact">
                                    <li>
                                        <h3>Social</h3>
                                        <ul class="icons">
                                            <li><a href="https://www.facebook.com/tbpucsd/" class="fa-facebook"><span
                                                class="label">Facebook</span></a></li>
                                            <li><a href="https://www.linkedin.com/company/tau-beta-pi-california-psi/"
                                                class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
                                            <li><a href = "https://www.instagram.com/tbp.atucsd/" class="fa-instagram"><span class="label">Instagram</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </section>

                        </div>
                    </section>

                </div>

                <footer id="footer" class="wrapper style2">
                    <div class="inner">
                        <ul class="menu">
                            <li>&copy; Tau Beta Pi California Psi. All rights reserved.</li>
                            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            <li>Satyam Gupta was here :)</li>
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}

export default Home
