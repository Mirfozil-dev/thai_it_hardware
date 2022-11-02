<template>
  <div class="container">
    <Paragraph margin="40px 0 0 0">
      Thai IT Hardware specializes in technological and IT-related services, we are a professional IT solutions
      provider. Portfolio of our IT solutions covers many industries, focusing mainly on Industrial, Automation and
      Telecommunication. We have qualified staff in different fields of IT and industries, we can provide various kinds
      of professional services to fit each customer requirements.
    </Paragraph>
    <img class="about_img" style="margin-top: 40px;"
         src="../assets/images/about_img.jpg" alt="">
    <Paragraph margin="40px 0 0 0">
      Currently Thai IT can supply and maintain all types of electronic devices such as computers, laptops,
      workstations, servers and server equipment, UPS, wireless network devices and many more. We also provide warranty
      management and repairing services.
    </Paragraph>
    <Paragraph margin="60px 0 75px 0">
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
