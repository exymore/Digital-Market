import React, { PureComponent } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Filters from './Filters';
import ProductCards from './ProductCards';

class ProductPage extends PureComponent {
  capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  componentWillMount() {
    document.title = this.capitalize(this.props.category);
  }

  state = {
    products: [],
    showOnly: '',
    currentFilter: 'date',
  };

  fetchData = async () => {
    await fetch('/products/' + this.props.category, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(products => this.setState({ products: products }));
  };

  updateBrand = showOnly => this.setState({ showOnly: showOnly });
  updateFilter = currentFilter =>
    this.setState({ currentFilter: currentFilter });

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="app-container hero">
        <Header />
        <Filters
          category={this.props.category}
          list={this.state.products
            .map(product => product.brand)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort()}
          updateBrand={this.updateBrand}
          onChange={this.updateFilter}
        />
        <ProductCards
          products={this.state.products}
          category={this.props.category}
          showOnly={this.state.showOnly}
          filterBy={this.state.currentFilter}
        />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
