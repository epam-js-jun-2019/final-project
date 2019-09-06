import React from 'react';
import moment from 'moment';

export default function (props) {
  const {
    id, name, catched, addDefaultSrc,
  } = props;

  return (
    <>
      <h1>Pokemon Info</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid img-thumbnail"
            src={`assets/img/${id}.png`}
            alt={`pokemon ${name}`}
            onError={addDefaultSrc}
          />
        </div>
        <div className="col-md-6">
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{catched ? 'Catched' : 'Free'}</td>
              </tr>
              {catched
                && (
                <tr>
                  <td>Catch date</td>
                  <td>{moment(catched.date).format('LLLL')}</td>
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
