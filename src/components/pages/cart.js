import React from "react";
import {
  Panel,
  Row,
  Col,
  Well,
  Button,
  ButtonGroup,
  Label,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCartItem } from "../../actions/cartActions";

class Cart extends React.Component {
  onDelete(_id) {
    debugger;
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

  render() {
    debugger;
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
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>ILS.{cartArr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>
                QTY. <Label>{cartArr.quantity}</Label>
              </h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{ minWidthL: "300px" }}>
                <Button bsStyle="default" bsSize="small">
                  -
                </Button>
                <Button bsStyle="default" bsSize="small">
                  +
                </Button>
                <span></span>
                <Button
                  onClick={this.onDelete.bind(this, cartArr._id)}
                  bsStyle="danger"
                  bsSize="small"
                >
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
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCartItem: deleteCartItem }, dispatch);
}

// no state means no need for mapStateToProps - null
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
