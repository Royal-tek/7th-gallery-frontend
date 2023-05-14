<template>
 
    <!-- SHOWCASE CONTENT BEGINS HERE -->
    <section class="showcase_content">
        
        <Navbar/>
        <div class="showcase_text" data-aos="zoom-in-right">
            <p>The Originals c<span class="white_text">olle</span>ction</p>
        </div>

    </section>
    
    <!-- SHOWCASE CONTENT ENDS HERE -->

        <!-- Gallery Section Starts Here -->
        <section class="gallery">
        <div class="section_title" data-aos="zoom-in-right">
            <h3>The wonders of her mind</h3>
            <p>Paintings and images crafted by emotions and inspirations from the divine one</p>
            <div class="horizontal_rule">
                <img src="/assets/images/heartt.svg" alt="">
            </div>
        </div>

        <div class="gallery_grid">
        
            <div class="grid_image short_length" data-aos="fade-up" v-for="product in products" :key="product.id">
                <div class="main_image" :style="'background-image: url(' + product.images[0] +')'">
                    
                    <div class="cart">
                        <a style="cursor: pointer;" @click.prevent="addToCart(product)"> Add to Cart <i class="fa-solid fa-cart-plus"></i></a>
                        <router-link :to="`/original/${product._id}`">View Product <i class="fa-solid fa-eye"></i></router-link>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title">
                        “{{product.name}}”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price"><!-- &#8358;{{ product.realImage.price }} --></p>
                </div>
            </div>

        </div>
    
    </section>

    <!-- Gallery Section Ends Here -->

    <ContactSegment/>

    <BehindTheScenes/>



</template>

<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import ContactSegment from '../components/ContactSegment.vue'
import BehindTheScenes from '../components/BehindTheScenes.vue'
export default {
name: 'Originals',
components: {
    Navbar, ContactSegment, BehindTheScenes
},
data(){
    return{
        
        products : []
    }
},
created(){
    this.getAllProducts()
},
methods : {
    addToCart(prod){
            this.$store.dispatch('addToCart', prod)
        },
    
    async getAllProducts(){
        const products = await axios.get('http://localhost:7000/api/product/get-all-products')
        console.log(products.data);
        this.products = products.data
    }
}

}
</script>
