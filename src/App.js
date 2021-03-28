const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById('root'));
