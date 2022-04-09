export const getRockets = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v4/rockets`);

    if (response.status !== 200) return;

    const rockets = await response.json();

    return rockets;
  } catch (e) {
    console.error(e);
  }
};

export const getShips = async () => {
  try {
    const response = await fetch(`https://api.spacex.land/rest/ships?id=&name=string&model=string&type=string&role=string&active=true&imo=0&mmsi=0&abs=0&class=0&weight_lbs=0&weight_kg=0&year_built=0&home_port=string&status=string&speed_kn=0&course_deg=0&latitude=0&longitude=0&successful_landings=0&attempted_landings=0&mission=string
    `);

    if (response.status !== 200) return;

    const ships = await response.json();

    return ships;
  } catch (e) {
    console.error(e);
  }
};
