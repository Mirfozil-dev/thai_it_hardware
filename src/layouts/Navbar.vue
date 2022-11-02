<template>
  <div class="navbar_wrapper">
    <div class="container h-100">
      <div class="d-flex align-items-center h-100 justify-content-between">
        <div class="d-flex h-100 align-items-center">
          <router-link :to="{ name: 'Main' }">
            <img class="logo" src="../assets/images/logo.svg" alt="">
          </router-link>
          <div class="navigation">
            <router-link :to="{ name: 'About' }">About Thai IT</router-link>
            <router-link :to="{ name: 'Infrastructure' }">IT infrastructure</router-link>
            <router-link :to="{ name: 'Components' }">Electronic Components</router-link>
            <router-link :to="{ name: 'Services' }">Professional Services</router-link>
            <router-link :to="{ name: 'Contacts' }">Contact Us</router-link>
          </div>
        </div>
        <div class="contacts d-flex flex-column align-items-end justify-content-center">
          <a href="tel:0928400535" class="d-flex align-items-center">
            <img src="../assets/images/phone.svg" alt="">
            092-840-05-35
          </a>
          <a href="mailto:d.makh@thai-it-hardware.co.th" class="d-flex align-items-center">
            <img src="../assets/images/email.svg" alt="">
            d.makh@thai-it-hardware.co.th
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar_wrapper {
  height: 90px;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.navbar_wrapper .logo {
  width: 247px;
}

.navbar_wrapper .navigation {
  display: inline-flex;
  gap: 20px;
  margin-left: 58px;
}

.navbar_wrapper .navigation a, .navbar_wrapper .contacts a {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
}

.navbar_wrapper .contacts a {
  font-size: 10px;
}

.navbar_wrapper .contacts img {
  margin: 0 12px 2px 0;
}
</style>
