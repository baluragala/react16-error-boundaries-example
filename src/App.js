import React, {Component} from 'react';
import './App.css';
import ProductList from './ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    //set this.state = {} to simulate error in ProductList
    this.state = {products: ['iphone', 'galaxy 8', 'pixel', 'oneplus 5']}
  }

  render() {
    return (
      <div style={{padding: 20}}>
        <ProductList productList={this.state.products}/>
      </div>
    );
  }
}

export default App;
