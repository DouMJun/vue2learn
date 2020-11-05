//import { reject, resolve } from "core-js/fn/promise";

export default {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(item => item.id === payload.id)
      if(product){
        context.commit('counterIncrease', product);
        resolve('商品数量加一');
      }else{
        payload.count = 1;
        context.commit('newCart', payload);
        resolve('商品添加成功')
      }
    })
  },
  stateCheck(context) {
    if(context.state.cartList.find(item => {
      return item.check;
    }) === undefined ){
      context.commit('selectAll')
    }else if(context.state.cartList.find(item => {
      return !item.check;
    }) === undefined ){
      context.commit('unselectAll')
    }
  }
}