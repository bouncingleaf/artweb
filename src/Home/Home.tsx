import '../App.css'
import picOfLeaf from "../assets/jmrGlasses.jpeg"
import { Link } from "react-router-dom";
import Gallery from '../Gallery/Gallery';

function Home() {

  return (
    <>
      <h1>Leaf's art</h1>
      <div className='card'>

        <h2>Brooklyn Art Library Sketchbook Project</h2>
        <p>
          I've published two sketchbooks through the <Link to="https://brooklynartlibrary.org/">Brooklyn Art Library Sketchbook Project,</Link> which is closed, sadly. Fortunately, I grabbed digital copies of my books.
        </p>

        <h3>"Casual References to Other Dimensions" (2020-2021)</h3>
        <p>I'm especially proud of "Sing" (the one about the triangles), the empty speech balloon bird comic, the title of the book, the phrases "a little old for owl's sea ellicon" and "too heavy to fly / defiant, flies anyway," and the collage at the back. May you walk free of interference.</p>

        <Gallery.Sketch1 />

        <h3>"Your Guide to Drawing the Line" (2021)</h3>
        <p>100% of adults are into lines.</p>
        <p>I think of "banan" often. "Wary, Ready" is like this book's mascot. The notes about NodeJS were really fun (and Stephen Grider's "NodeJS: Advanced Concepts" class on Udemy is great). "Now" was assembled from a surprisingly small amount of source material. I didn't realize "is that so?" (one of my dad's favorite things to say) was upside down until I'd drawn half of it, haha. </p>

        <Gallery.Sketch2 />

        <h2>Artomat</h2>
        <p>
          I just submitted art to <Link to="https://www.artomat.org/">Artomat</Link>, which sells art from former cigarette vending machines that have been converted into art vending machines. How cool is that?!
        </p>

        <h3>Mysterious Creatures series</h3>

        <p>Here's my Artomat submission. These are watercolor and ink on 2"x3" watercolor paper (specifically <Link to="https://www.dickblick.com/products/strathmore-500-series-heavyweight-mixed-media-pads/">Strathmore 500 Heavyweight Mixed Media paper</Link>, which is pretty glorious). I'd like to include three in a box, so that the creatures travel together. The fourth creature is on a 2"x2" card that would be the ID for my slot in the machine.</p>
        <Gallery.Artomat />

        <p>Here are some other creatures. These aren't on as thick a paper, so they probably won't become part of the Artomat boxes, but they're friendly just the same.</p>
        <Gallery.Creatures />

      </div>


      <h1>about me</h1>
      <div className='card'>
        <img
          src={picOfLeaf}
          width="250px"
          alt="Slightly blurry picture of smiling leaf with glasses and a plaid shirt."
        />
        <p>
          Hi! I'm Leaf. I like to mess around with acrylic and watercolor paints, Pigma Micron pens of various sizes, and Uni Posca paint pens.
        </p>
        <p>
          I also like paper. My go-to is 12x12" 110 lb cardstock that is smooth on one side and linen on the other, but my favorite is a good Bristol smooth. I've tried digital art, but it's just not the same. Something about applying ink to paper is so satisfying.
        </p>
        <p>When I'm not making a mess with the aforementioned, I like to look at birds, walk outside, and listen to audio books or music, sometimes all at once.</p>
      </div>

      <h1>other people's art</h1>
      <div className='card'>
        <ul>
          <li><Link to="https://wardfdn.org/artists/larry-barth/">Larry Barth</Link></li>
          <li><Link to="https://rosemarymosco.com/comics/bird-and-moon">Bird and Moon by Rosemary Mosco</Link></li>
          <li><Link to="https://www.instagram.com/birdstrips/">Birdstrips</Link></li>
          <li><Link to="https://www.instagram.com/chuckdrawsthings/">Chuck Draws Things</Link></li>
          <li><Link to="https://www.falseknees.com/">False Knees by Joshua Barkman</Link></li>
          <li><Link to="https://www.milkywayopera.com/">Milky Way Opera by Jenny Johannesson</Link></li>
        </ul>
      </div >



    </>
  )
}

export default Home
