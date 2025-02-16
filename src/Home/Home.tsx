import '../App.css'
import picOfLeaf from "../assets/jmrGlasses.jpeg"
import { Link } from "react-router-dom";
import { Gallery, Emblems } from '../Gallery/Gallery';
import { useState } from 'react';

function Home() {
  const [showGallery, setShowGallery] = useState(0)

  return (
    <>
      <h1>Leaf's art</h1>

      <div>
        <ul>
          <li><a href="#artomat">Artomat</a></li>
          <li><a href="#sketchbook">Brooklyn Art Library Sketchbook Project</a></li>
          <li><a href="#leaf">About me</a></li>
          <li><a href="#other">Other people's art</a></li>
        </ul>
      </div>

      <div className='card'>

        <h2 id="artomat">Artomat</h2>
        <p>
          In late 2023, I started making art for <Link to="https://www.artomat.org/">Artomat</Link>, which sells art from former cigarette vending machines that have been converted into art vending machines. How cool is that?! You can find more cool Artomat stuff on <Link to="https://www.instagram.com/artomat/">the Artomat Instagram</Link>.
        </p>

        <p>You can click on each of the pictures below to see more.</p>

        <h3>Mysterious Creatures</h3>

        <p>Series six of Mysterious Creatures:</p>
        <img src={Emblems.emblem6}
          width={100}
          onClick={() => setShowGallery(showGallery == 6 ? 0 : 6)} />
        {showGallery == 6 ? <Gallery.Creatures06 /> : null}

        <p>Series five of Mysterious Creatures:</p>
        <img src={Emblems.emblem5}
          width={100}
          onClick={() => setShowGallery(showGallery == 5 ? 0 : 5)} />
        {showGallery == 5 ? <Gallery.Creatures05 /> : null}

        <p>Series four of Mysterious Creatures:</p>
        <img src={Emblems.emblem4}
          width={100}
          onClick={() => setShowGallery(showGallery == 4 ? 0 : 4)} />
        {showGallery == 4 ? <Gallery.Creatures04 /> : null}

        <p>Series three of Mysterious Creatures:</p>
        <img src={Emblems.emblem3}
          width={100}
          onClick={() => setShowGallery(showGallery == 3 ? 0 : 3)} />
        {showGallery == 3 ? <Gallery.Creatures03 /> : null}

        <p>Series two of Mysterious Creatures:</p>
        <img src={Emblems.emblem2}
          width={100}
          onClick={() => setShowGallery(showGallery == 2 ? 0 : 2)} />
        {showGallery == 2 ? <Gallery.Creatures02 /> : null}

        <p>Series one of Mysterious Creatures:</p>
        <img src={Emblems.emblem1}
          width={100}
          onClick={() => setShowGallery(showGallery == 1 ? 0 : 1)} />
        {showGallery == 1 ? <Gallery.Creatures01 /> : null}

        <p>Here are my Artomat prototypes. These are watercolor and ink on 2"x3" watercolor paper (specifically <Link to="https://www.dickblick.com/products/strathmore-500-series-heavyweight-mixed-media-pads/">Strathmore 500 Heavyweight Mixed Media paper</Link>, which is pretty glorious). The final product has the art mounted on a block to make it the appropriate size for the vending machine. The fourth creature is on a 2"x2" card, it's an example of the ID for my slot in the machine. </p>
        <img src={Emblems.emblemArtomat}
          width={100}
          onClick={() => setShowGallery(showGallery == 1001 ? 0 : 1001)} />
        {showGallery == 1001 ? <Gallery.Artomat /> : null}

        <p>Here are some other creatures. They might not become part of the Artomat project, but they're friendly just the same.</p>
        <img src={Emblems.emblemDemo}
          width={100}
          onClick={() => setShowGallery(showGallery == 1002 ? 0 : 1002)} />
        {showGallery == 1002 ? <Gallery.CreaturesDemo /> : null}

      </div>

      <h2 id="sketchbook">Brooklyn Art Library Sketchbook Project</h2>
      <p>
        I've published two sketchbooks through the <Link to="https://brooklynartlibrary.org/">Brooklyn Art Library Sketchbook Project,</Link> which is closed, sadly. Fortunately, I grabbed digital copies of my books.
      </p>

      <h3>"Casual References to Other Dimensions" (2020-2021)</h3>
      <p>I'm especially proud of "Sing" (the one about the triangles), the empty speech balloon bird comic, the title of the book, the phrases "a little old for owl's sea ellicon" and "too heavy to fly / defiant, flies anyway," and the collage at the back. May you walk free of interference.</p>
      <img src={Emblems.emblemSketch1}
        width={100}
        onClick={() => setShowGallery(showGallery == 1003 ? 0 : 1003)} />
      {showGallery == 1003 ? <Gallery.Sketch1 /> : null}

      <h3>"Your Guide to Drawing the Line" (2021)</h3>
      <p>100% of adults are into lines.</p>
      <p>I think of "banan" often. "Wary, Ready" is like this book's mascot. The notes about NodeJS were really fun (and Stephen Grider's "NodeJS: Advanced Concepts" class on Udemy is great). "Now" was assembled from a surprisingly small amount of source material. I didn't realize "is that so?" (one of my dad's favorite things to say) was upside down until I'd drawn half of it, haha. </p>

      <img src={Emblems.emblemSketch2}
        width={100}
        onClick={() => setShowGallery(showGallery == 1004 ? 0 : 1004)} />
      {showGallery == 1004 ? <Gallery.Sketch2 /> : null}


      <h1 id="leaf">About me</h1>
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

      <h1 id="other">Other people's art</h1>
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
