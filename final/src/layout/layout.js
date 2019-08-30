import React from "react";

const Layout = ({ data }) => {
  let view = [];
  for (let i = 0; i < data.length; i += 3) {
    let result = (
      <div className="columns" key={`columns${i}`}>
        <div className="column" key={`column${i}`}>
          {data[i]}
        </div>
        <div className="column" key={`column${i + 1}`}>
          {i + 1 < data.length ? data[i + 1] : null}
        </div>
        <div className="column" key={`column${i + 2}`}>
          {i + 2 < data.length ? data[i + 2] : null}
        </div>
      </div>
    );
    view.push(result);
  }
  return <React.Fragment>{view}</React.Fragment>;
};

export default Layout;
