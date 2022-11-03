<template>
  <div class="container">
    <Paragraph class="about_paragraph" margin="40px 0 0 0">
      Thai IT Hardware specializes in technological and IT-related services, we are a professional IT solutions
      provider. Portfolio of our IT solutions covers many industries, focusing mainly on Industrial, Automation and
      Telecommunication. We have qualified staff in different fields of IT and industries, we can provide various kinds
      of professional services to fit each customer requirements.
    </Paragraph>
    <img class="about_img" style="margin-top: 40px;"
         src="../assets/images/about_img.jpg" alt="">
    <Paragraph class="about_paragraph" margin="40px 0 0 0">
      Currently Thai IT can supply and maintain all types of electronic devices such as computers, laptops,
      workstations, servers and server equipment, UPS, wireless network devices and many more. We also provide warranty
      management and repairing services.
    </Paragraph>
    <Paragraph class="about_paragraph" margin="60px 0 75px 0">
      One of our core business lines is supplying our customers with high-quality service of Electronic Components
      Procurement. Modern IT infrastructure uses a lot of high-tech electronic components, such as chips, relays, power
      supplies, and we at Thai IT know our customers priority needs.
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'About',
  components: { Paragraph }
}
</script>

<style scoped>
.about_img {
  width: 100%;
  border-radius: 6px;
}
</style>
<style>
@media screen and (max-width: 1200px) {
  .about_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .about_paragraph {
    margin-top: 30px !important;
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .about_paragraph {
    margin-top: 20px !important;
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .about_paragraph {
    margin-top: 15px !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
}
</style>
