import './App.css';
import Navbar from "./components/layouts/Navbar";
import Axios from "axios";

import React, { Component } from 'react'
import Books from './components/books/Books';

export default class App extends Component {

  state = {
    books: [],
    loading: false,
  }

  async componentDidMount(){

    this.setState({ loading: true});

    const res = await Axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=753XosXtqfGf9N1K9irKGmUY2looR6Go&secret=${process.env.SECRET}`
    );
  
      this.setState({ books: res.data.results.books, loading: false});
  }

  render() {
      return (
        <div className="App">
          <Navbar />
          <div className="container">
            <Books loading={this.state.loading} books={this.state.books} />
          </div>
        </div>
      )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Spinner />
//       <Navbar />
//     </div>
//   );
// }

//export default App;
