import React from 'react';
import pet from '@frontendmasters/pet';
import Loader from './Loader';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
      throw new Error("lol")
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, 
                  ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <div>
            <Loader />
          </div>
        </div>
      );
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const Details = (props) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props}/>
        </ErrorBoundary>
    )
}
