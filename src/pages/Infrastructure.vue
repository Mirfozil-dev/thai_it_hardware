<template>
  <div class="container" style="margin-top: 40px;">
    <CompetenciesSection />
    <Paragraph margin="60px 0 0 0">
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
