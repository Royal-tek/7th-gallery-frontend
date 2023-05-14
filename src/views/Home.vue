<template>
    <section class="parallax">
      <Navbar/>
      <div class="text_container">
            <div class="parallax_text">
                <h3>
                    “On the 7th day God rested but created a woman to continue his creative wonders”
                </h3>
            </div>
        </div>
        
        <img class="woman" src="/assets/images/woman.svg" />
    </section>
    <section class="main_section">
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
          
            <div class="grid_image short_length" data-aos="fade-up" data-aos-duration="3000">
                <div class="main_image">
                    
                    <div class="cart">
                        <a href="#"> Add to Cart <i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title">
                        “The cloudiness mind of nature”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price">
                        $50-60
                    </p>
                </div>
            </div>
          
            <div class="grid_image short_length" data-aos="fade-up" data-aos-duration="3000">
                <div class="main_image">
                    
                    <div class="cart">
                        <a href="#"> Add to Cart <i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title">
                        “The cloudiness mind of nature”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price">
                        $50-60
                    </p>
                </div>
            </div>
          
            <div class="grid_image short_length" data-aos="fade-up" data-aos-duration="3000">
                <div class="main_image">
                    
                    <div class="cart">
                        <a href="#"> Add to Cart <i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title">
                        “The cloudiness mind of nature”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price">
                        $50-60
                    </p>
                </div>
            </div>
          
            <div class="grid_image short_length" data-aos="fade-up" data-aos-duration="3000">
                <div class="main_image">
                    
                    <div class="cart">
                        <a href="#"> Add to Cart <i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                </div>
                
                <div class="product_info">
                    <p class="image_title">
                        “The cloudiness mind of nature”
                    </p>
                    <div class="info_border">
                        <img src="/assets/images/line.svg" />
                    </div>
                    <p class="image_price">
                        $50-60
                    </p>
                </div>
            </div>
         
        
           
            
            
        </div>
    
    </section>

    <!-- Gallery Section Ends Here -->
    <section class="owners_identity">
        <div class="section_title" data-aos="zoom-in-right">
            <h3>The 7th creator</h3>
            <p>The mind behind the creative spectacles</p>
            <div class="horizontal_rule">
                <img src="/assets/images/heartt.svg" alt="">
            </div>
        </div>
        <section class="owners_info">
            <div class="owner_image" data-aos="zoom-in-left">
                <div class="main_owner_image">
                  
                </div>
              
            </div>
            <div class="owner_quote" data-aos="zoom-in-right"> 
                <p class="quote_header">Welcome to the Studio</p>
                <p class="quote_content">
                    I’m Lisa Chike-Obi, a Nigerian visual artist who focuses mainly on landscape art and abstract impressionist painter
                </p>
                <p class="quote_content">
                    I enjoy painting because it brings me peace and helps me tell my story. I am open to freelance and collaborative projects.
                </p>
                <button class="quote_btn">
                  <router-link style="color: black;" to="/about">Learn more about me</router-link>
                </button>
            </div>
        </section>

    </section>
        <!-- Contact Section Starts Here -->
        <Contact/>
        <!-- Contact Section Ends -->

         <!-- Behind The Scene Section Starts Here -->
            <BehindTheScenes/>
         <!-- Behind The Scene Section Ends Here -->

          
    </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import ContactSegment from '../components/ContactSegment.vue';
import BehindTheScenes from '../components/BehindTheScenes.vue';
export default {
  name: 'Home',
  components: {
    Navbar, ContactSegment, BehindTheScenes
  }
}
</script>
