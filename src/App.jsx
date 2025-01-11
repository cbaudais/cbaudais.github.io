import './App.css'

function App() {
  return (
    <>
      <main className='app'>
        <div id='head'>
          <img src='/favicon.ico' className='logo' />
          <h1>cbaudais.github.io</h1>
        </div>
        <p>Host for all websites I've coded or created. Images may be copyrighted.</p>
        <p><a href='https://cbaudais.github.io/'>cbaudais.github.io</a></p>
        <ul>
          <li>
            <b>Portfolio: </b><a href='https://christinabaudais.com/' target='_blank'>christinabaudais.com</a>
            <ul>
              <li>Personal portfolio website, made using static site generator (SSG) Eleventy (11ty); coded in Nunjucks, Javascript, Node.js, HTML and CSS.</li>
            </ul>
          </li>
          <li>
            <b>Sciences Mag Junior <i>(professional work)</i>: </b><a href='https://lalibertesciencesmagjunior.ca/' target='_blank'>lalibertesciencesmagjunior.ca</a>
            <ul>
              <li>Made in WordPress. Done as summer job at <i>Pop Communications</i> in 2021.</li>
            </ul>
          </li>
          <li>
            <b>Webstore. <i>(IMD1005_Web_Dev) Assignment 2</i>: </b><a href='/webstore/index.html' target='_blank'>cbaudais/github.io/webstore</a>
            <ul>
              <li>Replica of a website coded from scratch, based on a given image for Web Development Course.</li>
            </ul>
          </li>
          <li>
            <b>FineLineStudio: 5 Bay Learning <i>(IMD1004_Design_Processes) Adobe XD Prototype for client</i>: </b><a href='https://xd.adobe.com/view/fc186b27-5ac8-41db-928f-51f2370d170f-a94b/?fullscreen' target='_blank'>FineLineStudio: 5 Bay Learning Mockup</a> <i>(Group Project)</i>
            <ul>
              <li>Created prototype functionalities, and layouts of most pages <sub><i>(except Community and Store pages)</i></sub>.</li>
            </ul>
          </li>
          <li>
            <b>Math tutorial website <i>(IMD1005_Web_dev)</i>:</b> <a href='/freemath/Home.html' target='_blank'>cbaudais.github.io/freemath</a> <i>(Group Project)</i>
            <ul>
              <li><i>Group project, but have since tweaked some of the code styling myself.</i></li>
              <li>Initially created subject content pages, contributed on general base design/layout.</li>
              <li>Currently still no mobile support.</li>
              <li>Home page parallax no longer supported. Pages may or may not display properly.</li>
            </ul>
          </li >
          {/* <li>
            <a href='https://warriorwildpaw.wixsite.com/wildyartsy' target='_blank'>Wix Portfolio</a> <i>(for Algonquin College courses)</i>
          </li> */}
          {/* <li>
            <a href='http://wildyartsy.myartsonline.com/website/home.html' target='_blank'>Mini portfolio project</a>
          </li> */}
        </ul >
      </main>
    </>
  )
}

export default App
