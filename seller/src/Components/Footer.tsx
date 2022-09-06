export default function Footer(){
    return(<><footer className="sticky-footer">
    <section className="section-padding footer-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="footer-logo mb-4">
              <a className="logo" href="/">
                <img alt="" src="assets/img/logo.png" className="img-fluid" />
              </a>
            </div>
            <p>86 Petersham town, New South wales Waedll Steet, Australia</p>
            <p className="mb-0">
              <a href="#" className="text-dark">
                <i className="fas fa-mobile fa-fw" /> +61 525 240 310
              </a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-dark">
                <i className="fas fa-envelope fa-fw" /> iamosahan@gmail.com
              </a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-dark">
                <i className="fas fa-globe fa-fw" /> www.askbootstrap.com
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-md-2">
            <h6 className="mb-4">Company</h6>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2">
            <h6 className="mb-4">Features</h6>
            <ul>
              <li>
                <a href="#">Retention</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">Messages</a>
              </li>
              <li>
                <a href="#">Infrastructure</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Funnels</a>
              </li>
              <li>
                <a href="#">Live</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2">
            <h6 className="mb-4">Solutions</h6>
            <ul>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Financial Services</a>
              </li>
              <li>
                <a href="#">Consumer Tech</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3">
            <h6 className="mb-4">NEWSLETTER</h6>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address..."
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
            <small>
              It is a long established fact that a reader will be distracted by..
            </small>
            <h6 className="mb-2 mt-4">DOWNLOAD APP</h6>
            <div className="app">
              <a href="#">
                <img alt="" src="assets/img/google.png" />
              </a>
              <a href="#">
                <img alt="" src="assets/img/apple.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
  </>)
}