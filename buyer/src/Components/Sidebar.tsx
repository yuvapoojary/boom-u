import { useAuth } from '../Providers/AuthProvider';

export default function Sidebar() {
  const auth = useAuth();

  return (
    <>
      <ul className="sidebar navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="/buyer/">
            <i className="fas fa-fw fa-home" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buyer/portfolio">
            <i className="fas fa-fw fa-briefcase" />
            <span>Portfolio</span>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/buyer/purchases">
            <i className="fas fa-fw fa-shopping-bag " />
            <span>Purchases</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buyer/refer-a-friend">
            <i className="fas fa-fw fa-share-alt " />
            <span>Refer a Friend</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buyer/settings">
            <i className="fas fa-fw fa-cog " />
            <span>Settings</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buyer/support">
            <i className="fas fa-fw fa-question-circle " />
            <span>Help &amp; Support</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={auth.logout}>
            <i className="fas fa-fw fa-question-circle " />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </>
  );
}
