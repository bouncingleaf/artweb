import '../App.css'
import hat from "../assets/jmrGlassesHat-sm.jpg"
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <h1>Hi! I'm Leaf.</h1>
      <div className='card'>
        <img
          src={hat}
          width="250px"
          alt="Picture of leaf with a white hat, glasses, and an npm pride shirt."
        />
        <p>
          I like to mess around with acrylic and watercolor paints, Pigma Micron pens of various sizes, and Uni Posca paint pens.
        </p>
        <p>
          I also like paper. My go-to is 12x12" 110 lb cardstock that is smooth on one side and linen on the other, but my favorite is a good Bristol smooth. I've tried digital art, but it's just not the same. Something about applying ink to paper is so satisfying.
        </p>
        <p>When I'm not making a mess with the aforementioned, I like to look at birds, walk outside, and listen to audio books or music, sometimes all at once.</p>
      </div>

      <h1>Art stuff</h1>
      <div className='card'>
        <p>
          I've published two sketchbooks through the <Link to="https://brooklynartlibrary.org/">Brooklyn Art Library Sketchbook Project,</Link> which is closed, sadly. Fortunately, I grabbed digital copies of my books. I'll publish those here eventually.
        </p>
        <p>
          I'm in the process of submitting art to <Link to="https://www.artomat.org/">Artomat</Link>.
        </p>
        <p>Other people's art I appreciate:
          <ul>
            <li><Link to="https://wardfdn.org/artists/larry-barth/">Larry Barth</Link></li>
            <li><Link to="https://rosemarymosco.com/comics/bird-and-moon">Bird and Moon by Rosemary Mosco</Link></li>
            <li><Link to="https://www.instagram.com/birdstrips/">Birdstrips</Link></li>
            <li><Link to="https://www.instagram.com/chuckdrawsthings/">Chuck Draws Things</Link></li>
            <li><Link to="https://www.falseknees.com/">False Knees by Joshua Barkman</Link></li>
            <li><Link to="https://www.milkywayopera.com/">Milky Way Opera by Jenny Johannesson</Link></li>
          </ul>
        </p>
      </div>

    </>
  )
}

export default Home
