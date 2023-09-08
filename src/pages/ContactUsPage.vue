<template>
  <q-page class="section">
    <section class="contact-form row">
      <div class="col-md-8">
        <div class="hero-text col-8">
          <h2 id="hero">Contact Us</h2>
          <p>
            Thank you for reaching out. We’ll make sure that our team receives
            your message!
          </p>
        </div>
        <q-form class="col-md-8 form">
          <div class="row justify-between q-pb-lg">
            <div class="col-5">
              <p class="title">Name</p>
              <q-input
                square
                outlined
                v-model="clientName"
                color="white"
                class="input"
                placeholder="Theophilus Ade-ojo"
              />
            </div>
            <div class="col-5">
              <p class="title">Email</p>
              <q-input
                square
                outlined
                v-model="clientEmail"
                color="white"
                placeholder="theophilus@email.com"
              />
            </div>
          </div>
          <div class="col q-pb-lg">
            <p class="title">Phone Number</p>
            <q-input
              square
              outlined
              v-model="clientEmail"
              color="white"
              placeholder="+X XXX XXX XXX"
            />
          </div>

          <div class="col q-pb-lg">
            <p class="title">Topic</p>
            <q-select
              square
              outlined
              v-model="messageTopicSelected"
              color="white"
              :options="messageTopic"
            />
          </div>

          <div class="col q-pb-lg">
            <p class="title">Your Message</p>
            <q-input
              square
              outlined
              type="textarea"
              v-model="message"
              color="white"
            />
          </div>

          <q-btn
            icon="arrow_forward"
            flat
            square
            no-caps
            label="Send Message"
            style="
              color: #681c26;
              background-color: white;
              height: 60px;
              width: 30%;
            "
          />
        </q-form>
      </div>
      <div class="col-md-4"></div>
    </section>
    <section class="location row items-center">
      <div class="col-2" style="text-align: center; font-size: 20px">
        OUR OFFICE
      </div>
      <div class="col-8 location-slide">
        <q-img />
        <div>
          <p>Ikeja, Lagos</p>
          <p>GoldGrade Development Limited</p>
          <p>34 Ijaiye Road, Ogba</p>
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
const messageTopic = ['General Inquiries', 'Sales', 'Others'];
const messageTopicSelected = ref(null);
const message = ref('');
</script>

<style scoped>
.contact-form {
  padding: 2rem 8%;
  background-color: #681c26;
}

.hero-text {
  padding: 5% 0;
  border-bottom: 1px solid #c19f62;
}

#hero {
  font-size: calc(70px + 0.390625vw);
  font-weight: 500;
  padding: 25px 0;
}

.hero-text p {
  font-size: calc(0.3125vw + 13.5px);
}

.form {
  padding: 2rem 0;
}

.title {
  font-size: calc(0.3125vw + 13.5px);
}
.location {
  display: flex;
  gap: 3rem;
  padding: 2rem 5%;
  background-color: white;
  color: black;
}

.location-slide {
  display: flex;
  align-items: center;
}
</style>
