<template>
        <header class="checkout_header">
        <a href="printables.html">The 7thcreator</a>
    </header>
    <section class="checkout_wrapper">
        <div class="checkout_section">
            <div class="payment_options">
                <div class="card email_section">
                    <h3>1. Your Email</h3>
                    <div class="email_field">
                        <div class="email_input">
                            <input type="email" placeholder="Email" />
                        </div>
    
                        <p>You’ll receive a receipt of order and notifications when placed</p>
                        <button class="primary_btn">Continue</button>
                    </div>
                </div>
                <div class="card basic_card">
                    <h3>2.</h3>
                    <h3>Your Delivery Address</h3>
                </div>
                <div class="card basic_card">
                    <h3>3.</h3>
                    <h3> Payment</h3>
                </div>
            </div>
            <div class="card payment_summary">
                <h3>Order Summary</h3>
                <div class="order_info">
                    <div class="order_image">
                        <img src="/assets/images/mosaic.svg" />
                    </div>
                    <div class="order_main_info">
                        <p class="order_name">The Pains of my heart</p>
                        <p class="order_quamtity">
                            Qty:<span class="qty">2</span>
                        </p>
                        <p class="order_price">$1500</p>
                        
                    </div>
                
                </div>
                    <div class="order_subtotal">
                        <p class="subtotal">Subtotal</p>
                        <p class="total_price">$1500</p>
                    </div>
                    <div class="order_total">
                        <p class="total">Total</p>
                        <p class="total_price">$1500</p>
                    </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name : 'CheckOut'
}
</script>