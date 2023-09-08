<template>
  <q-layout view="hhh Lpr fff">
    <q-header reveal class="header">
      <q-tabs no-caps class="text-white">
        <q-route-tab :to="{ name: 'HomePage' }" exact replace label="HOME" />
        <q-route-tab label="ABOUT US" />
        <q-route-tab :to="{ name: 'ClientsPage' }" label="CLIENTS" />
        <q-route-tab :to="{ name: 'ContactUsPage' }" label="CONTACT US" />
        <q-route-tab label="BLOG" />
      </q-tabs>
      <q-toolbar></q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer row">
      <div class="col-3 icon"></div>
      <div class="col-9 footer-left">
        <div class="row">
          <div class="col-6">
            <p
              v-for="item in footerLinkItems"
              :key="item"
              class="footer-text link"
            >
              {{ item }}
            </p>
          </div>
          <div class="col-6 footer-text">
            <p>Goldgrade Dev Ltd. ®</p>
            <p class="q-pt-lg">34 Ijaiye Road, <br />Ogba Ikeja, Lagos</p>

            <div class="q-pt-lg">
              <p>
                Telephone: <br />
                234 805 518 0613
              </p>
            </div>

            <div class="q-pt-lg">
              <p>E-mail</p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
const footerLinkItems = ['Home', 'About Us', 'Clients', 'Contact Us', 'Blog'];
</script>

<style>
.header {
  background-color: transparent;
  font-family: Neurial;
}

.section {
  height: auto;
  font-family: Neurial;
  color: white;
}

.footer {
  height: 90vh;
  border-top: #c19f62 1px solid;
  background-color: #681c26;
}

.footer-left {
  padding: 5% 8%;
}

.icon {
  border-right: 1px #c19f62 solid;
}

.footer-text {
  font-size: calc(16px + 0.390625vw);
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
</style>
