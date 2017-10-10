import React from 'react'

class ProductList extends React.Component {
  componentWillMount() {

  }

  renderProducts() {
    return this.props.productList.map(p => <li>{p}</li>)
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        {this.renderProducts()}
      </div>)
  }
}

export default ProductList