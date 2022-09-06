import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header class="header-1 style-2 static">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-2 col-sm-5 col-md-4 col-6">
              <div class="logo">
                <a href="/">
                  <img src="img/logo-black.svg" alt="xmoze" />
                </a>
              </div>
            </div>
            <div class="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
              <div class="menu-wrap">
                <div class="main-menu">
                  <ul>
                    <li>
                      <a href="/">Products</a>
                    </li>
                    <li>
                      <a href="">About Us</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/who-we-are">Who We Are</a>
                        </li>
                        <li>
                          <a href="/our-recommenders">Our Recommenders</a>
                        </li>
                        <li>
                          <a href="https://boominance.com/recommender">
                            Become a Recommender
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="how-it-works">How it works</a>
                    </li>

                    <li>
                      <a href="features">Features</a>
                    </li>
                    <li>
                      <a href="/in">
                        IN
                        <span>
                          <img src="img/Flag_India.svg" width={25}></img>
                        </span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/hk">HK</a>
                        </li>
                        <li>
                          <a href="/uk">UK</a>
                        </li>
                        <li>
                          <a href="/us">US</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="header-right-element">
                <a href="https://boominance.com/buyer/login" class="color-2">
                  Login
                </a>
                <a
                  href="https://boominance.com/buyer/sign-up"
                  class="theme-btn bg-color"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <div class="d-block d-lg-none col-sm-1 col-md-8 col-6">
              <div class="mobile-nav-wrap">
                <div id="hamburger">
                  <i class="fal fa-bars"></i>
                </div>

                <div class="mobile-nav">
                  <button type="button" class="close-nav">
                    <i class="fal fa-times-circle"></i>
                  </button>
                  <nav class="sidebar-nav">
                    <ul class="metismenu" id="mobile-menu">
                      <li>
                        <a href="/">Products</a>
                      </li>
                      <li>
                        <a href="">About Us</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/who-we-are">Who We Are</a>
                          </li>
                          <li>
                            <a href="/our-recommenders">Our Recommenders</a>
                          </li>
                          <li>
                            <a href="/become-a-recommender">
                              Become a Recommender
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="how-it-works">How it works</a>
                      </li>

                      <li>
                        <a href="features">Features</a>
                      </li>
                    </ul>
                    <a href="" class="theme-btn d-block mt-4 text-center ms-0">
                      Login
                    </a>
                    <a href="" class="theme-btn d-block mt-4 text-center ms-0">
                      Signup
                    </a>
                  </nav>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
