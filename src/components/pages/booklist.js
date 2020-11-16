import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/booksActions";
import { Grid, Col, Row, Button } from "react-bootstrap";
import BookItem from "./bookItem";
import BooksForm from "./booksForm";
import Cart from "./cart";

class Booklist extends React.Component {
  componentDidMount() {
    // Dispatch Action
    this.props.getBooks();
  }
  render() {
    const bookList = this.props.books.map(function (booksArr) {
      return (
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem
            _id={booksArr._id}
            title={booksArr.title}
            description={booksArr.description}
            price={booksArr.price}
          ></BookItem>
        </Col>
      );
    });

    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {bookList}
        </Row>
          <Row>
              <Cart />
          </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBooks: getBooks,
      //otherActions: xxxx,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
