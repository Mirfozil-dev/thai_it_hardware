<template>
  <div class="container" style="margin-top: 40px;">
    <CompetenciesSection />
    <Paragraph class="infrastructure_paragraph" margin="60px 0 0 0">
      Currently Thai IT can supply and maintain all types of electronic devices such as computers, laptops,
      workstations, servers and server equipment, UPS, wireless network devices and many more.
    </Paragraph>
    <img class="infrastructure_img" src="../assets/images/infrastructure_img.jpg" alt="">
  </div>
</template>

<script>
import CompetenciesSection from '../components/CompetenciesSection.vue'
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'Infrastructure',
  components: { Paragraph, CompetenciesSection }
}
</script>

<style scoped>
.infrastructure_img {
  width: 100%;
  margin: 60px 0 64px 0;
  border-radius: 6px;
}
</style>
<style>
@media screen and (max-width: 1200px) {
  .infrastructure_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .infrastructure_paragraph {
    margin-top: 30px !important;
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .infrastructure_paragraph {
    margin-top: 20px !important;
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .infrastructure_paragraph {
    margin-top: 15px !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
}
</style>
