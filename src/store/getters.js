export default {
  cartLength(state) {
    return state.cartList.length;
  },
  cartList(state) {
    return state.cartList;
  },
  totalCount(state) {
    let count = 0;
    state.cartList.forEach(item => {
      count += item.count;
    })
    return count;
  },
  allCheck(state) {
    return state.cartList.length && (state.cartList.find(item => !item.check) === undefined)
  }
}