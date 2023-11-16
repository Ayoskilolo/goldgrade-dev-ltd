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
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <p class="title">Name</p>
              <q-input
                square
                outlined
                v-model="clientName"
                color="white"
                class="input"
                :input-style="{ color: 'white', opacity: 1 }"
                placeholder="Theophilus Ade-ojo"
              />
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 email">
              <p class="title">Email</p>
              <q-input
                square
                outlined
                v-model="clientEmail"
                class="input"
                color="white"
                :input-style="{ color: 'white', opacity: 1 }"
                placeholder="theophilus@email.com"
              />
            </div>
          </div>
          <div class="col q-pb-lg">
            <p class="title">Phone Number</p>
            <q-input
              square
              outlined
              :input-style="{ color: 'white', opacity: 1 }"
              v-model="clientEmail"
              class="input"
              color="white"
              placeholder="+X XXX XXX XXX"
            />
          </div>

          <div class="col q-pb-lg">
            <p class="title">Topic</p>
            <q-select
              square
              outlined
              :input-style="{ color: 'white', opacity: 1 }"
              v-model="messageTopicSelected"
              color="white"
              class="input"
              :options="messageTopic"
            />
          </div>
          <div class="col q-pb-lg">
            <p class="title">Your Message</p>
            <q-input
              square
              outlined
              type="textarea"
              class="input"
              v-model="message"
              :input-style="{ color: 'white', opacity: 1 }"
              color="white"
            />
          </div>

          <q-btn
            icon="arrow_forward"
            flat
            square
            no-caps
            label="Send Message"
            class="sendButton"
          />
        </q-form>
      </div>
      <div class="col-md-4"></div>
    </section>
    <section class="location row items-center">
      <div style="text-align: center; font-size: 20px">OUR OFFICE</div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.172307922739!2d3.3332006000000005!3d6.625508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91641b3182c7%3A0xab52d4406f81671a!2s34%20Ijaiye%20Rd%2C%20beside%20Stanbic%20Ibtc%20Bank%2C%20Ogba%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697143814281!5m2!1sen!2sng"
          width="300"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <p>Ikeja, Lagos</p>
        <p>GoldGrade Development Limited</p>
        <p>34 Ijaiye Road, Ogba</p>
        <p><q-icon name="call" /> 234 805 518 0613</p>
        <div>
          <q-icon name="location" />
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
  color: white;
}

.input {
  color: white;
  border: 1px solid white;
}

.input::placeholder {
  color: white;
}

.title {
  font-size: calc(0.3125vw + 13.5px);
}

.sendButton {
  color: #681c26;
  background-color: white;
  height: 60px;
  width: 30%;
}

.location {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem 5%;
  background-color: white;
  color: black;
}

@media only screen and (max-width: 600px) {
  .email {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 700px) {
  .sendButton {
    width: 65%;
  }

  #hero {
    font-size: calc(40px + 0.390625vw);
    padding: 0;
  }
}
</style>
