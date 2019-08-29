import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Main = () => {
  let data = useSelector(state => state.data);
  data = data.map(el => {
    return (
        <div className="card" key={el.id}>
        <div className="card-content ">
          <img src={el.image} alt=""/>
          <p className="has-text-centered is-uppercase has-text-weight-semibold">
            {el.name}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item" onClick={() => console.log(123)}>
            <span>
              <a>Catch</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <a>View profile</a>
            </span>
          </p>
        </footer>
      </div>
    );
  });
  let view = [];
  for (let i = 0; i < data.length; i += 3) {
    let result = (
      <div className="columns">
        <div className="column">{data[i]}</div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    );
    if (i + 1 < data.length) {
      result = (
        <div className="columns" key={`columns${i}`}>
          <div className="column" key={`column${i}`}>{data[i]}</div>
          <div className="column" key={`column${i+1}`}>{data[i + 1]}</div>
          <div className="column" key={`column${i+2}`}></div>
        </div>
      );
    }
    if (i + 1 < data.length && i + 2 < data.length) {
      result = (
        <div className="columns" key={`columns${i}`}>
          <div className="column" key={`column${i}`}>{data[i]}</div>
          <div className="column" key={`column${i+1}`}>{data[i + 1]}</div>
          <div className="column" key={`column${i+2}`}>{data[i + 2]}</div>
        </div>
      );
    }
    view.push(result);
  }
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-two-thirds">
        <h1 className="has-text-centered is-size-1">POKEDEX</h1>
        {view}
      </div>
      <div className="column"></div>
    </div>
  );
};

export default Main;
