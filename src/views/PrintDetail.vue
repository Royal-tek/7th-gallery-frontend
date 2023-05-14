<template>
    <Navbar/>
   <!-- Orignal Prints Starts Here     -->
   <section class="product_details_section" v-if="product"> 
        <div class="product_title">
            <router-link :to="{name : 'Home'}" >Home</router-link>
            <span><img src="/assets/images/tag.svg"></span>
            <a>{{ product.originalCopy.name }}</a>
        </div>
        <div class="product_details">
            <div class="product_image">
                <div class="main_product">
                    <img :src="product.originalCopy.images[0]" />
                </div>
                <div class="product_preview">
                    <div class="product_preview_slot" v-for="(image, index) in product.originalCopy.images.slice(1)" :key="index">
                        <img :src="image" />
                    </div>
                    
                    
                </div>
            </div>
            <div class="product_description">
                <div class="product_topic">
                    <p>The Pains of my heart</p>
                    <small>Original</small>
                </div>
                <div class="main_description">
                    <p>
                        "{{ product.originalCopy.description }}"
                    </p>
                    <div class="description_price">
                        <!-- <p class="price">${{ product. }}</p> -->
                        <a href="#">Take me to the original instead</a>
                    </div>
                    <div class="product_select_option">
                        <div class="select_option">
                            <label class="select_label">Select size</label>
                            <select v-model="selectedDimension" v-on:change="updatePrice">
                                <option value="">Select Dimension</option>
                                <option v-for="dim in product.version" :key="dim._id" :value="dim._id">{{ dim.dimensions.width }} x {{ dim.dimensions.height }}</option>
                                
                            </select>
                        </div>
                        <div class="select_option">
                            <label class="select_label">Quantity</label> 

                            <input type="number" placeholder="Quantity" v-model="selectedQuantity">
                            
                        </div>
                        <div class="select_option">
                            <label class="select_label">Price</label> 

                           <p v-if="updatePrice !== 0">{{ updatePrice }}</p>
                           <p v-else>Please input quantity</p>
                        </div>
                    </div>

                    <button @click="addToCart(product)">Add to Cart</button>
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
import Navbar from '../components/Navbar.vue';
import ContactSegment from '../components/ContactSegment.vue';
import BehindTheScenes from '../components/BehindTheScenes.vue';
export default {
    name : 'printDetail',
    data(){
        return{
            product : '',
            // selectedPrice : '',
            selectedDimension : '',
            selectedQuantity : ''
        }
    },
    created(){
        this.getProduct()
    },
    components : {
        Navbar, BehindTheScenes, ContactSegment
    },
    computed : {
        updatePrice(){
        const selectedDim = this.product.version.find((dim)=> dim._id === this.selectedDimension)
        if(selectedDim){
            return selectedDim.dimensions.price * this.selectedQuantity
        }else{
            return  null
        }
    }
    },
    methods : {
        async getProduct(){
            const prodId = this.$route.params.id
            const product = await axios.get(`http://localhost:7000/api/product/get-print-product/${prodId}`)
            this.product = product.data
            console.log(product);
        },
        addToCart(prod){
            const selectedDim = this.product.version.find((dim)=> dim._id === this.selectedDimension)
            if(selectedDim){
                const selectedProd = {
                    id : prod._id,
                    name : prod.originalCopy.name,
                    dimensions : selectedDim,
                    quantity : this.selectedQuantity,
                    images : prod.originalCopy.images,
                    version : 'Print',
                    price : selectedDim.dimensions.price * this.selectedQuantity,
                }
                this.$store.dispatch('addToCart', selectedProd)
            }else {
                console.log('Selected dimension not found');
            }
            
        }
        
    },
    
}
</script>