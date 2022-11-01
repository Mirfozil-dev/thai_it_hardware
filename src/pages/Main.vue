<template>
  <div class="container">
    <Slider
      width="100%" height="450px"
      style="margin-top: 20px;"
      :slides="slides"
    />
    <p class="main_about">
      Thai IT Hardware specializes in technological and IT-related services, we are a professional IT solutions
      provider. Portfolio of our IT solutions covers many industries, focusing mainly on Industrial, Automation and
      Telecommunication. We have qualified staff in different fields of IT and industries, we can provide various kinds
      of professional services to fit each customer requirements.
    </p>
    <h6 class="competencies_title">Our competencies</h6>
    <div class="d-flex justify-content-between">
      <div class="competencies_item">
        <img src="../assets/images/hub.svg" alt="">
        <p>Network switches</p>
      </div>
      <div class="competencies_item">
        <img src="../assets/images/supply.svg" alt="">
        <p>Uninterruptible Power Supply</p>
      </div>
      <div class="competencies_item">
        <img src="../assets/images/laptop.svg" alt="">
        <p>Workstations</p>
      </div>
      <div class="competencies_item">
        <img src="../assets/images/router.svg" alt="">
        <p>Network switches</p>
      </div>
      <div class="competencies_item">
        <img src="../assets/images/server.svg" alt="">
        <p>Server Equipment</p>
      </div>
    </div>
    <div class="main_cards">
      <div class="w-50">
        <img class="w-100" src="../assets/images/main_card_image1.jpg" alt="">
        <p>One of our core business lines is supplying our customers with high-quality service of Active & Passive
          Electronic Components Procurement. Modern IT infrastructure uses a lot of high-tech electronic components,
          such as chips, relays, power supplies, and we at Thai IT know our customers priority needs.</p>
      </div>
      <div class="w-50">
        <img class="w-100" src="../assets/images/main_card_image2.jpg" alt="">
        <p>Thai IT supply customers with variety of electronic components from different sources. We work with direct
          factory lines from top-brand manufacturers, and also working with wide network of distributors.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue';

export default {
  name: 'Main',
  components: { Slider },
  data() {
    return {
      slides: [
        {
          title: 'Electronic Components Procurement Service',
          img: '@/assets/images/image_1.jpg',
          link: '#',
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_about {
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  margin-top: 40px;
}

.competencies_title {
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #333333;
  text-align: center;
  margin: 70px 0 40px 0;
}

.competencies_item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.competencies_item p {
  color: #333333;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
}

.main_cards {
  display: inline-flex;
  gap: 19px;
  margin: 81px 0 85px 0;
}

.main_cards p {
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  color: #333333;
  margin-top: 20px;
}

.main_cards img {
  border-radius: 6px;
}
</style>
