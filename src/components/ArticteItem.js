import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import products from '../data';

export class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      quantity: 1,
      isDisabled: false,
      discount: 0,
      articleFinalPrice: 0,
    };
  }

  handleProductChange = (event) => {
    const selectedProductId = parseInt(event.target.value);
    const selectedProduct = products.find(product => product.id === selectedProductId);
    this.setState({ selectedProduct }, () => {
      this.calculateDiscount();
    });
  }

  handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    this.setState({ quantity }, () => {
      this.calculateDiscount();
    });
  }

  calculateDiscount = () => {
    const { selectedProduct, quantity } = this.state;
    let discount = 0;

    if (quantity > 100) discount = 40;
    else if (quantity > 50) discount = 30;
    else if (quantity > 20) discount = 20;
    else if (quantity > 5) discount = 10;
    else if (quantity > 1) discount = 5;
   
   

    const discountedPrice = selectedProduct ? (selectedProduct.price * (1 - discount / 100)) : 0;
    const articleFinalPrice = discountedPrice * quantity;

    this.setState({ discount, articleFinalPrice });
  }

  handleCheckClick = () => {
    const { selectedProduct, quantity, isDisabled } = this.state;

    // Check if a product is selected
    if (!selectedProduct) {
        alert("Please select a product before adding.");
        return;
    }

    this.setState(prevState => ({ isDisabled: !prevState.isDisabled }));
   
    const newArticleItem = {
      id: this.props.article.id,
      quantity: this.state.quantity,
      discount: this.state.discount,
      articleFinalPrice: this.state.articleFinalPrice,
      name: this.state.selectedProduct.name,
      price: this.state.selectedProduct.price
  };
    if(JSON.parse(localStorage.getItem('articlesItemesValidi')) === null ){
      localStorage.setItem('articlesItemesValidi', JSON.stringify([newArticleItem]));
    }else if(JSON.parse(localStorage.getItem('articlesItemesValidi')).length === 0){
      localStorage.setItem('articlesItemesValidi', JSON.stringify([newArticleItem]));
    }else{
      localStorage.setItem('articlesItemesValidi', JSON.stringify([...JSON.parse(localStorage.getItem('articlesItemesValidi')), newArticleItem]));
    }
  };

  render() {
    const { article, deleteArticle } = this.props;
    const { selectedProduct, quantity, isDisabled, discount, articleFinalPrice } = this.state;

    return (
      <tr>
        <td className="text-left">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={this.handleProductChange}
            disabled={isDisabled}
          >
            <option value="">Open this select menu</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </td>
        <td className="text-left">
          <input
            type="number"
            value={quantity}
            onChange={this.handleQuantityChange}
            className="form-control"
            min="1"
            disabled={isDisabled}
          />
        </td>
        <td className="text-left">{selectedProduct ? `${selectedProduct.price}DH` : 0}</td>
        <td className="text-left">{discount}%</td>
        <td className="text-left">{articleFinalPrice ? `${articleFinalPrice.toFixed(2)}DH` : 0}</td>
        <td className="text-left">
          <div className="form-check col-auto d-flex justify-content-around">
            <button
              id='checked'
              className={`btn btn-link p-0 ${isDisabled ? 'btn-checked' : 'not-checked'}`}
              onClick={this.handleCheckClick}
            >
              <FontAwesomeIcon icon={faSquareCheck} />
            </button>
            <button
              id='delete'
              onClick={() => deleteArticle(article.id)}
              className="btn btn-link p-0"
              disabled={isDisabled}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default ArticleItem;
