export default {
  counterIncrease(state, payload) {
    payload.count++;
  },
  newCart(state, payload) {
    payload.check = true;
    state.cartList.push(payload);
  },
  changeCheck(state, payload) {
    let index = -1;
    for(let item in state.cartList){
      if(state.cartList[item].id === payload.id){
        index  = item;
        break;
      }
    }
    state.cartList[index].check = !state.cartList[index].check;
    
  },
  selectAll(state) {
    state.cartList.forEach(item => {
      item.check = true;
    })
  },
  unselectAll(state) {
    state.cartList.forEach(item => {
      item.check = false;
    })
  },
}