<template>
  <div class="container">
    <Slider
      width="100%" height="450px"
      style="margin-top: 20px;"
      :slides="slides"
    />
    <Paragraph margin="40px 0 0 0">
      Thai IT Hardware specializes in technological and IT-related services, we are a professional IT solutions
      provider. Portfolio of our IT solutions covers many industries, focusing mainly on Industrial, Automation and
      Telecommunication. We have qualified staff in different fields of IT and industries, we can provide various kinds
      of professional services to fit each customer requirements.
    </Paragraph>
    <h6 class="competencies_title">Our competencies</h6>
    <CompetenciesSection />
    <ComponentsSection style="margin: 81px 0 85px 0;" />
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import CompetenciesSection from '../components/CompetenciesSection.vue'
import ComponentsSection from '../components/ComponentsSection.vue'
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'Main',
  components: { Paragraph, ComponentsSection, CompetenciesSection, Slider },
  data () {
    return {
      slides: [
        {
          title: 'Electronic Components Procurement Service',
          img: require('../assets/images/main_slider_img1.jpg'),
          link: '#'
        },
        {
          title: 'Maintenance of IT infrastructure',
          img: require('../assets/images/main_slider_img2.jpg'),
          link: '#'
        },
        {
          title: 'Professional Services',
          img: require('../assets/images/main_slider_img3.jpg'),
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>

.competencies_title {
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #333333;
  text-align: center;
  margin: 70px 0 40px 0;
}

</style>
