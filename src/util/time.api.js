const baseUrl = 'http://worldtimeapi.org/api/timezone/Europe';

export const fetchTime = async (city) => {
  const res = await fetch(`${baseUrl}/${city}`);
  const json = await res.json();
  return json.datetime;
};
