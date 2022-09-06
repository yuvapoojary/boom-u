import { useAuth } from '../Providers/AuthProvider';

export default function Sidebar() {
  const auth = useAuth();

  return (
    <>
      <ul className="sidebar navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-home" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/recommendations">
            <i className="fas fa-fw fa-briefcase" />
            <span>My Posts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/finances">
            <i className="fas fa-fw fa-image" />
            <span>Finances</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/followers">
            <i className="fas fa-fw fa-shopping-bag " />
            <span>My Followers</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reviews">
            <i className="fas fa-fw fa-shopping-bag " />
            <span>Review Control</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/rating">
            <i className="fas fa-fw fa-shopping-bag " />
            <span>Rating Control</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/help-and-support">
            <i className="fas fa-fw fa-share-alt " />
            <span>Help and Support</span>
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/profile">
            <i className="fas fa-fw fa-question-circle " />
            <span>Settings</span>
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
