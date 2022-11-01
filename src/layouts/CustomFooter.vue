<template>
  <div class="footer_wrapper">
    <div class="container h-100">
      <div class="d-flex align-items-center h-100 justify-content-between">
        <div class="footer_body d-flex align-items-center h-100">
          <img class="logo" src="../assets/images/logo.svg" alt="">
          <p>
            Thai IT equipment. All rights reserved.
          </p>
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
  name: 'Footer'
}
</script>

<style scoped>
.footer_wrapper {
  border-top: #D9D9D9 1px solid;
  height: 120px;
}

.footer_wrapper .logo {
  width: 247px;
}

.footer_body p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #969696;
  margin: 0 0 0 30px;
}

.footer_wrapper .contacts a {
  color: #333333;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
}

.footer_wrapper .contacts a {
  font-size: 10px;
}

.footer_wrapper .contacts img {
  margin: 0 12px 2px 0;
}
</style>
