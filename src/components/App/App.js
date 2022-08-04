import React from 'react';

import './App.css';
class App extends React.Component {
  
  state = {

    movies : [

      {
        "id": 1,
        "name": "The Flash",
        "rating": 8.3,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },
    
      {
        "id": 2,
        "name": "Interstellar",
        "rating": 6.8,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      },
    
      {
        "id": 3,
        "name": "Arrow",
        "rating": 7.9,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      }
    
    ]

  }

  render () {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }

}


export default App;
