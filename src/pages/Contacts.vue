<template>
  <div class="container">
    <div class="contacts_wrapper">
      <div class="contact_block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905609.5993273803!2d99.39440532511728!3d13.460369172022054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42fb361e712de0e7!2zMTLCsDU0JzE4LjQiTiAxMDDCsDUyJzIxLjgiRQ!5e0!3m2!1sru!2sro!4v1667373555984!5m2!1sru!2sro"
          class="contacts_map" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contact_block">
        <Paragraph class="contacts_paragraph" margin="0 0 42px 0">
          Address: 315/85 Floor 3, Moo 12, Nongprue, Banglamung, Chonburi
        </Paragraph>
        <a href="tel:0928400535" class="d-flex align-items-center">
          <img style="width: 18px;" src="../assets/images/phone.svg" alt="">
          <Paragraph class="contacts_paragraph" margin="0 0 0 12px" fontSize="20px" lineHeight="20px">092-840-05-35
          </Paragraph>
        </a>
        <a
          style="margin-top: 20px;"
          href="mailto:d.makh@thai-it-hardware.co.th"
          class="d-flex align-items-center"
        >
          <img style="width: 22px;" src="../assets/images/email.svg" alt="">
          <Paragraph class="contacts_paragraph" margin="0 0 0 12px" fontSize="20px" lineHeight="20px">
            d.makh@thai-it-hardware.co.th
          </Paragraph>
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
.contacts_wrapper {
  width: 100%;
  display: inline-flex;
  gap: 64px;
  margin: 20px 0 158px 0;
}

.contacts_wrapper a {
  text-decoration: none;
}

.contacts_map {
  width: 100%;
  height: 450px;
}

.contact_block {
  width: 50%;
}

@media screen and (max-width: 992px) {
  .contacts_map {
    height: 350px;
  }

  .contacts_wrapper {
    margin: 20px 0 100px 0;
  }
}

@media screen and (max-width: 768px) {
  .contacts_wrapper {
    flex-wrap: wrap;
  }

  .contact_block {
    width: 100%;
  }

  .contacts_wrapper {
    margin: 20px 0 80px 0;
  }
}

</style>

<style>
@media screen and (max-width: 1200px) {
  .contacts_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .contacts_paragraph {
    font-size: 18px !important;
  }
}

@media screen and (max-width: 768px) {
  .contacts_paragraph {
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .contacts_paragraph {
    font-size: 14px !important;
    line-height: 18px !important;
  }
}
</style>
