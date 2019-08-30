import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "./profileView";
import Loading from "../loading";

const Profile = ({ match }) => {
  const { id } = match.params;
  const pokemonData = useSelector(state => {
    const el = state.data.filter(el => el.id === +id);
    return el ? el[0] : null;
  });

  if (!pokemonData) {
    return <Loading />;
  }

  const { image, name, catchTime, catched } = pokemonData;
  let time;
  if (catched) {
    time = `${catchTime.getDate()}-${catchTime.getMonth()}-${catchTime.getFullYear()} ${catchTime.getHours()}:${catchTime.getMinutes()}`;
  }

  return (
    <ProfileView
      image={image}
      name={name}
      time={time}
      catched={catched}
      id={id}
    />
  );
};

export default Profile;
