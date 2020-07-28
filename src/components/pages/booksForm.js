import React from "react";
import {
    Well,
    Panel,
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {postBooks, deleteBooks} from "../../actions/booksActions";
import {findDOMNode} from "react-dom";

class BooksForm extends React.Component {

    constructor() {
        super();
    }

    handleSubmit() {
        debugger;
        if (this.refs.price) {
            const book = [{
                    _id: this.props._id + 1,
                    title: findDOMNode(this.refs.title).value,
                    description: findDOMNode(this.refs.description).value,
                    price: findDOMNode(this.refs.price).value
                },];
            this.props.postBooks(book);
        }
    }

    onDelete() {
        debugger;
        const bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBooks(bookId);
    }

    render() {
        const booksList = this.props.books.map(function (booksArr) {
            console.log(booksArr);
            return (
                <option key={
                        booksArr._id
                    }
                    value={
                        booksArr._id
                }>
                    {
                    booksArr.title
                } </option>
            );
        });

        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter Title" ref="title"/>
                    </FormGroup>

                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" placeholder="Enter Description" ref="description"/>
                    </FormGroup>

                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl type="text" placeholder="Enter Price" ref="price"/>
                    </FormGroup>

                    <Button onClick={
                            () => this.handleSubmit(this)
                        }
                        bsStyle="primary">
                        Save Book
                    </Button>
                </Panel>
                <Panel style={
                    {marginTop: "25px"}
                }>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select Book To Delete</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="delete">
                            <option value="select">select</option>
                            {booksList} </FormControl>
                    </FormGroup>
                    <Button onClick={
                            this.onDelete.bind(this)
                        }
                        bsStyle="danger">
                        Delete Book
                    </Button>
                </Panel>
            </Well>
        );
    }
}
function mapStateToProps(state) {
    return {books: state.books.books, _id: state.books._id};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postBooks: postBooks,
        deleteBooks: deleteBooks
    }, dispatch);
}

// no state means no need for mapStateToProps - null
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);