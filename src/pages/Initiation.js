import React from 'react'
import NavBar from '../components/NavBar'

const Initiation = () =>
{
    return ( <>
        <head>
            <title>TBP Initiation</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        </head>
        <body>

            <NavBar /> 

            <div id="wrapper">

                <section id="main" class="wrapper style2">
                    <div class="inner">
                        <h1 class="major">Initiation</h1>
                        <p>The Tau Beta Pi chapter at UC San Diego conducts two Initiations per academic year. Invitations to eligible students are mailed out during Weeks 1 and 2 of the Fall and Winter academic quarters to students in the <b>top 1/8th of the Junior class</b> and <b>top 1/5th of the Senior class</b>. For students to have Junior Class standing, they must have completed 90-135 units. To qualify for Senior Class standing, students must have completed over 135 units. In addition, students must have attended UC San Diego for at least one full academic year.</p>
                        <p>After invitations are sent out, info sessions are held for the the invited students to inform them about the initiation process to become a member. During the Initiation Cycle (approximately a 10 week period), initiates will distinguish themselves through their academic excellence and, more significantly, outstanding character. To demonstrate these qualities, initiates will submit a candidate packet that will reflect these qualities, and participate in events with Tau Beta Pi members and officers to gain a sense of the TBP community. After initiate packets are reviewed, initiates will undergo individual interviews conducted by an officer. At this point, initiates who exemplify the qualities of Tau Beta Pi will be invited to the Initiation Ceremony to become Tau Beta Pi members.</p>
                        <p><strong>Once you initiate, you are a lifetime member.</strong> If you continue to come to UCSD's Tau Beta Pi events and retain active membership, you will be eligible for chapter benefits.</p>
                        <span class="image fit"><img src="images/photos_25_26/IMG_7824.jpg" alt="" /></span>

                    </div>
                </section>

                <section id="points" class="wrapper style1">
                    <div class="inner">
                        <h2>Points Requirement</h2>
                        <p>We require eligible initiates to either use our <a href="/points">point tracking app</a> over the course of their Initiation Cycle. A complete list of point requirements for <a href='#g-points'>graduate</a> and <a href='#u-points'>undergraduate</a> students can be found in the section after this one.</p>

                        <p>Points are usually given at a rate of 1 point per hour at each event, and require a sign off from a TBP officer as witness of your attendance.</p>
                        {/* I don't think we need this anymore. I don't even know what year this guy was from - Vincent
                        <p>If you do not use the app, the point verification form must be turned in on the day of Initiation. While 10 - 15 points might seem like a lot, last cycle initiate Nicholas Limit obtained <b>over 50 points!</b></p>*/}
                        <a href="/points" class="button scrolly" >Points App</a>
                    </div>
                </section>

                <section id="u-points" class="wrapper style2">
                    <div class="inner">
                        <h2>Undergraduate Student Points Requirement</h2>
                        <div class="table-wrapper" style={ { margin: '20px 0' } }>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Count</th>
                                        <th>Category</th>
                                        <th>Special Requirement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>Social Events</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Academic/Professional Events</td>
                                        <td>including a <b>mandatory resumé critique or technical workshop</b></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Outreach/Community Service Events</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Coffee with an Officer</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Any Events/Flex Points</td>
                                        <td>including <b>family</b> events</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="g-points" class="wrapper style1">
                    <div class="inner">
                        <h2>Graduate Student Points Requirement</h2>
                        <div class="table-wrapper" style={ { margin: '20px 0' } }>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Count</th>
                                        <th>Category</th>
                                        <th>Special Requirement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Social Event</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Academic/Professional Events</td>
                                        <td>including a <b>mandatory resumé critique</b></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>  
                                        <td>Outreach/Community Service Events</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Coffee with an Officer</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Any Events/Flex Points</td>
                                        <td>including <b>family</b> events</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                {/* We do have Big/Little for WI 24! Update with info */}

                
                <section id="packet" class="wrapper style2">
                    <div class="inner">
                        <h2>Big / Little Matching</h2>
                        <p> 
                            Tau Beta Pi now officially has a big little system! We encourage newer members / initiates who want to get more immersed in TBP life to sign up to become a little.
                            Littles are paired with bigs, usually veteran members of TBP who already have jobs and ample experience, based on personality and career factors.
                            The pair are expected to spend time together in TBP events. This is a perfect opportunity to connect/network with your fellow Tau Bates!
                        </p>
                        <p>
                            Unfotunately we aren't offering the Big / Little system this initiation quarter, however if you are still interested, we plan to continue at a later time.
                            {/* You can opt in to the Big / Little system during the submission of your candidate packet. Watch this space for more information on the Big / Little system! */}
                        </p>
                        {/* Update this once we have a sign up form
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJaJysczS5fl87qefOkl9IsXi97g1WK7klkFWuIAWK20h7kw/viewform" class="button scrolly">CLICK HERE TO SIGN UP</a>
                        */}
                    </div>
                </section>

                <section id="packet" class="wrapper style1 spotlights">
                    <section>
                        {/* Maybe add an image here - Vincent                         
                        <div class="image"><img src="images/russel_bent.png" alt=""
                            data-position="center center" /></div> */}
                        <div class="content">
                            <div class="inner">
                                {/* Updated for WI 26 */}
                                <h2>T-Shirt Design Competition</h2>
                                <p>
                                    Open to all initiates, the T-Shirt Design Competition is a chance to show off your creativity and design skills. 
                                    The winning design will be printed on the TBP shirts for the next initiation cycle. 
                                    <b>The winner will also have their $125 initiation fee waived and receive a copy of their designed T-shirt for free.</b> 
                                    You can submit as many designs as you want, and the winner will be chosen by the TBP officers.
                                </p>
                                <p>
                                    {/* Updated for WI 26 */}
                                    Designs are due <b>sometime</b> for the Winter 2026 cycle.
                                </p>
                                <a href="https://drive.google.com/drive/folders/1BAxYmNOCEgjdDSYVBpV1HBcKz8HOoXVg?usp=sharing" class="button scrolly">Sample Designs</a>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScn3gsZ-ftekQG3taZ4QKIzI_NwAlc4He4gjNw9DOHMubic3w/viewform?usp=sf_link" class="button scrolly">Submission Link</a>

                            </div>
                        </div>
                    </section>
                </section>
                <section id="packet" class="wrapper style2">
                    <div class="inner">
                        <h2>Candidate Packets</h2>
                        {/* Deadline updated for WI 26 */}
                        <p>
                            The following materials should be submitted to the "Candidate Packet Submission" google form at the bottom of the list. 
                            The submission deadline for the current Initiation Cycle is <b>Wednesday February 25th, 2026 at 11:59 PM</b>. 
                            If any part of your candidate packet is late, you can still initiate. However, there is <b>1 additional event point required</b> 
                            for every component of the candidate packet that is submitted late. The late submission deadline is <b>Wednesday March 4th, 2026 at 11:59 PM</b>. </p>
                        <div class="table-wrapper">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Personal Statement</td>
                                        <td><a href="/resource/packet/Sample_Statement.pdf" class="button scrolly" Download>Sample 1</a>
                                            <a href="/resource/packet/Sample_Statement2.pdf" class="button scrolly" Download>Sample 2</a></td>
                                    </tr>
                                    <tr>
                                        <td>Current Resumé</td>
                                        <td><a href="/resource/packet/Sample_Resume.pdf" class="button scrolly" Download>Sample Resume</a></td>
                                    </tr>
                                    <tr>
                                        <td>Two Faculty Ratings</td>
                                        {/* Updated for WI 26 */}
                                        <td><a href="https://forms.gle/ugSAwuSwadrjsQNf8" class="button scrolly">Form</a>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>Academic Honesty Statement</td>
                                        <td><a href="/resource/packet/Academic_Honesty_Statement.pdf" class="button scrolly" Download>Download Form</a></td>
                                    </tr>
                                    <tr>
                                        <td>Class Checklist</td>
                                        <td><a href="/resource/packet/Class_Checklist_Template.xlsx" class="button scrolly" Download>Download Template</a></td>
                                    </tr>
                                    <tr>
                                    </tr>
                                    <tr>
                                        <td>Candidate Packet Submission</td>
                                        {/* Updated for WI 26 */}
                                        <td><a href="https://forms.gle/K68F258gJw3dsVGq6" class="button scrolly" Download>Google Form</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="interview" class="wrapper style1">
                    <div class="inner">
                        <h2>Interviews</h2>
                        <p>{/* Updated for WI 26 */}
                            Interviews will be scheduled around <b> Week 1 or Week 2 of Spring Quarter</b>. These are primarily an opportunity for the Tau Beta Pi members to get to know you, but will also be used to assess your character and what you may bring to the organization. It is important that the information packet be turned in on time so that the members can learn about you before the interview. We will schedule interviews by e-mail during the weeks prior to the interviews. <b> Business attire is required. </b> Anyone who is not dressed properly will be asked to <b>leave and come back on a later date. </b>
                        </p>
                    </div>
                </section>
                <section id="ceremony" class="wrapper style2">

                    <div class="inner">
                        <h2>Initation ceremony</h2>
                        <p>
                            <b>Initiation is mandatory!</b> Any eligible initiate unable to make it to initiation will not be able to initiate this term! A one-time lifetime membership fee of <b>$125</b> (made payable to "UC San Diego Tau Beta Pi") is due on the night of initiation. The entire fee is waived for the <b>initiate with the most points</b> and <b>the winner of the T-Shirt design competition!</b> 
                        </p>    
                        <p>
                        Payments can be made through Venmo or cash/check. This fee covers chapter operating costs, dues to TBP national headquarters, cost of initiation materials, and the initiate banquet. <b> Business attire is required. </b> Anyone who is not dressed appropriately will not be able to take part in the ceremony.
						</p>
                            {/* Updated for WI 26 */}
                        <p>The date of the initiation ceremony for the Winter cycle is <b>Saturday April 25th, 5-9PM.</b></p>
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

export default Initiation
