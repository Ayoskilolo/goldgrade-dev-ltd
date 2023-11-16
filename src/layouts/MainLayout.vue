<template>
  <q-layout view="hhh Lpr fff">
    <q-header reveal class="header">
      <q-tabs no-caps class="text-white">
        <q-route-tab :to="{ name: 'HomePage' }" exact replace label="HOME" />
        <q-route-tab :to="{ name: 'AboutUsPage' }" label="ABOUT US" />
        <q-route-tab :to="{ name: 'ClientsPage' }" label="CLIENTS" />
        <q-route-tab :to="{ name: 'ContactUsPage' }" label="CONTACT US" />
        <q-route-tab label="BLOG" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer row">
      <div class="col-md-3 col-sm-12 col-xs-12 icon items-center">
        <q-img src="/goldgrade.png" spinner-color="white" width="100px" />
        <span> Gold<span style="color: #c19f62">Grade</span></span>
        <span>Development Limited</span>
      </div>
      <div class="col-md-9 col-sm-12 col-xs-12 footer-left">
        <div class="row">
          <div class="col-md-6 col-sm-12 links">
            <p
              v-for="item in footerLinkItems"
              :key="item"
              class="footer-text link"
            >
              {{ item }}
            </p>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 footer-text">
            <p>Goldgrade Dev Ltd. ®</p>
            <p>34 Ijaiye Road, <br />Ogba Ikeja, Lagos</p>

            <div>
              <p>
                Telephone: <br />
                <span style="font-size: 15px; color: #c19f62"
                  >+234 805 518 0613</span
                >
              </p>
            </div>

            <div>
              <p>
                E-mail: <br />
                <a
                  href="mailto:enquires@goldgradedevelopment.com"
                  style="text-decoration: none; font-size: 15px; color: #c19f62"
                >
                  enquires@goldgradedevelopment.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row cc" style="font-size: calc(10px + 0.390625vw)">
          <p>©{{ year }} GoldGrade Development Group.</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
const footerLinkItems = ['Home', 'About Us', 'Clients', 'Contact Us', 'Blog'];

const d = new Date();
const year = d.getFullYear();
</script>

<style>
.header {
  background-color: #681c26;
  font-family: Neurial;
}

.section {
  height: auto;
  font-family: Neurial;
  color: white;
}

.footer {
  height: 80vh;
  border-top: #c19f62 1px solid;
  background-color: #681c26;
  font-family: NeurialLight;
}

.footer-left {
  padding: 5% 8%;
}

.icon {
  border-right: 1px #c19f62 solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 6rem;
}

.icon span {
  font-size: calc(14px + 0.390625vw);
}

.footer-text {
  font-size: calc(16px + 0.390625vw);
  cursor: pointer;
}

/* .cc {
  position: absolute;
  bottom: 0;
  padding: 4rem;
  padding-left: 0;
  width: 60%;
  border-top: 1px solid #c19f62;
} */

.cc {
  padding: 1rem;
  padding-left: 0;
  border-top: 1px solid #c19f62;
}

.link:hover {
  filter: brightness(80%);
}

body {
  background-color: #681c26;
}

p {
  font-family: NeurialLight;
}

input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

@media only screen and (max-width: 1024px) {
  .icon {
    border-bottom: 1px #c19f62 solid;
    border-right: 0px;
  }

  .footer-left {
    padding: 1rem 2rem;
  }

  .links {
    margin-bottom: 4rem;
  }

  .link {
    margin: 0.5rem 0;
  }

  .footer-text {
  }
}
</style>
