<template>
  <q-layout view="hhh Lpr fff">
    <q-header reveal class="header">
      <q-tabs no-caps class="text-black">
        <q-route-tab :to="{ name: 'IndexPage' }" exact replace label="Home" />
        <q-route-tab label="About Us" />
        <q-route-tab label="Clients" />
        <q-route-tab :to="{ name: 'ContactUsPage' }" label="Contact Us" />
        <q-route-tab label="Blog" />
      </q-tabs>
      <q-toolbar></q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer"></q-footer>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style>
.header {
  background-color: transparent;
  font-family: Neurial;
}

.section {
  height: auto;
  font-family: Neurial;
  color: white;
  background-color: #681c26;
}

.footer {
  height: 90vh;
  background-color: #681c26;
}
</style>
