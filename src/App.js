import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
const App = () => {
  //   return React.createElement('div', {}, [
  //     React.createElement('h1', {}, 'Adopt Me !'),
  //     React.createElement(Pet, {
  //       name: 'Nish',
  //       animal: 'Dog',
  //       breed: 'Havanese',
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Scratch',
  //       animal: 'Bird',
  //       breed: 'Parrot',
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Puss',
  //       animal: 'Dog',
  //       breed: 'mixed',
  //     }),
  //   ]);

  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Nish" animal="Dog" breed="Havanese" />
      <Pet name="Scratch" animal="Bird" breed="Parrot" />
      <Pet name="Puss" animal="Cat" breed="mixed" />
    </div>
  );
};
render(<App />, document.getElementById('root'));
