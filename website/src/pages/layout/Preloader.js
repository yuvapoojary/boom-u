import React from 'react'

class Preloader extends React.Component {
  render() {
    return (
      <div id='preloader' class='preloader'>
        <div class='animation-preloader'>
          <div class='spinner'></div>
          <div class='txt-loading'>
            <span data-text-preloader='B' class='letters-loading'>
              B
            </span>
            <span data-text-preloader='O' class='letters-loading'>
              O
            </span>
            <span data-text-preloader='O' class='letters-loading'>
              O
            </span>
            <span data-text-preloader='M' class='letters-loading'>
              M
            </span>
          </div>
          <p class='text-center'>Loading</p>
        </div>
        <div class='loader'>
          <div class='row'>
            <div class='col-3 loader-section section-left'>
              <div class='bg'></div>
            </div>
            <div class='col-3 loader-section section-left'>
              <div class='bg'></div>
            </div>
            <div class='col-3 loader-section section-right'>
              <div class='bg'></div>
            </div>
            <div class='col-3 loader-section section-right'>
              <div class='bg'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Preloader
