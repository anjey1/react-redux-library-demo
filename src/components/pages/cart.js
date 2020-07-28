import React from "react";
import {
    Modal,
    Panel,
    Row,
    Col,
    Well,
    Button,
    ButtonGroup,
    Label
} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteCartItem, updateCart, getCart} from "../../actions/cartActions";
import {totalQty, totals} from "../../reducers/cartReducers";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    componentDidMount() { // Dispatch Action
        this.props.getCart();
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    onDelete(_id) {
        const cartItemToDelete = [...this.props.cart].findIndex((cartItem) => {
            return cartItem._id === _id;
        });

        // id = 3 [0,1,2,3,4,5] = [...[0,1,2], ...[4,5]]
        let cartAfterDelete = [
            ...this.props.cart.slice(0, cartItemToDelete),
            ...this.props.cart.slice(cartItemToDelete + 1),
        ];

        this.props.deleteCartItem(cartAfterDelete);
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1);
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) 
            this.props.updateCart(_id, -1);
        


    }

    render() {
        debugger
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty() {
        return <div></div>;
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function (cartArr) {
            return (
                <Panel key={
                    cartArr._id
                }>
                    <Row>
                        <Col xs={12}
                            sm={4}>
                            <h6>{
                                cartArr.title
                            }</h6>
                        </Col>
                        <Col xs={12}
                            sm={2}>
                            <h6>ILS.{
                                cartArr.price
                            }</h6>
                        </Col>
                        <Col xs={12}
                            sm={2}>
                            <h6>
                                QTY.
                                <Label>{
                                    cartArr.quantity
                                }</Label>
                            </h6>
                        </Col>
                        <Col xs={6}
                            sm={4}>
                            <ButtonGroup style={
                                {minWidthL: "300px"}
                            }>
                                <Button onClick={
                                        this.onDecrement.bind(this, cartArr._id, cartArr.quantity)
                                    }
                                    bsStyle="default"
                                    bsSize="small">
                                    -
                                </Button>
                                <Button onClick={
                                        this.onIncrement.bind(this, cartArr._id)
                                    }
                                    bsStyle="default"
                                    bsSize="small">
                                    +
                                </Button>
                                <span></span>
                                <Button onClick={
                                        this.onDelete.bind(this, cartArr._id)
                                    }
                                    bsStyle="danger"
                                    bsSize="small">
                                    Delete
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            );
        }, this);

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6>
                            Total Quantity : {
                            this.props.totalQty
                        }</h6>
                        <Button onClick={
                                this.toggleModal.bind(this)
                            }
                            bsStyle="success"
                            bsSize="small">
                            Proceed To Checkout
                        </Button>
                    </Col>
                </Row>
                <Modal show={
                        this.state.showModal
                    }
                    onHide={
                        this.toggleModal.bind(this)
                }>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h2>One fine body...</h2>
                        <p>You will be beseder</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <h6>
                            Total $ : {
                            this.props.totalAmount
                        }</h6>
                        <Button onClick={
                            this.toggleModal.bind(this)
                        }>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {cart: state.cart.cart, totalAmount: state.cart.totalAmount, totalQty: state.cart.totalQty};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart,
        getCart: getCart
    }, dispatch);
}

// no state means no need for mapStateToProps - null
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
