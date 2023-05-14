<template>
    <Navbar/>
        <!-- Orignal Prints Starts Here     -->
        <section class="product_details_section"> 
        <div class="product_title">
            <router-link to="/" >Home</router-link>
            <span><img src="/assets/images/tag.svg"></span>
            <a>"{{ product.name }}"</a>
        </div>
        <div class="product_details">
            <div class="product_image">
                <div class="main_product">
                    <img :src="product.images[0]" />
                </div>
            <div class="product_preview">
                <div class="product_preview_slot" v-for="(image, index) in product.images.slice(1)" :key="index">
                    <img :src="image" />
                </div>              
            </div>
            </div>
            <div class="product_description">
                <div class="product_topic">
                    <p>{{  product.name }}</p>
                    <small>Original</small>
                </div>
                <div class="main_description">
                    <p>
                        "{{ product.description }}"
                    </p>
                    <div class="description_price">
                        <p class="price">&#8358;{{ product.price }}</p>
                        <a href="printwork.html">Take me to the print instead</a>
                    </div>
                    <p class="sm-p">Size: {{ product.dimensions.width }} X {{ product.dimensions.height }}</p>

                    <button style="cursor: pointer;" @click="addToCart(product)">Add to Cart</button>
                    <p style="margin: 15px 0; color: red;" v-if="messageStatus">{{ message }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Orignal Prints Ends Here     -->

    <!-- Contact Section Starts Here -->
    <ContactSegment/>

    <!-- Contact Section Ends -->

    <!-- Behind The Scene Section Starts Here -->
    <BehindTheScenes/>
</template>

<script>
import axios from 'axios'
import ContactSegment from '../components/ContactSegment.vue';
import BehindTheScenes from '../components/BehindTheScenes.vue';
import Navbar from '../components/Navbar.vue';
export default {
    name : 'OriginalDetail',
    data(){
        return{
            product : '',
            cartData : [],
            messageStatus : false,
            message : ''
        }
    },
    components : {
        Navbar, ContactSegment, BehindTheScenes
    },
    created () {
        this.getProduct()
    },
    methods : {
        addToCart(prod){
            this.$store.dispatch('addToCart', prod)
        },
        async getProduct(){
            const prodId = this.$route.params.id
            const product = await axios.get(`http://localhost:7000/api/product/get-product/${prodId}`)
            this.product = product.data
            console.log(product);
        }
    }
}
</script>