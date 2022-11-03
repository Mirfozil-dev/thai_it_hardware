<template>
  <b-navbar-nav class="contacts d-flex flex-column align-items-end justify-content-center">
    <a href="tel:0928400535" class="d-flex align-items-center text-end justify-content-end">
      <img src="../assets/images/phone.svg" alt="">
      <p class="m-0">
        092-840-05-35
      </p>
    </a>
    <a href="mailto:d.makh@thai-it-hardware.co.th"
       class="d-flex align-items-center text-end justify-content-end">
      <img src="../assets/images/email.svg" alt="">
      <p class="m-0">
        d.makh@thai-it-hardware.co.th
      </p>
    </a>
  </b-navbar-nav>
</template>

<script>
export default {
  name: 'ContactsSection'
}
</script>

<style scoped>
.contacts a {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;
  white-space: nowrap;
}

.contacts {
  margin-left: auto;
}

.contacts img {
  margin: 0 12px 2px 0;
}

@media screen and (max-width: 1200px) {

  .contacts img {
    margin: 0 6px 2px 0;
  }

  .contacts a {
    font-size: 9px;
  }
}

@media screen and (max-width: 768px) {
  .contacts a {
    font-size: 8px;
    line-height: 10px;
  }

  .contacts img {
    width: 10px;
    margin: 0 6px 2px 0;
  }
}

</style>
