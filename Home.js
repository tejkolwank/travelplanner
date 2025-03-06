import { Link } from 'react-router-dom';

const destinations = [
  { id: 1, name: 'Paris', description: 'The city of lights.' },
  { id: 2, name: 'New York', description: 'The Big Apple.' },
  { id: 3, name: 'Tokyo', description: 'A city blending tradition and modernity.' },
];

function Home() {
  return (
    <div>
      <h1>Welcome to the Travel Planner</h1>
      <h2>Popular Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destination/${destination.id}`}>
              <h3>{destination.name}</h3>
            </Link>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
