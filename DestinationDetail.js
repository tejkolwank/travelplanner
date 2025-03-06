import { useParams } from 'react-router-dom';

function DestinationDetail() {
  const { id } = useParams();
  const destination = {
    1: { name: 'Paris', description: 'The city of lights.', info: 'Great food and culture.' },
    2: { name: 'New York', description: 'The Big Apple.', info: 'Known for Times Square and Central Park.' },
    3: { name: 'Tokyo', description: 'A city blending tradition and modernity.', info: 'Amazing temples and nightlife.' },
  }[id];

  return (
    <div>
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <p>{destination.info}</p>
    </div>
  );
}

export default DestinationDetail;
