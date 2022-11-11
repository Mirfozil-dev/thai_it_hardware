<template>
  <div class="container">
    <img
      style="margin-top: 20px;"
      class="services_banner"
      src="../assets/images/services_img.jpg"
      alt=""
    >
    <Paragraph class="services_paragraph" margin="40px 0 0 0">
      {{ $t('services.paragraph1') }}
    </Paragraph>
    <Paragraph class="services_paragraph" margin="40px 0">
      {{ $t('services.paragraph2') }}
    </Paragraph>
    <img class="services_banner" src="../assets/images/services_img2.jpg" alt="">
    <Paragraph class="services_paragraph" margin="40px 0 61px 0">
      {{ $t('services.paragraph3') }}
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue';

export default {
  name: 'Services',
  components: { Paragraph },
};
</script>

<style scoped>
.services_banner {
  width: 100%;
  border-radius: 6px;
}
</style>
<style>

@media screen and (max-width: 1200px) {
  .services_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .services_paragraph {
    margin-top: 30px !important;
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .services_paragraph {
    margin-top: 20px !important;
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .services_paragraph {
    margin-top: 15px !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
}

</style>
