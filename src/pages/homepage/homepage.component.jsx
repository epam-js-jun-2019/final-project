import React from 'react';

import './homepage.styles.scss';
import packageJSON from '../../../package.json';

const HomePage = () => {
  const renderDependencies = () => {
    let dependencies = [];
    for (let [key, value] of Object.entries(packageJSON.dependencies)) {
      dependencies = [...dependencies, { [key]: value }];
    }

    return dependencies.map((dependency, idx) => (
      <li className='animated' key={idx + 1}>
        <strong>{Object.entries(dependency)[0][0]}</strong>:{' '}
        <i>{Object.entries(dependency)[0][1]}</i>
      </li>
    ));
  };

  const renderDevDependencies = () => {
    let devDependencies = [];
    for (let [key, value] of Object.entries(packageJSON.devDependencies)) {
      devDependencies = [...devDependencies, { [key]: value }];
    }

    return devDependencies.map((dependency, idx) => (
      <li className='animated' key={idx + 1}>
        <strong style={{}}>{Object.entries(dependency)[0][0]}</strong>:{' '}
        <i>{Object.entries(dependency)[0][1]}</i>
      </li>
    ));
  };

  return (
    <div className='homepage'>
      <h1 className='homepage__title'>Welcome to Pokedex!</h1>
      <section className='homepage__info'>
        <p>
          This App is the final task of EPAM's JavaScript Development summer
          course. It's built up of the following npm packages:
        </p>
        <h3>Dependencies:</h3>
        <ul>{renderDependencies()}</ul>
        <h3>Development dependencies:</h3>
        <ul>{renderDevDependencies()}</ul>
      </section>
    </div>
  );
};

export default HomePage;
