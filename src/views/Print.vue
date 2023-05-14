<template>
        <!-- SHOWCASE CONTENT BEGINS HERE -->
        <section class="showcase_content">
        <!-- Navbar Starts Here -->
        <Navbar/>
        
        <!-- Navbar Ends Here --> 

        <div class="showcase_text" data-aos="zoom-in-right">
            <p>The Print c<span class="white_text">olle</span>ction</p>
        </div>

    </section>
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
        
            <div class="grid_image short_length" data-aos="fade-up" v-for="product in products" :key="product._id">
                <div class="main_image" :style="'background-image: url(' + product.originalCopy.images[0] +')'">
                    
                    <div class="cart">
                        <router-link :to="`/print/${product._id}`">View Product  <i class="fa-solid fa-eye"></i></router-link>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title" style="text-transform: capitalize;">
                        “{{product.originalCopy.name}}”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price">
        {{
          product.version.length === 1
            ? product.version[0].price
            : product.version.length > 1
              ? product.version
                  .map(version => version.dimensions.price)
                  .sort((a, b) => b - a)
                  .join( ' - ')
                
              : 'N/A'
        }}
      </p>
                </div>
            </div>
            



        </div>
    
    </section>

    <!-- Gallery Section Ends Here -->

    <ContactSegment/>
    <BehindTheScenes/>


</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import ContactSegment from '../components/ContactSegment.vue';
import BehindTheScenes from '../components/BehindTheScenes.vue';
export default {
name: 'Prints',
components: {
    Navbar, ContactSegment, BehindTheScenes
},
data(){
    return { 
        products : []
    }
},
created(){
    this.getAllProducts()
},
methods : {
    async getAllProducts(){
        const products = await axios.get('http://localhost:7000/api/product/get-all-print-products')
        console.log(products.data);
        this.products = products.data
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
}
}
</script>
