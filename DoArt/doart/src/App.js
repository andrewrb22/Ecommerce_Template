
import './App.css';

function App() {

  const openMenu = ()=>{
    document.querySelector(".sidebar").ClassNameList.add("open")
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").ClassNameList.remove("open")
  }

  return (
    <div ClassName="grid-container">
      <header ClassName="header">
        <div ClassName="brand">
          <button onClick={openMenu}>
            &#9776;
            </button>
          <a href="index.html">Carolina DoArt</a></div>
        <div ClassName="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside ClassName="sidebar">
        <h1>Painting Categories</h1>
        <button ClassName="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li><h3>Portraits</h3></li>
          <li><h3>Pets</h3></li>
          <li><h3>Nature</h3></li>
        </ul>
      </aside>
    <main ClassName="main">
        <div ClassName="content">
          <ul ClassName="paintings">
              <li>
                <div ClassName="paint">
                <img ClassName="paint-image" src="./images/eyes.jpg" alt="paint1"/>
                  <div ClassName="paint-name">
                    <a href="paint.html">Eyes</a> </div>
                  <div ClassName="paint-brand">Portrait</div>
                  <div ClassName="paint-price">$45</div>
                  <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>
              <li>
                <div ClassName="paint">
                  <img ClassName="paint-image" src="./images/dogo1.jpg" alt="paint1"/>
                    <div ClassName="paint-name">
                      <a href="paint.html">Dog</a> </div>
                    <div ClassName="paint-brand">Pets</div>
                    <div ClassName="paint-price">$55</div>
                    <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>
                <li>
                  <div ClassName="paint">
                    <img ClassName="paint-image" src="./images/dogo2.jpg" alt="paint1"/>
                      <div ClassName="paint-name">
                        <a href="paint.html">Dog</a> </div>
                      <div ClassName="paint-brand">Pets</div>
                      <div ClassName="paint-price">$55</div>
                      <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>
                  <li>
                    <div ClassName="paint">
                      <img ClassName="paint-image" src="./images/gatos.jpg" alt="paint1"/>
                        <div ClassName="paint-name">
                          <a href="paint.html">Cats</a> </div>
                        <div ClassName="paint-brand">Pets</div>
                        <div ClassName="paint-price">$55</div>
                        <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>
                    <li>
                      <div ClassName="paint">
                        <img ClassName="paint-image" src="./images/playa (1).jpg" alt="paint1"/>
                          <div ClassName="paint-name">
                            <a href="paint.html">Beach</a> </div>
                          <div ClassName="paint-brand">Nature</div>
                          <div ClassName="paint-price">$55</div>
                          <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>
                      <li>
                        <div ClassName="paint">
                          <img ClassName="paint-image" src="./images/dogo3.jpg" alt="paint1"/>
                            <div ClassName="paint-name">
                              <a href="paint.html">Dog</a> </div>
                            <div ClassName="paint-brand">Pets</div>
                            <div ClassName="paint-price">$55</div>
                            <div ClassName="paint-rating">4.5 starts (10 reviews)</div>
                    </div>
                </li>

            </ul>
        </div>

        </main>
                  <footer ClassName="footer">
                    Copy Rights C.DuArt
       </footer>
   </div>
  );
}

export default App;
