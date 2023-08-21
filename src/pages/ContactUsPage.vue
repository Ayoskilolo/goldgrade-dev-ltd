<template>
  <q-page class="section">
    <section class="contact-form row">
      <div class="col-md-8">
        <div class="hero-text col-8">
          <p id="hero">Contact Us</p>
          <p>
            Thank you for reaching out. We’ll make sure that our team receives
            your message!
          </p>
        </div>
        <q-form class="col-md-8 form">
          <div class="row">
            <p>Name</p>
            <q-input v-model="clientName" />
            <p>Email</p>
            <q-input v-model="clientEmail" />
          </div>
          <p>Phone Number</p>
          <q-input v-model="clientEmail" />

          <p>Topic</p>
          <q-input v-model="messageTopic" />

          <p>Your Message</p>
          <q-input v-model="message" />

          <q-btn icon="arrow_forward" flat no-caps label="Send Message" />
        </q-form>
      </div>
      <div class="col-md-4"></div>
    </section>
    <section class="location row">
      <div class="col-2" style="text-align: center">Our Office</div>
      <div class="col-8 location-slide">
        <q-img />
        <div>
          <p>Ikeja Lagos</p>
          <p>GoldGrade Development Limited</p>
          <p>34 Ijaiye Road Ogba</p>
          <p><q-icon name="call" /> 234 805 518 0613</p>
          <div>
            <q-icon name="location" />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
//Vue Imports
import { ref } from 'vue';

const clientName = ref('');
const clientEmail = ref('');
const messageTopic = [];
const message = ref('');
</script>

<style scoped>
.contact-form {
  padding: 2rem 8%;
  background-color: #681c26;
}

.hero-text {
  padding: 10% 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

#hero {
  font-size: calc(70px + 0.390625vw);
  padding: 25px 0;
}

.hero-text p {
  font-size: calc(0.3125vw + 13.5px);
}

.form {
  padding: 2rem 0;
}

.location {
  display: flex;
  gap: 3rem;
  padding: 2rem 8%;
  background-color: white;
  color: black;
}

.location-slide {
  display: flex;
  align-items: center;
}
</style>
