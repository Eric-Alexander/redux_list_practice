import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component{
  render(){
    if (!this.props.book){
      return <div><h4>Please, select a book.</h4></div>
    }
    return(
      <div>
        <h5>Selected Book: </h5>
        <div> Title: <h3>{this.props.book.title}</h3></div>
        <div> Genre: <h4>{this.props.book.genre}</h4></div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
