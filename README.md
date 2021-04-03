# Adopt Me

## A React project

> This is a sample React application to experiment with React hooks and API Calls 

INSTALLATION
------------

    $ git clone https://github.com/Parchie876/adopt-me.git ProjectName
    $ cd ProjectName
    $ npm install
    $ npm run dev



> #### This project was build with:
>
> - Best tooling for a React application
> - Using both functional and Class components in a project

```javascript
export default function Pet({ name, animal, breed, media, location, id }) {

    let hero = 'http://placecorgi.com/300/300';
    if(media.length) {
        hero = media[0].small;
    }
    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>
    )
}
```
> - Used very basic [Reach router](https://reach.tech/router/) instead of traditional React router
### Parse Data From the URL
```javascript
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
```
> - Used [Parcel](https://parceljs.org/getting_started.html) web application bundler instead of Webpack
> - Work with [babel](https://babeljs.io/) and parcel in same project
> - Used context API with hooks and class
> - Usage of [Portals](https://reactjs.org/docs/portals.html)
> - Usage of [Error Boundary](https://reactjs.org/docs/error-boundaries.html)
