import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../Providers/AuthProvider';

export default function Header() {
  const auth = useAuth();

  const [category, getData] = useState<any[]>([]);

  const URL = `/api/categories`;

  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = () => {
    axios
      .get(`${URL}`)
      .then((res) => {
        const sell = res.data;
        getData(sell);
      })
      .catch((error) => console.log(`${error}`));
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
        <button
          className="btn btn-link btn-md text-secondary order-1 order-sm-0 ml-4 mr-2"
          id="sidebarToggle"
        >
          <i className="fas fa-bars" />
        </button>

        <a className="navbar-brand mr-1" href="/">
          <img
            className="img-fluid"
            alt=""
            src="/recommender/assets/img/logo.svg"
            width={150}
          />
        </a>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search"></form>
        <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle btn btn-primary"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span>Add Recommendation</span>
            </a>
            <div className="dropdown-menu " x-placement="bottom-start">
              {category.map((cat) => (
                <a
                  className="dropdown-item"
                  href={`/recommender/add-recommendation/${cat._id}`}
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </li>

          <li className="nav-item  no-arrow osahan-right-navbar-user">
            <a className="nav-link  user-dropdown-link" href="/profile">
              <img alt="Avatar" src="/recommender/assets/img//user.png" />
              {auth.user.Name}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
