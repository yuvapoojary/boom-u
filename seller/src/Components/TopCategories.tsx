export default function TopCategories(){
    return(<>
    <div className="top-category section-padding mb-4">
    <div className="row">
      <div className="col-md-12">
        <div className="main-title">
          <div className="btn-group float-right right-action">
            <a
              href="#"
              className="right-action-link text-gray"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-h" aria-hidden="true" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-times-circle" /> &nbsp; Close
              </a>
            </div>
          </div>
          <h6>Channels Categories</h6>
        </div>
      </div>
      <div className="col-md-12">
        <div className="owl-carousel owl-carousel-category">
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s1.png" alt="" />
                <h6>Your Life</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s2.png" alt="" />
                <h6>Unboxing Cool</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s3.png" alt="" />
                <h6>Service Reviewing</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s4.png" alt="" />
                <h6>
                  Gaming{" "}
                  <span
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success" />
                  </span>
                </h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s5.png" alt="" />
                <h6>Technology Tutorials</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s6.png" alt="" />
                <h6>Singing</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s7.png" alt="" />
                <h6>Cooking</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s8.png" alt="" />
                <h6>Traveling</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s1.png" alt="" />
                <h6>Education</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s2.png" alt="" />
                <h6>Noodles, Sauces &amp; Instant Food</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s3.png" alt="" />
                <h6>
                  Comedy{" "}
                  <span
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success" />
                  </span>
                </h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <a href="#">
                <img className="img-fluid" src="/assets/img/s4.png" alt="" />
                <h6>Lifestyle Advice</h6>
                <p>74,853 views</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}