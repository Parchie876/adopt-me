import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me !'),
    React.createElement(Pet, {
      name: 'Nish',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Scratch',
      animal: 'Bird',
      breed: 'Parrot',
    }),
    React.createElement(Pet, {
      name: 'Puss',
      animal: 'Dog',
      breed: 'mixed',
    }),
  ]);
};
render(React.createElement(App), document.getElementById('root'));
