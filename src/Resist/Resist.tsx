import { Link } from "react-router-dom";
import DEIScorecard from "./DEIScorecard";
import News from "./News";

const Resist = () => (
    <div>
        <h1>Don't let fear and overwhelm win</h1>

        <div>
            <ul className="toolbar">
                <li><a href="#resist">Resistance tools</a></li>
                <li><a href="#reminders">Reminders</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#dei">DEI Scorecard</a></li>
                <li><a href="#news">First few weeks</a></li>
            </ul>
        </div>

        <div className='card'>

            <h2 id="resist">Resistance tools</h2>
            <p>
                People are at a loss about what to do. It seems so bleak as we watch the Trump administration and their friends tearing democracy apart, people's health and safety in jeopardy, international relations being trampled, and a bunch of rich bros playing games with people's lives and livelihoods. It's nauseating.
            </p>
            <p>
                But: overwhelm and hopelessness is part of the plan. It's essential to the plan.
            </p>
            <p>
                When we believe that...
            </p>
            <ul>
                <li>there's nothing we can do,</li>
                <li>anything we try won't help, </li>
                <li>nobody else is doing anything,</li>
                <li>they are unstoppable,</li>
                <li>we don't know what to do,</li>
                <li>we don't have any energy to do anything...</li>
            </ul>
            <p>... all of these beliefs will keep us from acting. And the one thing they don't want us to do is act. People staying quiet and compliant is essential for making the democracy fall.
            </p>

            <h2 id="reminders">Reminders</h2>
            <p>Things I'm reminding myself, maybe they will help you too:</p>
            <ul>
                <li>
                    <strong>Choose your battles.</strong> Getting worked up about every new offense will wear you out fast. Ignore the noise, focus on what does real harm.
                </li>
                <li>
                    <strong>Limit news.</strong> Take in news only to the extent that it helps you. Doomscrolling can feel like "doing something." It isn't.
                </li>
                <li>
                    <strong>We aren't powerless.</strong> There ARE things people can do. There ARE people taking action.
                </li>
                <li>
                    <strong>Consider your strengths.</strong> How can you be most effective? What do you have access to, what skills do you have, what resources do you have? (Hint: One of my skills is publishing a website, another is assembling information from disparate sources...)
                </li>
                <li>
                    <strong>Share what's good.</strong> We need hope, joy, community, art, rest, nourishment, laughter, support... Let's take care of ourselves and each other.
                </li>
                <li>
                    <strong>Nobody elected Elon.</strong> Don't assume that everything he does is legitimate and must be obeyed. Actually that should apply even to the elected ones at this point. Social media posts are not law. Just because Trump said it, or one of his henchmen said it, doesn't make it real, legal, or binding.
                </li>
            </ul>
            <h2 id="resources">Resources</h2>
            <p>Sites and other resources that are giving me hope and ideas right now:</p>
            <ul>
                <li>
                    Choose Democracy's <Link to="https://choosedemocracy.us/what-can-i-do/">What Can I Do</Link> page is an excellent start.
                </li>
                <li>
                    Their <Link to="https://choosedemocracy.us/tracking-trackers/">Tracking Trackers</Link> page is also excellent. Data as resistance.
                </li>
                <li>
                    Call your representatives, sure, but -- about what exactly? <Link to="https://5calls.org/">5 Calls</Link> has got you covered, making the process easy.
                </li>
                <li>
                    A guidebook of <Link to="https://docs.google.com/document/d/1PnA86CvqKNo1le3TEczIBQftX6Pq1n7G5ROHxS_fj1E/edit?tab=t.0#heading=h.zbrky7na9owb">Some Actions to Stop Authoritarianism</Link>
                </li>
                <li>
                    Gene Sharp's book <Link to="https://upload.wikimedia.org/wikipedia/commons/e/e4/From_Dictatorship_to_Democracy_%282003%29.pdf">From Dictatorship To Democracy</Link> is excellent. Paper copies <Link to="https://bookshop.org/p/books/from-dictatorship-to-democracy-a-conceptual-framework-for-liberation-gene-sharp/450332?ean=9781595588500&next=t&next=t">here</Link> and other places.
                </li>
                <li>
                    Also fascinating reading: <Link to="https://www.cia.gov/static/5c875f3ec660e092cf893f60b4a288df/SimpleSabotage.pdf">The CIA Simple Sabotage Field Manual</Link> and the <Link to="https://www.cia.gov/stories/story/the-art-of-simple-sabotage/">story</Link> behind it.
                    The CIA's intention was that tactics like these could be used to gum up the works as an act of resistance. But you might recognize some of the practices in this document as commonplace in a typical American work environment.
                    Now imagine if you worked in an organization and you have been asked to do something harmful, unethical, immoral... maybe you're afraid of repercussions if you outright refuse. There might be other ways to resist.
                </li>
                <li>
                    Support organizations like the <Link to="https://www.aclu.org/">ACLU</Link> that are taking legal action.
                </li>
            </ul>
            <h2>Other ideas of what to do</h2>
            <p>Being in pain is not, by itself, helpful. Doing something is. Here are some ideas from others:</p>
            <ul>
                <li><Link to="https://www.huffpost.com/entry/fight-back-resist-united-states_n_6798d909e4b035ecd67cc987">109 Ways To Fight Back Against What's Happening In The U.S. Right Now</Link> (Huffington Post)</li>
                <li><Link to="https://www.thecampaignworkshop.com/blog/grassroots-advocacy-campaigns/grassroots-actions">Top 15 Grassroots Actions to resist in the coming months and years</Link> (The Campaign Workshop)</li>
            </ul>
            <h2>Be safe out there</h2>
            <p>Some strategies for safety and self-care in these times:</p>
            <ul>
                <li><Link to="https://www.hrc.org/resources/tips-for-preparedness-peaceful-protesting-and-safety">Tips for Preparedness, Peaceful Protesting, and Safety</Link> (Human Rights Campaign)</li>
                <li><Link to="https://www.law.nyu.edu/centers/race-inequality-law/protest-tips">Protest Tips and Resources</Link> (NYU School of Law)</li>
                <li><Link to="https://wagingnonviolence.org/2024/11/10-things-to-do-if-trump-wins/">10 ways to be prepared and grounded now that Trump has won</Link> (Waging Nonviolence)</li>
            </ul>

            <div id="dei">
                <hr />
                <DEIScorecard />
            </div>

            <div id="news">
                <hr />
                <p>Below, a list of news items just from the first few weeks.</p>

                <News />
            </div>
        </div>
    </div>
);

export default Resist
