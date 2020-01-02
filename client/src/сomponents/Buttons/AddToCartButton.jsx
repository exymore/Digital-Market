import React from 'react';
import { AuthContext } from '../../сontexts/auth-context';

class AddToCartButton extends React.Component {
  state = {
    isLoggedIn: false,
    label: 'Add To Cart',
    miscClasses: '',
  };

  send = async () => {
    if (this.state.isLoggedIn !== false) {
      let productID = this.props.productID;

      await fetch('/cart', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productID: productID,
        }),
      }).then(async res => {
        if (res.status === 200) {
          await this.setState({
            label: 'Added!',
            miscClasses: ' is-warning is-active',
          });
        } else {
          await this.setState({
            label: 'Error!',
            miscClasses: ' is-danger is-active',
          });
        }
      });
    } else {
      await this.setState({
        label: 'Log In First!',
        miscClasses: ' is-danger is-active',
      });
    }
  };

  componentWillMount = async () => {
    this.setState({ isLoggedIn: this.context.isVerified });
  };

  render() {
    return (
      <div className="control">
        <a
          href={this.props.href}
          className={'button ' + this.props.classes + this.state.miscClasses}
          onClick={this.send}
          style={this.props.styles}
        >
          {this.state.label}
        </a>
      </div>
    );
  }
}

AddToCartButton.contextType = AuthContext;
export default AddToCartButton;
