import { Link } from "react-router-dom";

const Occupant = () => (
    <div>
        <h1>This happened</h1>
        <div>
            <h2>Term 2</h2>
            <h3>Wow, I can't keep up</h3>
            Gotta admit the guy's getting a lot done. Mostly damage.

            Here are some news sources keeping a feed of his damage:
            <ul>
                <li>
                    <Link to="https://abcnews.go.com/Politics/live-updates/trump-2nd-term-live-updates-executive-action-plans/?id=117934786">ABC News Trump 2nd Term Live Updates</Link>
                </li>
                <li>
                    <Link to="https://apnews.com/hub/donald-trump">AP's Donald Trump page</Link>
                </li>
                <li>
                    <Link to="https://www.nytimes.com/section/politics">NY Times Politics section</Link>
                </li>
            </ul>

            <h3>News from January 23, 2025</h3>
            <ul>
                <li>
                    The Trump administration, as part of a purge of diversity programs, asked federal workers to report colleagues who keep such programs alive and threatened those who did not comply. <Link to="https://www.nytimes.com/2025/01/22/us/politics/trump-order-discrimination-federal-hiring.html">Federal Workers Ordered to Report on Colleagues Over D.E.I. Crackdown</Link> (NY Times)
                </li>
                <li>
                    The Trump administration told federal health officials to pause public communications, including bird flu updates. <Link to="https://www.nytimes.com/2025/01/22/health/trump-health-communications.html">Trump Administration Temporarily Mutes Federal Health Officials</Link> (NY Times)
                </li>
                <li>
                    Enrique Tarrio and Stewart Rhodes, the right-wing militia leaders Trump pardoned, called for retribution against those who investigated the Jan. 6 attacks. <Link to="https://www.nytimes.com/2025/01/22/us/politics/enrique-tarrio-stewart-rhodes.html">Far-Right Leaders Granted Clemency by Trump Express Desire for Retribution</Link> (NY Times)
                </li>
                <li>
                    <Link to="https://apnews.com/live/trump-presidency-day-4-updates#00000194-948f-dee5-afff-b4ef38150000">Trump’s freeze on health agency communications has also led to the cancellation of scientific meetings</Link> (AP)
                </li>
                <li>
                    He apparently put on quite a show here: <Link to="https://www.nytimes.com/2025/01/23/us/politics/trump-davos-europe-tariffs.html">Trump Criticizes Europe and Threatens Tariffs in Davos Speech</Link> (NY Times) and <Link to="https://www.reuters.com/world/trump-remotely-address-business-political-leaders-davos-forum-topics-unclear-2025-01-23/">Trump tells Davos he will demand lower interest rates, oil prices</Link> (Reuters)
                </li>
                <li>
                    <Link to="https://abcnews.go.com/Politics/live-updates/trump-2nd-term-live-updates-executive-action-plans/?id=117934786&entryId=118045896">State Department starts suspending passport applications with 'X' gender marker</Link> (ABC News)
                </li>
            </ul>

            <h3>Pardoning January 6 rioters</h3>
            <ul>
                <li><Link to="https://www.nytimes.com/2025/01/20/us/politics/trump-pardons-jan-6.html">Trump Grants Sweeping Clemency to All Jan. 6 Rioters</Link> (NY Times) "The extraordinary pardons and commutations extended to those who committed both violent and nonviolent crimes on Jan. 6, including assaulting police officers and seditious conspiracy."</li>
            </ul>
            <h3>Executive Orders from first days</h3>
            Welcome to term 2. You Know Who issued a bunch of executive orders - <Link to="https://www.nytimes.com/2025/01/20/us/politics/trump-executive-orders-list.html">Trump’s Executive Orders: Reversing Biden’s Policies and Attacking the ‘Deep State’</Link> (NY Times). Here are some of the orders he signed on his first day in office:

            <h4>Federal Work Force</h4>
            <ul>
                <li>Freeze federal hiring, except for members of the military or “positions related to immigration enforcement, national security, or public safety.”</li>
                <li>Restore a category of federal workers known as Schedule F, which would lack the same job protections enjoyed by career civil servants.</li>
                <li>Halt new federal rules from going into effect before Trump administration appointees can review them.</li>
                <li>Review the investigative actions of the Biden administration, “to correct past misconduct by the federal government related to the weaponization of law enforcement and the weaponization of the intelligence community.”</li>
                <li>Grant top secret security clearances to White House staff without going through traditional vetting procedures.</li>
                <li>End remote work policies and order federal workers back to the office full time.</li>
            </ul>
            <h4>
                Immigration and the Border
            </h4>
            <ul>
                <li>Bar asylum for people newly arriving at the southern border.</li>
                <li>Move to end birthright citizenship, which is guaranteed by the 14th Amendment, for the children of undocumented immigrants. The president cannot change the Constitution on his own, so it is not yet clear how Mr. Trump plans to withhold the benefits of citizenship to a group of people born in the United States. Any move is all but certain to be challenged in court.</li>
                <li>Suspend the Refugee Admissions Program “until such time as the further entry into the United States of refugees aligns with the interests of the United States.”</li>
                <li>Declare migrant crossings along the U.S.-Mexico border to be a national emergency, allowing Mr. Trump to unilaterally unlock federal funding for border wall construction, without approval from Congress, for stricter enforcement efforts.</li>
                <li>Resume a policy requiring people seeking asylum to wait in Mexico while an immigration judge considers their cases.</li>
                <li>Consider designating cartels as “foreign terrorist organizations.” </li>
            </ul>
            <h4>
                Gender and Diversity, Equity and Inclusion Initiatives
            </h4>
            <ul>
                <li>Terminate D.E.I. programs across the federal government.</li>
                <li>Recognize two sexes: male and female.</li>
                <li>Remove protections for transgender people in federal prisons.</li>
            </ul>
            <h4>
                Tariffs and Trade
            </h4>
            <ul>

                <li>Direct federal agencies to begin an investigation into trade practices, including persistent trade deficits and unfair currency practices, as well as examine flows of migrants and drugs from Canada, China and Mexico to the United States.</li>
                <li>Assess China’s compliance with a trade deal Mr. Trump signed in 2020, as well as the United States-Mexico-Canada Agreement, which Trump signed in 2020 to replace the North American Free Trade Agreement.</li>
                <li>Order the government to assess the feasibility of creating an “External Revenue Service” to collect tariffs and duties.</li>
                <li>Carry out a full review of the U.S. industrial and manufacturing base to assess whether further national security-related tariffs are warranted.</li>
            </ul>
            <h4>
                Energy and the Environment
            </h4>
            <ul>

                <li>Withdraw the United States from the Paris Agreement, the pact among almost all nations to fight climate change.</li>
                <li>Declare a national energy emergency, a first in U.S. history, which could unlock new powers to suspend certain environmental rules or expedite permitting of certain mining projects.</li>
                <li>Attempt to reverse Mr. Biden’s ban on offshore drilling for 625 million acres of federal waters.</li>
                <li>Begin the repeal of Biden-era regulations on tailpipe pollution from cars and light trucks, which have encouraged automakers to manufacture more electric vehicles.</li>
                <li>Roll back energy-efficiency regulations for dishwashers, shower heads and gas stoves.</li>
                <li>Open the Alaska wilderness to more oil and gas drilling.</li>
                <li>Restart reviews of new export terminals for liquefied natural gas, something the Biden administration had paused.</li>
                <li>Halt the leasing of federal waters for offshore wind farms.</li>
                <li>Eliminate environmental justice programs across the government, which are aimed at protecting poor communities from excess pollution.</li>
                <li>Review all federal regulations that impose an “undue burden” on the development or use of a variety of energy sources, particularly coal, oil, natural gas, nuclear power, hydropower and biofuels.</li>
            </ul>
            <h4>
                TikTok ban
            </h4>
            <ul>
                <li>Consult federal agencies on any national security risks posed by the social media platform, then “pursue a resolution that protects national security while saving a platform used by 170 million Americans.” Mr. Trump ordered his attorney general not to enforce a law that banned the site for 75 days to give the Trump administration “an opportunity to determine the appropriate course forward.”</li>
            </ul>
            <h4>
                Other
            </h4>
            <ul>
                <li>Withdraw from the World Health Organization.</li>
                <li>Rename Mount Denali and the Gulf of Mexico.</li>
                <li>Ensure that states carrying out the death penalty have a “sufficient supply” of lethal injection drugs.</li>
                <li>Fly the American flag at full-staff on Monday and on future Inauguration Days.</li>
                <li>Implement the Department of Government Efficiency, the Elon Musk-led cost-cutting initiative.</li>
                <li>Revoke security clearances for 51 signers of a letter suggesting that the contents of Hunter Biden’s laptop could be Russian disinformation.</li>
            </ul>
        </div>
    </div>
);

export default Occupant
