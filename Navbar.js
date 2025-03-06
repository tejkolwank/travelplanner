import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/travel-plan">My Travel Plans</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
