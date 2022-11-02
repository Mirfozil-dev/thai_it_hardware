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
          <a href="tel:0928400535" class="d-flex align-items-center text-end justify-content-end">
            <img src="../assets/images/phone.svg" alt="">
            <p class="m-0">
              092-840-05-35
            </p>
          </a>
          <a href="mailto:d.makh@thai-it-hardware.co.th" class="d-flex align-items-center text-end justify-content-end">
            <img src="../assets/images/email.svg" alt="">
            <p class="m-0">
              d.makh@thai-it-hardware.co.th
            </p>
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
  flex-wrap: wrap;
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

@media screen and (max-width: 1200px) {
  .navbar_wrapper .logo {
    width: 200px;
  }

  .navbar_wrapper .navigation {
    margin-left: 28px;
    gap: 15px;
  }

  .navbar_wrapper .contacts img {
    margin: 0 6px 2px 0;
  }
}

@media screen and (max-width: 992px) {
  .contacts {
    width: 120px;
  }
}

@media screen and (max-width: 768px) {
  .navbar_wrapper .logo {
    width: 150px;
  }

  .navbar_wrapper .navigation {
    margin-left: 15px;
    gap: 10px;
  }

  .navbar_wrapper .navigation a {
    font-size: 10px;
    line-height: 8px;
  }

  .navbar_wrapper .contacts a {
    font-size: 8px;
    line-height: 12px;
  }

  .navbar_wrapper .contacts img {
    width: 10px;
    margin: 0 2px 2px 0;
  }

  .contacts {
    width: 96px;
  }
}

@media screen and (max-width: 535px) {
  .navbar_wrapper .logo {
    width: 120px;
  }

  .navbar_wrapper .navigation a {
    font-size: 8px;
  }

  .navbar_wrapper .contacts a {
    font-size: 6px;
  }

  .navbar_wrapper .contacts img {
    width: 8px;
  }

  .contacts {
    width: 31%;
  }

  .navbar_wrapper .navigation {
    margin-left: 10px;
    gap: 5px;
  }
}

@media screen and (max-width: 446px) {
  .navbar_wrapper .logo {
    width: 100px;
  }

  .navbar_wrapper .navigation a {
    font-size: 7px;
  }

  .navbar_wrapper .contacts a {
    font-size: 5px;
    line-height: 8px;
  }

  .navbar_wrapper .contacts img {
    width: 7px;
  }
}
</style>
