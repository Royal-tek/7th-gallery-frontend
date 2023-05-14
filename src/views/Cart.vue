<template>
    <Navbar/>
    
        <!-- Cart Section Starts Here -->
        <div class="page_title">
        <p>Shopping Cart</p>
    </div>
    <section class="cart_section">
        <div class="cart_details" v-for="product in cartData" :key="product.id">
            <div class="product_name">
                <div class="product_image">
                    <img :src="product.images[0]">
                </div>
                <!-- <div class="product_title">
                    <p>{{product.name}}</p>
                </div> -->
            </div>
            <div class="product_statistics">
                <div class="product_title">
                    <p style="text-transform: capitalize;">{{product.name}}</p>
                </div>
                <!-- <div class="no_of_item">
                    <span class="minus"><img src="/assets/images/minus.svg"></span>
                    <span class="value_display">2</span>
                    <span class="plus"><img src="/assets/images/plus.svg"></span>
                </div> -->
                <div class="item_price_display">
                    <span class="price_display">{{ product.price }}</span>
                    <span style="cursor:pointer" @click="removeFromCart(product)"><img src="/assets/images/multiply.svg"></span>
                </div>
            </div>
        </div>
        <div v-if="messageStatus">
            <p>{{ message }}</p>
        </div>
        <div class="lower_section">
            <div class="cart_total">
                <div class="cart_total_section">
                    <div>Subtotal</div>
                    <input type="text" v-model="email" placeholder="email">
                    <div class="cart_total_price">&#8358;{{ getTotalAmount }}</div>
                </div>
                <button class="cart_btn" @click="makepay">Checkout</button>
                <Payment :amount="amount" :email="email" v-if="getPaymentGateStatus"/>
            </div>
        </div>
        
    </section>
    <!-- Cart Section Ends Here -->

    
    <!-- Contact Section Starts Here -->
    <ContactSegment/>

    <!-- Contact Section Ends -->

    <!-- Behind The Scene Section Starts Here -->
    <BehindTheScenes/>
</template>

<script>
import Payment from '../components/Payment.vue'
import BehindTheScenes from '../components/BehindTheScenes.vue'
import ContactSegment from '../components/ContactSegment.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name : 'Cart',
    data(){
        return {
            cartData : [],
            message : '',
            messageStatus : false,
            cartTotal : 0,
            email:'',
            amount: ''
            
        }
    },
    
    components : {
        Navbar, BehindTheScenes, ContactSegment, Payment
    },
    created(){
        this.getCart()
    },
    computed : {
        getPaymentGateStatus(){
            return this.$store.state.paymentGate
        },
        getTotalAmount(){
            this.amount = this.cartData.reduce((a,b) => a+b.price, 0)
            return this.cartData.reduce((a,b) => a+b.price, 0)
        }
    },
    methods : {
        makepay(){
            this.$store.state.paymentGate = true
        },
        
        getCart(){
            if(localStorage.getItem('cart')){
                this.cartData = localStorage.getItem('cart')
                this.cartData = JSON.parse(this.cartData)
                console.log(this.cartData);
            }else{
                this.messageStatus = true
                this.message = 'There is no item in your cart'
            }
        },
        removeFromCart(prod){
            if(localStorage.getItem('cart')){
                this.cartData = localStorage.getItem('cart')
                this.cartData = JSON.parse(this.cartData)
                const productIndex = this.cartData.findIndex((p)=> p._id === prod._id)
                if(productIndex !== -1){
                    this.cartData.splice(productIndex, 1)
                    localStorage.setItem('cart', JSON.stringify(this.cartData))
                    this.$store.dispatch('getCartTotal')
                    this.getCart()
                }else{
                    console.log('Product is not in cart');
                }
            }
        },
        
    }
}
</script>