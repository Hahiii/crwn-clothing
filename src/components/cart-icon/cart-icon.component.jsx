import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggelCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggelCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggelCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);


const mapDispatchToProps = dispatch => ({
  toggelCartHidden: () => dispatch(toggelCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);