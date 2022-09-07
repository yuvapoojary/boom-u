export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="d-flex">
            <a id="horizontal-navtoggle" className="animated-arrow hor-toggle">
              <span />
            </a>
            <a className="header-brand" href="/admin/">
              <img
                src="/admin/assets/images/brand/logo-2.svg"
                className="header-brand-img desktop-logo"
                alt="Boominance logo"
              />
              <img
                src="/admin/assets/images/brand/logo-1.png"
                className="header-brand-img mobile-view-logo"
                alt="Boominance logo"
              />
            </a>
            {/* LOGO */}
            <div className="d-flex order-lg-2 ml-auto header-right-icons header-search-icon">
              <div className=""></div>
              {/* SEARCH */}

              {/* FULL-SCREEN */}

              {/* NOTIFICATIONS */}

              {/* MESSAGE-BOX */}
              <div className="dropdown d-md-flex header-settings">
                <a href="#" className="nav-link " data-toggle="dropdown">
                  <span>
                    <img
                      src="/admin/assets/images/users/male/32.jpg"
                      alt="profile-user"
                      className="avatar brround cover-image mb-0 ml-0"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <div className="drop-heading  text-center border-bottom pb-3">
                    <h5 className="text-dark mb-1">Admin</h5>
                  </div>

                  <a className="dropdown-item" onClick={() => doUserLogIn()}>
                    <i className="mdi  mdi-logout-variant mr-2" />{' '}
                    <span>Logout</span>
                  </a>
                </div>
              </div>
              {/* SIDE-MENU */}

              {/* FULL-SCREEN */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function doUserLogIn() {
  localStorage.clear();
  window.location.href = '/';
}
