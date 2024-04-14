import './index.css'

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-main">
      <div className="site-name">TANN TRIM</div>

      <div className="nav-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <img
              src="https://media.istockphoto.com/id/1044689226/photo/magnifying-glass-isolated-on-white-background-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=y164H2Ldt2ccaw6lV5Ju3iS_jR6_PdtVaGo3L1eSlHM="
              alt="Search"
            />
          </button>
        </div>
        <div className="icon">
          <img
            src="https://media.istockphoto.com/id/1353567508/photo/shopping-cart-icon-message-bubble-or-e-commerce-buy-symbol-illustration-flat-design-and-shop.webp?b=1&s=170667a&w=0&k=20&c=AXPk_gvpb9HIIYl61yrXuwRqQPpFerhuSQxAl8nkvtI="
            alt="Bag"
          />
        </div>
        <div className="icon">
          <img
            src="https://media.istockphoto.com/id/1251362621/photo/shopping-cart-vector-art-closeup-view.webp?b=1&s=170667a&w=0&k=20&c=wfBm1hd9T_CW9oxVec3SM3eDxYRRjkB0zHvzVR3WMm0="
            alt="Cart"
          />
        </div>
        <div className="icon">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
            alt="Profile"
          />
        </div>
      </div>
    </div>
    <div className="navbar-secondary">
      <div className="secondary-option">Bag</div>
      <div className="secondary-option">Accessories</div>
      <div className="secondary-option">Travel</div>
      <div className="secondary-option">Gifting</div>
      <div className="secondary-option">Jewelry</div>
    </div>
    <div className="bag-row">
      {' '}
      {/* Use bag-row class here */}
      <div className="bag-type">
        <img
          src="https://media.istockphoto.com/id/1065295886/photo/blank-drawstring-polyester-tote-bag-for-branding-3d-render-illustration.webp?b=1&s=170667a&w=0&k=20&c=Hpt4JBO0lGeKEjfMde6iFsaNUUd0DfLRv21Vgw3jHmI="
          alt="Bag Type 1"
        />
        <div className="bag-name">All Bags</div>
      </div>
      <div className="bag-type">
        <img
          src="https://media.istockphoto.com/id/924423184/photo/travel-suitcase.webp?b=1&s=170667a&w=0&k=20&c=fppB3kDtsAR-WEaM-0B5XDDloMpiX68XNJ_g9Gige9c="
          alt="Bag Type 2"
        />
        <div className="bag-name">Vanity Pouch</div>
      </div>
      <div className="bag-type">
        <img
          src="https://plus.unsplash.com/premium_photo-1676739688562-be22bd13b014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpbmclMjBiYWdzJTIwc21hbGwlMjBpbiUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Bag Type 2"
        />
        <div className="bag-name">Sling Bag</div>
      </div>
      <div className="bag-type">
        <img
          src="https://plus.unsplash.com/premium_photo-1676739688562-be22bd13b014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpbmclMjBiYWdzJTIwc21hbGwlMjBpbiUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Bag Type 2"
        />
        <div className="bag-name">Laptop Sleeves</div>
      </div>
      <div className="bag-type">
        <img
          src="https://plus.unsplash.com/premium_photo-1676739688562-be22bd13b014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpbmclMjBiYWdzJTIwc21hbGwlMjBpbiUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Bag Type 2"
        />
        <div className="bag-name">Duffle Bag</div>
      </div>
      <div className="bag-type">
        <img
          src="https://plus.unsplash.com/premium_photo-1676739688562-be22bd13b014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpbmclMjBiYWdzJTIwc21hbGwlMjBpbiUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Bag Type 2"
        />
        <div className="bag-name">Messanger Bag</div>
      </div>
      <div className="bag-type">
        <img
          src="https://plus.unsplash.com/premium_photo-1676739688562-be22bd13b014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpbmclMjBiYWdzJTIwc21hbGwlMjBpbiUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Bag Type 2"
        />
        <div className="bag-name">Hand Bag</div>
      </div>
      {/* Add more bag types as needed */}
    </div>

    <div className="filter">
      <div className="filterName">Bag:Bagpacks</div>
      <div className="filterName">13 Results</div>
    </div>
  </div>
)

export default Navbar
