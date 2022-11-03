<template>
  <b-navbar toggleable="lg" class="navbar_wrapper">
    <div class="container">
      <router-link :to="{ name: 'Main' }">
        <img class="logo" src="../assets/images/logo.svg" alt="">
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="bg-white" style="z-index: 2;">
        <NavLinks />
        <ContactsSection />
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import NavLinks from '../components/NavLinks.vue'
import ContactsSection from '../components/ContactsSection.vue'

export default {
  name: 'Navbar',
  components: { ContactsSection, NavLinks }
}
</script>

<style scoped>
.navbar_wrapper {
  height: 90px;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1200px) {
  .navbar_wrapper .logo {
    width: 170px;
  }
}

@media screen and (max-width: 992px) {
  .navbar-collapse.collapse {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 42px;
  }
}
</style>

<style>

.navbar-collapse.collapse.show .contacts {
  width: 100% !important;
  padding: 0 28px 20px 0;
}
</style>
