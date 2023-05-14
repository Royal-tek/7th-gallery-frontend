<template>
    <div class="payment">
        <div class="close-btn">
            <span @click="$store.state.paymentGate = false">
              &times;
          </span>
        </div>
        <div class="trans">
                <paystack
                buttonClass="btn"
                buttonText="Make Payment"
                :publicKey="publicKey"
                :email="email"
                :amount="amount"
                :reference="reference"
                :onSuccess="callBack"
                :onCanel="onCancelledPayment">
                </paystack>
        </div>
    </div>
    
</template>

<script>
import paystack from "vue3-paystack";
import axios from 'axios'

export default {
    name : 'Payment',
    components : {
        paystack
    },
    props:['amount','email'],
    data(){
        return {
            publicKey: "pk_test_29bd6557e3d18ca7a57754ce277c776c82f059bf",
            email: this.email, 
            amount: this.amount * 100,
        }
    },
    computed : {
        reference(){
            let text = ''
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for( let i=0; i < 10; i++ ){
                text += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            return text
        }
    },
    methods:{
        callBack(){
            console.log(this.reference);
            axios.get(`http://localhost:7000/api/product/verify/payment/${this.reference}`)
            .then((res)=>{
                
                alert('working')
                console.log(res);
                console.log('working');
                this.$store.state.paymentGate = false
            })
            .catch((err)=>{
                console.log('error',err);
            })
        },
        onCancelledPayment(){
            this.$store.state.paymentGate = false
        }
    }
}
</script>

<style lang="scss" scoped>
.payment {
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.7);
    }
    .trans {
        display: flex;
        justify-content: center;
        align-items:center;
        height: 100%;
        flex-direction: column;
    }
    .close-btn {
        font-size: 35px;
        color: #fff;
        text-align: right;
        position: absolute;
        right: 30px;
        top: 0;
    }
    .close-btn span {
        cursor: pointer;
    }
    
    .btn {
        padding: 10px 20px;
        border-radius: 3px;
        border: none;
        outline: none;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        background-color: #C16E02;
        color: #fff;
    }

</style>