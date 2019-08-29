import React from "react";
import { useSelector } from "react-redux";
const Profile = ({ match }) => {
  const { id } = match.params;
  const pokemonData = useSelector(state => {
    const el = state.data.filter(el => el.id === +id);
    return el;
  });
  if (!pokemonData[0]) {
    return <div className="has-text-centered">Loading...</div>;
  }
  const { image, name, catchTime, catched } = pokemonData[0];
  let time;
  if (catched) {
    time = `${catchTime.getDate()} ${catchTime.getMonth()} ${catchTime.getFullYear()} ${catchTime.getHours()} : ${catchTime.getMinutes()}`;
  }

  return (
    <div>
      <h1 className="has-text-centered is-size-1">
        Have a closer look to a pokemon
      </h1>
      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-fifths">
          <div className="card">
            <div className="card-image">
              <img src={"data:image/png;base64," + image} alt="" />
            </div>
            <div className="card-content">
              <div className="content">
                <span className="has-text-centered is-size-4 is-uppercase has-text-weight-semibold">
                  {name}
                </span>
                <p className="has-text-left">
                  <span className="has-text-weight-bold">Status : </span>
                  {catched ? "Catched" : "Walking around!"}
                </p>
                <p className="has-text-left">
                  {catched ? (
                    <span>
                      <span className="has-text-weight-bold">Catch time :   </span>
                      {time}
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {id}
    </div>
  );
};

export default Profile;
