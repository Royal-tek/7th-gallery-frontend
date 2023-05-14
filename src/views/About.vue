<template>
    <Navbar/>
    <section class="about_showcase">
        <section class="about__content">
            <div class="contents left__content">
                <div class="owner_image" data-aos="fade-up" data-aos-duration="3000">

                </div>
            </div>
            <div class="contents right__content" data-aos="zoom-in-right" data-aos-duration="3000">
                <div class="right_text_content">
                    <h1>About Lisa</h1>
                </div>
            </div>
        </section>
    </section>  


    <section class="about_quote">
        <div class="section_title" data-aos="zoom-in-right">
            <h3>About Lisa Chike-Obi</h3>
            <p>A brief of who she is and why she does what she does </p>
            <div class="horizontal_rule">
                <img src="/assets/images/heartt.svg" alt="">
            </div>
        </div>

        <div class="about_quote_content">
            <p data-aos="zoom-in-right">
                I am a landscape artist from Nigeria that focuses on traditional art in acrylics. Elements of nature and love are the main themes in my work because they are universally relatable and infinitely compelling.
            </p>
            <p data-aos="zoom-in-left">
                My skills are a gift from God and I am eternally grateful that I can spread love and peace through the works of my hand.
            </p>
        </div>
    </section>

    <ContactSegment/>
    <BehindTheScenes/>

</template>

<script>
import BehindTheScenes from '../components/BehindTheScenes.vue';
import ContactSegment from '../components/ContactSegment.vue';
import Navbar from '../components/Navbar.vue'
import BehindTheScenesVue from '../components/BehindTheScenes.vue'
export default {
  name : 'About',
  components : {
    Navbar, BehindTheScenes, ContactSegment
  }
}
</script>
