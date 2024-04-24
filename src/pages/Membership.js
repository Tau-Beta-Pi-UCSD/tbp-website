import React from 'react'
import NavBar from '../components/NavBar'

const Membership = () =>
{
    return (
        <>
            <head>
                <title>TBP Membership</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
            </head>
            <body class="is-preload">

                <NavBar />

                <div id="wrapper">

                    <section class="wrapper style2">
                        <div class="inner">
                            <h1 class="major">Membership Benefits</h1>
                            <p>By becoming an official Tau Beta Pi member, you will enjoy lifetime benefits that will follow you in whatever profession and endeavor you choose to pursue...</p>
                            <ul>
                                <li>Being associated with the prestige of the Tau Beta Pi Association </li>
                                <li>Exclusive scholarships and fellowships for TBP members</li>
                                <li>Unique networking opportunities with well-accomplished men and women in the engineering profession</li>
                                <li>Many different leadership and involvement opportunities by becoming officers or house leaders</li>
                            </ul>
                            <p>For an extensive list of official benefits, please see our headquarters webpage.</p>
                            <ul class="actions">
                                <li><a href="https://www.tbp.org/memb/benefits.cfm" class="button">Explore More</a></li>
                            </ul>
                        </div>
                    </section>
                    {/* Not currently doing Active membership - Vincent
                    <section id="benefits" class="wrapper style1">
                        <div class="inner">
                            <h2>Active Membership Benefits</h2>
                            <p>Benefits for being a Tau Beta Pi active member include:
								<ul>
                                    <li>Priority to events with restricted participation</li>
                                    <li>Discount on Social Events (Variable for every Event)</li>
                                    <li>Discounts on stoles and cords</li>
                                    <li>Free entrance to end of year banquet</li>
                                    <li>Coffee hours with professors (Once per quarter)</li>
                                    <li>1 free t-shirt from one of the initiation cycles</li>
                                    <li>And the warm, fuzzy feeling you get when you say, “I’m an active member!”</li>
                                </ul>
								Buying Stoles: $22 inactive, $15 active <br />
                                    Buying Cords: $17 inactive, $9 active <br />
                                        Renting Stoles: $11 inactive, $6 active <br />
                                            Renting Cords: $10 inactive, $5 active
							</p>
                        </div>
                    </section>

                    <section id="requirements" class="wrapper style2 spotlights">
                        <section>
                            <div href="#" class="image"><img src="images/DSC_0150.JPG" alt="" data-position="top center" /></div>
                            <div class="content">
                                <div class="inner">
                                    <h2>How to Stay Active?</h2>
                                    <p>The requirements for active membership are as follows:
										<ul>
                                            <li>8 points a quarter (from any category) grants active status for the sequential quarter</li>
                                            <li>Points must be recorded and signed either on a point sheet or through <a href="https://tbp.ucsd.edu/points/">the points application</a> </li>
                                            <li>A max of 4 Non-TBP Professional events can be used as points towards Active Status</li>
                                            <li>If you have just initiated, you are automatically deemed Active Status for the current and following quarter</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                    */}

                    <section id="leadership" class="wrapper style1 spotlights">
                        <section>
                            <div href="#" class="image"><img src="images/DSC_1062.JPG" alt="" data-position="25% 25%" /></div>
                            <div class="content">
                                <div class="inner">
                                    <h2>Leadership Opportunities</h2>
                                    <p>
                                        Members have the opportunity to apply to the 20 officer positions available at the UCSD CA Psi chapter of Tau Beta Pi. This is an excellent opportunity to become more involved in the engineering community and encourage professional development. Officers work extensively with other engineering orgs throughout the year, in addition to external involvement with TBP headquarters.

                                        We encourage members interested in becoming officers to become house leaders, where they will be involved in the initiation process and help encourage the next generation of Tau Beta Pi members. In addition, please feel free to contact any of the officers if you have interest in joining a committee.
									</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id="networking" class="wrapper style2 spotlights">
                        <section>
                            <div href="#" class="image"><img src="images/DSC_0608.JPG" alt="" data-position="25% 25%" /></div>
                            <div class="content">
                                <div class="inner">
                                    <h2>Networking Opportunities</h2>
                                    <p>
                                        TBP members have the opportunity to connect with other members across the country. In addition to alumni and industry mixers that the UCSD CA Psi offers throughout the year, members should feel free to connect on these groups:
									</p>
                                    <ul class="actions">
                                        <li><a href="https://www.linkedin.com/company/the-tau-beta-pi-association-inc./about/" class="button">TBP LinkedIn</a></li>
                                        <li><a href="https://www.facebook.com/groups/tbp.ucsd/" class="button">UCSD Ca Psi FB</a></li>
                                        <li><a href="https://www.facebook.com/groups/tbpd16/" class="button">District 16 TBP FB</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id="scholarships" class="wrapper style1">
                        <div class="inner">
                            <h2>Scholarships and Fellowships</h2>
                            <p>
                                TBP provides many opportunities for stipends used to further the education 
                                of current members. Awards have been made to more than 2,798 Scholars for 
                                their senior year of engineering study. If you are more interested in 
                                scholarship/fellowship opportunities, please visit the TBP headquarters 
                                webpage.
							</p>
                            <ul class="actions">
                                <li><a href="https://www.tbp.org/scholarships.cfm" class="button">Explore TBP Scholarships</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

                <footer id="footer" class="wrapper style2">
                    <div class="inner">
                        <ul class="menu">
                            <li>&copy; Tau Beta Pi California Psi. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>
                </footer>
            </body>

        </>
    )
}

export default Membership
