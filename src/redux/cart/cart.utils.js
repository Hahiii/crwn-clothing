export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  };

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => (
  cartItems.filter(
    cartItem => cartItem.id !== cartItemToRemove.id
  )
);

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return removeItemFromCart(cartItems, cartItemToRemove);
  };

  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  )
};