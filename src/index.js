import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss'
// import './bootstrap/main.css'
// import '.node_modules/bootstrap/dist/css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='site-header'>
      <div className='container'>
        <div class="header-inner">
          <div className='site-logo__wrapper'>
            <img className='site-logo' src='./public/img/cootels.svg' alt='Site logo' width={150} height={35} />
          </div>
          <nav className='navbar'>
            <ul className='site-nav-list list'>
              <li className='nav-list_items'>
                <a className='navbar-items' href='#'>Rooms</a>
              </li>
              <li className='nav-list_items' >
                <a className='navbar-items' href='#'>Reservation</a>
              </li>
              <li className='nav-list_items'>
                <a className='navbar-items' href='#'>Contacts</a>
              </li>
            </ul>
          </nav>
          <button className='login-btn'>Get started</button>
        </div>
      </div>
    </header>

    <main className='site-main'>
      <div className='container'>

        <div className='site-hero'>
          <div className='hero-content-wrapper'>

            <h2 className='hero-wrapper__heading'>
              Nature, Warmth, and<br /> Beauty in One Space
            </h2>
            <p className='hero-wrapper__text'>
              One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.
            </p>
            <button className='login-btn'>Reservation</button>
          </div>
          <img className='hero-img' src='./public/img/hero-img.png' width={500} height={800} />
        </div>
{/* ========================== ===================================================== */}
        <div className='norway-hotel site-hero'>
          <img className='hero-img' src='./public/img/norwayHotel.png' width={500} height={800} />
          <div className='hero-content-wrapper'>

            <h2 className='hero-wrapper__heading'>
            Cozy and Down to Earth <br/> Cootage Hotel in Norway.
            </h2>
            <p className='hero-wrapper__text'>
            Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.
            <br/>
            <br/>
            Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.
            </p>
            <button className='norway-hetel-img login-btn'>Learn more</button>
          </div>
      </div>

    </div>

  </main>
  </React.StrictMode >
);

