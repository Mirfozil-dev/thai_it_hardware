<template>
  <div class="container">
    <div class="contact_blocks">
      <div class="w-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905609.5993273803!2d99.39440532511728!3d13.460369172022054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42fb361e712de0e7!2zMTLCsDU0JzE4LjQiTiAxMDDCsDUyJzIxLjgiRQ!5e0!3m2!1sru!2sro!4v1667373555984!5m2!1sru!2sro"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="w-50">
        <Paragraph margin="0 0 42px 0">
          Address: 315/85 Floor 3, Moo 12, Nongprue, Banglamung, Chonburi
        </Paragraph>
        <a href="tel:0928400535" class="d-flex align-items-center">
          <img style="width: 18px;" src="../assets/images/phone.svg" alt="">
          <Paragraph margin="0 0 0 12px" fontSize="20px" lineHeight="20px">092-840-05-35</Paragraph>
        </a>
        <a
          style="margin-top: 20px;"
          href="mailto:d.makh@thai-it-hardware.co.th"
          class="d-flex align-items-center"
        >
          <img style="width: 22px;" src="../assets/images/email.svg" alt="">
          <Paragraph margin="0 0 0 12px" fontSize="20px" lineHeight="20px">d.makh@thai-it-hardware.co.th</Paragraph>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'Contacts',
  components: { Paragraph }
}
</script>

<style scoped>
.contact_blocks {
  width: 100%;
  display: inline-flex;
  gap: 64px;
  margin: 20px 0 158px 0;
}

.contact_blocks a {
  text-decoration: none;
}
</style>
