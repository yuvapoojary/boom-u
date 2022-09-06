export default function TopSearch(){
    return(<>
    <div className="top-mobile-search">
  <div className="row">
    <div className="col-md-12">
      <form className="mobile-search">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for..."
            className="form-control"
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-dark">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</>)
}