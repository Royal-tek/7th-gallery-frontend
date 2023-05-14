<template>
     <!-- Navbar Starts Here -->
     <nav class="showcase_nav">
            <div class="mobile_branding small_screen_display">
                <h3>The7thcreator</h3>
            </div>
            <ul class="nav_items">
                <li class="nav_item"><router-link :to="{name: 'Originals'}">Original</router-link></li>
                <li class="nav_item"><router-link :to="{name: 'Print'}">Prints</router-link></li>
                <li class="nav_item nav_branding"><a href="/">The7thcreator</a></li>
                <li class="nav_item"><router-link :to="{name: 'About'}">About</router-link></li>
                <li class="nav_item"><router-link :to="{name: 'Cart'}"><img src="/assets/images/cart.svg"><sup>{{  cartTotal }}</sup></router-link></li>
                
            </ul>
            <div class="hamburger small_screen_display" style="cursor:pointer">
                <i class="fa-sharp fa-solid fa-bars"></i>
            </div>
        </nav>
        
        <!-- Navbar Ends Here -->
</template>

<script>
export default {
    name : 'Navbar',
    data (){
        return{
            cartData : [],
        }
    },
    
    computed : {
        cartTotal(){
            return this.$store.state.cartTotal
        }
    },
    
}
</script>