import '../App.css'
import picOfLeaf from "../assets/jmrGlasses.jpeg"
import { Link } from "react-router-dom";
import { Gallery, Emblems } from '../Gallery/Gallery';
import { useState } from 'react';

function Home() {
  const [showGallery, setShowGallery] = useState(0);
  const thumbWidth = 200;
  const click = (series: number) => setShowGallery(showGallery == series ? 0 : series);
  const artomat = 1001;
  const demo = 1002;
  const sketch1 = 1003;
  const sketch2 = 1004;
  const circles = 1005;

  return (
    <>
      <h1>Leaf's art</h1>

      <div>
        <ul className="toolbar">
          <li><a href="#book">Book</a></li>
          <li><a href="#circles">Thousands of Circles</a></li>
          <li><a href="#artomat">Artomat</a></li>
          <li><a href="#sketchbook">Brooklyn Art Library Sketchbook Project</a></li>
          <li><a href="#leaf">About me</a></li>
          <li><a href="#other">Other people's art</a></li>
        </ul>
      </div>

      <div className='card'>

        <h2 id="book">New: I'm writing a book.</h2>
        <p>
          That's right: a book. Those of you who know me as an artist or a software developer (25+ years in tech) may not know that I was a writer first. Writing feels like coming home.
        </p>
        <p>
          I am in Cohort 3 of <Link to="https://thebookacademy.org/">The Book Academy</Link>, run and taught by four-time New York Times bestselling author, speaker, 20-year marketing veteran, and Professional Troublemaker <Link to="https://luvvie.org/">Luvvie Ajayi Jones</Link>.
        </p>
        <p>
          I don't know about you, but I love getting a peek into the creative process and thought process of other artists. So I'll be posting about my writing journey online as I go.
        </p>
        <p>
          Follow me on <Link to="https://www.instagram.com/leafjessicaroy/">Instagram</Link> to get a peek into the book writing process as it unfolds...
        </p>
        <h2 id="circles">Thousands of Circles</h2>
        <p>
          One of the things I like best about drawing is just the act of putting ink on paper. In 2025, I started drawing circles on blank postcards.
        </p>
        <p>
          Each card has at least 100 circles on it, some of them have 200 or more. Sometimes they overlap, sometimes they have connections, sometimes there are other things going on.
        </p>
        <p>
          As of this writing (March 2025), I have made more than 40 of these cards, so if you are holding one, you're holding at least 100 of a set of over 4000 circles. Not impressive yet, perhaps, but I'm not done.
        </p>
        <p>
          What does it all mean? I don't know. Maybe I seek roundness and connection in a sharp-edged and disconnected world. Maybe they will eventually add up to some significant number, representing the number of people who... or the number of times that... I don't know. Maybe I just like circles.
        </p>
        <p>
          If you've received one of these postcards from me, you're welcome and encouraged to use circles in your art, your writing (ooo!), or as you go about your day-to-day life. Enjoy.
        </p>
        <p onClick={() => click(circles)}>Thousands of circles (click to see more)</p>
        <img src={Emblems.emblemCircles}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series eight"
          onClick={() => click(circles)} />
        {showGallery == circles ? Gallery.Circles : null}


        <h2 id="artomat">Artomat</h2>
        <p>
          In late 2023, I started making art for <Link to="https://www.artomat.org/">Artomat</Link>, which sells art from former cigarette vending machines that have been converted into art vending machines. How cool is that?! You can find more cool Artomat stuff on <Link to="https://www.instagram.com/artomat/">the Artomat Instagram</Link>.
        </p>

        <p>You can click on each of the pictures below to see more.</p>

        <h3>Mysterious Creatures</h3>

        <p onClick={() => click(8)}>Series eight of Mysterious Creatures:</p>
        <img src={Emblems.emblem08}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series eight"
          onClick={() => click(8)} />
        {showGallery == 8 ? Gallery.Creatures08 : null}

        <p onClick={() => click(7)}>Series seven of Mysterious Creatures:</p>
        <img src={Emblems.emblem07}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series seven"
          onClick={() => click(7)} />
        {showGallery == 7 ? Gallery.Creatures07 : null}

        <p onClick={() => click(6)}>Series six of Mysterious Creatures:</p>
        <img src={Emblems.emblem06}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series six"
          onClick={() => click(6)} />
        {showGallery == 6 ? Gallery.Creatures06 : null}

        <p onClick={() => click(5)}>Series five of Mysterious Creatures:</p>
        <img src={Emblems.emblem05}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series five"
          onClick={() => click(5)} />
        {showGallery == 5 ? Gallery.Creatures05 : null}

        <p onClick={() => click(4)}>Series four of Mysterious Creatures:</p>
        <img src={Emblems.emblem04}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series four"
          onClick={() => click(4)} />
        {showGallery == 4 ? Gallery.Creatures04 : null}

        <p onClick={() => click(3)}>Series three of Mysterious Creatures:</p>
        <img src={Emblems.emblem03}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series three"
          onClick={() => click(3)} />
        {showGallery == 3 ? Gallery.Creatures03 : null}

        <p onClick={() => click(2)}>Series two of Mysterious Creatures:</p>
        <img src={Emblems.emblem02}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series two"
          onClick={() => click(2)} />
        {showGallery == 2 ? Gallery.Creatures02 : null}

        <p onClick={() => click(1)}>Series one of Mysterious Creatures:</p>
        <img src={Emblems.emblem01}
          width={thumbWidth}
          alt="Thumbnail for Mysterious Creatures series one"
          onClick={() => click(1)} />
        {showGallery == 1 ? Gallery.Creatures01 : null}

        <p onClick={() => click(artomat)}>Here are my Artomat prototypes. These are watercolor and ink on 2"x3" watercolor paper (specifically <Link to="https://www.dickblick.com/products/strathmore-500-series-heavyweight-mixed-media-pads/">Strathmore 500 Heavyweight Mixed Media paper</Link>, which is pretty glorious). The final product has the art mounted on a block to make it the appropriate size for the vending machine. The fourth creature is on a 2"x2" card, it's an example of the ID for my slot in the machine. </p>
        <img src={Emblems.emblemArtomat}
          width={thumbWidth}
          alt="Thumbnail for Artomat series"
          onClick={() => click(artomat)} />
        {showGallery == artomat ? Gallery.Artomat : null}

        <p onClick={() => click(demo)}>Here are some other creatures. They might not become part of the Artomat project, but they're friendly just the same.</p>
        <img src={Emblems.emblemDemo}
          width={thumbWidth}
          alt="Thumbnail for demo series"
          onClick={() => click(demo)} />
        {showGallery == demo ? Gallery.CreaturesDemo : null}

      </div>

      <h2 id="sketchbook">Brooklyn Art Library Sketchbook Project</h2>
      <div className='card'>
        <p>
          I've published two sketchbooks through the <Link to="https://brooklynartlibrary.org/">Brooklyn Art Library Sketchbook Project,</Link> which is closed, sadly. Fortunately, I grabbed digital copies of my books.
        </p>

        <h3 onClick={() => click(sketch1)}>"Casual References to Other Dimensions" (2020-2021)</h3>
        <p>I'm especially proud of "Sing" (the one about the triangles), the empty speech balloon bird comic, the title of the book, the phrases "a little old for owl's sea ellicon" and "too heavy to fly / defiant, flies anyway," and the collage at the back. May you walk free of interference.</p>
        <img src={Emblems.emblemSketch1}
          width={thumbWidth}
          alt="Thumbnail for sketchbook series 1"
          onClick={() => click(sketch1)} />
        {showGallery == sketch1 ? Gallery.Sketch1 : null}

        <h3 onClick={() => click(sketch2)}>"Your Guide to Drawing the Line" (2021)</h3>
        <p>100% of adults are into lines.</p>
        <p>I think of "banan" often. "Wary, Ready" is like this book's mascot. The notes about NodeJS were really fun (and Stephen Grider's "NodeJS: Advanced Concepts" class on Udemy is great). "Now" was assembled from a surprisingly small amount of source material. I didn't realize "is that so?" (one of my dad's favorite things to say) was upside down until I'd drawn half of it, haha. </p>

        <img src={Emblems.emblemSketch2}
          width={thumbWidth}
          alt="Thumbnail for sketchbook series 2"
          onClick={() => click(sketch2)} />
        {showGallery == sketch2 ? Gallery.Sketch2 : null}
      </div>


      <h1 id="leaf">About Leaf</h1>
      <div className='card'>
        <img
          src={picOfLeaf}
          width={thumbWidth}
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
        <p>Here are some artists whose work I enjoy:</p>
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
