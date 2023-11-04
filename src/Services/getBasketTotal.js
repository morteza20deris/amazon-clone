function getBasketTotal(kartItems) {
  return kartItems
    .map((item) => item.price * item.count)
    .reduce((total, num) => total + num, 0);
}

export default getBasketTotal;
