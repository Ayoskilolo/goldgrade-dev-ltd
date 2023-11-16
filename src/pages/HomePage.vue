<template>
  <q-page class="home section">
    <section class="section1 row self-center">
      <div class="col-md-10 offset-md-1 col-sm-12 col-xs-12">
        <h2 class="hero">Enhancing performance</h2>

        <div style="border-top: 1px solid #c19f62; font-size: 20px">
          <p>
            Goldgrade Development is in the business of enhancing performance at
            organisational, team and individual levels.
          </p>
        </div>
      </div>
    </section>
    <section class="section2 col">
      <div class="row headers">
        <h5>OUR SERVICES</h5>
        <h3>Learn About Our Practice Areas</h3>
      </div>
      <div class="row" style="display: flex; align-items: end">
        <div
          class="offset-md-3 services row q-pt-lg"
          style="border-top: 1px solid black; width: 100%; font-size: 20px"
        >
          <div class="col-md-6 col-sm-12">
            <p>Business Process Development</p>
            <p>Employee indentureships</p>
            <p>Field Marketing Services</p>
            <p>Brand Strategy</p>
          </div>
          <div class="col-md-6 col-sm-12">
            <p>Marketing and Sales Assessments</p>
          </div>
        </div>
      </div>
    </section>
    <section class="values">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <span>Our Values</span>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.""
          </p>
        </div>
      </div>
      <q-linear-progress :value="progress" style="color: #c29e61" />
      <div class="row justify-between">
        <div class="col-md-3 col-sm-12">
          <span>A Value</span>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.""
          </p>
        </div>
        <div class="col-md-3 col-sm-12">
          <span>A Value</span>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.""
          </p>
        </div>
        <div class="col-md-3 col-sm-12">
          <span>A Value</span>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.""
          </p>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const progress = ref(0.01);
const buffer = ref(0.01);

let interval, bufferInterval;

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value >= 1) {
      progress.value = 0.01;
      return;
    }

    progress.value = Math.min(1, buffer.value, progress.value + 0.1);
  }, 700 + Math.random() * 1000);

  bufferInterval = setInterval(() => {
    if (buffer.value < 1) {
      buffer.value = Math.min(1, buffer.value + Math.random() * 0.2);
    }
  }, 700);
});

onBeforeUnmount(() => {
  clearInterval(interval);
  clearInterval(bufferInterval);
});
</script>

<style scoped>
.section1 {
  padding: 2rem 8%;
  height: 46vh;
}

.section2 {
  padding: 5rem 8% 2rem;
  height: 80vh;
  color: black;
  background-color: #fffbff;
  display: flex;
  flex-direction: column;
}

.headers {
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: column;
}

.headers h5 {
  font-size: 18px;
  margin-bottom: 1rem;
  font-family: NeurialLight;
}

.headers h3 {
  margin: 0;
  font-family: Neurial;
}

.services p {
  margin: 0;
  margin-left: 0px;
  padding: 1rem;
  color: #681c26;
  cursor: pointer;
  position: relative;
  width: max-content;
}

.services p:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 0.4rem;
  bottom: 0;
  left: 0;
  background-color: #c29e61;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  border-radius: 1px;
}

.services p:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.values {
  padding: 4rem 8%;
  background-color: #681c26;
  font-size: 40px;
  height: 80vh;
  font-family: Neurial;
}

.values .row {
  height: 50%;
}

.values .col {
  text-align: left;
}

.values p {
  font-size: 15px;
}

@media only screen and (max-width: 1024px) {
  .headers {
    width: 60%;
  }

  .values {
    height: 85vh;
  }

  .values .row {
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  .headers {
    width: 80%;
  }

  .values {
    font-size: 30px;
    height: auto;
  }
}

@media only screen and (max-width: 400px) {
  .hero {
    font-size: calc(50px);
    padding-right: 0;
  }

  .headers {
    width: 100%;
  }
}
</style>
