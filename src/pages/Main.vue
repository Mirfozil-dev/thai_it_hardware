<template>
  <div class="container">
    <Slider
      style="margin-top: 20px;"
      :slides="slides"
    />
    <Paragraph margin="40px 0 0 0" class="main_paragraph">
      Thai IT Hardware specializes in technological and IT-related services, we are a professional IT solutions
      provider. Portfolio of our IT solutions covers many industries, focusing mainly on Industrial, Automation and
      Telecommunication. We have qualified staff in different fields of IT and industries, we can provide various kinds
      of professional services to fit each customer requirements.
    </Paragraph>
    <h6 class="competencies_title">Our competencies</h6>
    <CompetenciesSection />
    <ComponentsSection class="components_wrapper" />
  </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import CompetenciesSection from '../components/CompetenciesSection.vue';
import ComponentsSection from '../components/ComponentsSection.vue';
import Paragraph from '../components/Paragraph.vue';

export default {
  name: 'Main',
  components: { Paragraph, ComponentsSection, CompetenciesSection, Slider },
  data() {
    return {
      slides: [
        {
          title: 'Electronic Components Procurement Service',
          img: require('../assets/images/main_slider_img1.jpg'),
          link: { name: 'Components' },
        },
        {
          title: 'Maintenance of IT infrastructure',
          img: require('../assets/images/main_slider_img2.jpg'),
          link: { name: 'Infrastructure' },
        },
        {
          title: 'Professional Services',
          img: require('../assets/images/main_slider_img3.jpg'),
          link: { name: 'Services' },
        },
      ],
    };
  },
};
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

.components_wrapper {
  margin: 81px 0 85px 0;
}

@media screen and (max-width: 768px) {
  .components_wrapper {
    margin: 61px 0 65px 0 !important;
  }
}
</style>

<style>
@media screen and (max-width: 1200px) {
  .main_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .main_paragraph {
    margin-top: 30px !important;
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .main_paragraph {
    margin-top: 20px !important;
    font-size: 16px !important;
    line-height: 20px !important;
  }

  .competencies_title {
    font-size: 26px !important;
    margin: 50px 0 30px 0 !important;
  }
}

@media screen and (max-width: 400px) {
  .main_paragraph {
    margin-top: 15px !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }

  .competencies_title {
    font-size: 24px !important;
  }
}
</style>
