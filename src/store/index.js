import { createStore } from 'vuex'

export default createStore({
  state: {
    paymentGate : false,
    cartError : '',
    cartTotal : localStorage.getItem('cartTotal') || 0
  },
  mutations: {

    updateCartTotal(state, total){
      state.cartTotal = total
      localStorage.setItem('cartTotal', total)
    },

    
  },

  actions: {
    getCartTotal({commit}){
      if(localStorage.getItem('cart')){
        const cart = JSON.parse(localStorage.getItem('cart'))
        const total = cart.length
        commit('updateCartTotal', total)
      }
      else{
        commit('updateCartTotal', 0)
      }
    },

    addToCart({dispatch}, prod) {
      let cartItems = []
      if(localStorage.getItem('cart')) {
        cartItems = localStorage.getItem('cart');
        cartItems = JSON.parse(cartItems);
        const itemIndex = cartItems.findIndex((p) => p._id === prod._id);
        if (itemIndex !== -1) {
          alert('product is alrady in cart');
          cartError = 'Item is already in your cart';
        } else {
          cartItems.push(prod);
          localStorage.setItem('cart', JSON.stringify(cartItems));
          dispatch('getCartTotal')
        }
      } else {
        cartItems.push(prod);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        dispatch('getCartTotal')
      }
    },
  },
  modules: {
  }
})
