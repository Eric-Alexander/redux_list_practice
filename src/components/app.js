import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Go shoot the moon.</h1>
      <BookList />
      <BookDetail />
      </div>
    );
  }
}
