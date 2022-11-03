<template>
  <div class="container">
    <img
      style="margin-top: 20px;"
      class="services_banner"
      src="../assets/images/services_img.jpg"
      alt=""
    >
    <Paragraph class="services_paragraph" margin="40px 0 0 0">
      Providing integrated solutions that scale fast and complement existing systems and business processes, we help our
      customers maximize their results. We provide: design and build customized architecture, integration with new or
      existing hardware.
    </Paragraph>
    <Paragraph class="services_paragraph" margin="40px 0">
      For the equipment provided by Thai IT or by another supplier, we do Warranty Management and Hardware Repair
      services. We cooperate with highly professional service centers in South Asia region, and have our own testing
      specialists for express testing and recovery.
    </Paragraph>
    <img class="services_banner" src="../assets/images/services_img2.jpg" alt="">
    <Paragraph class="services_paragraph" margin="40px 0 61px 0">
      Satisfying our customers demand with Electronic Components requires Thai IT to provide best procurement and supply
      chain services. Key elements of this service are Inspection & Testing of purchasing components. Thai IT always do
      external visual inspection of purchased components, and can do different testing procedures by customers request,
      including testing at professional laboratories.
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'Services',
  components: { Paragraph }
}
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
