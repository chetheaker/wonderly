import './Home.css';
import { places } from '../../util/places';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>City Times</h1>
      <div className="places">
        {places.map((place, i) => {
          return (
            <Link to={`/city/${place}`} key={i} className="btn">
              <h3>{place}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
