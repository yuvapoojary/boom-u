export default function Navigation(){
    return (
        <>
        <div className="sticky">
        <div className="horizontal-main hor-menu clearfix">
          <div className="horizontal-mainwrapper container clearfix">
            <nav className="horizontalMenu clearfix">
              <ul className="horizontalMenu-list">
                <li aria-haspopup="true">
                  <a href="/" className="sub-icon">
                    <i className="fe fe-airplay" /> Dashboard
                  
                  </a>
                  
                </li>
                <li aria-haspopup="true">
                  <a href="/recommenders" className="">
                    <i className="fe fe-box" /> Recommenders
                  </a>
                  <ul className="sub-menu">
                    <li><a href='/add-recommender'>Add Recommender</a></li><li><a href='/recommenders'>View Recommenders
                        </a></li>
                  </ul>
                </li>
                <li aria-haspopup="true">
                  <a href="/buyers" className="sub-icon">
                    <i className="fe fe-database" /> Buyers
                   
                  </a>
                  
                </li>
                <li aria-haspopup="true">
                  <a href="/orders" className="sub-icon">
                    <i className="fe fe-pie-chart" /> Orders
                   
                  </a>
                 
                </li>
                <li aria-haspopup="true">
                  <a href="/revenue" className="sub-icon">
                    <i className="fe fe-layers" /> Revenue
                  
                  </a>
                  
                </li>
              
               
              
              </ul>
            </nav>
            {/* NAV END */}
          </div>
        </div>
      </div></>
    )
}