import './City.css';
import { useParams, Link } from 'react-router-dom';
import { fetchTime } from '../../util/time.api';
import { useEffect, useState, useCallback } from 'react';

function City() {
  const { city } = useParams();
  const [time, setTime] = useState(null);

  const getTime = useCallback(async () => {
    const res = await fetchTime(city);
    setTime(parseISO(res));
  }, [city]);

  useEffect(() => {
    getTime();
  }, [city, getTime]);

  const parseISO = (iso) => {
    let [hours, mins, unroundedSeconds] = iso
      .split('T')[1]
      .split('+')[0]
      .split(':');
    const secondsAsNumber = Math.round(unroundedSeconds);

    const seconds =
      secondsAsNumber < 10 ? `0${secondsAsNumber}` : `${secondsAsNumber}`;
    return hours >= 12
      ? `${hours - 12}:${mins}:${seconds} pm`
      : `${hours}:${mins}:${seconds} am`;
  };

  return (
    <div className="city">
      <h1>{city}</h1>
      <p className="time">{time ? time : 'loading...'}</p>
      <div className="buttons">
        <Link to="/" className="btn">
          Back
        </Link>
        <button onClick={getTime} className="btn">
          Update Time
        </button>
      </div>
    </div>
  );
}

export default City;
