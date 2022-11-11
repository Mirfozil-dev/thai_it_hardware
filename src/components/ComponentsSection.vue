<template>
  <div class="components_cards">
    <div class="w-50">
      <img class="w-100" src="../assets/images/main_card_image1.jpg" alt="">
      <Paragraph margin="20px 0 0 0" class="components_p">
        {{ $t('main.components_block1') }}
      </Paragraph>
    </div>
    <div class="w-50">
      <img class="w-100" src="../assets/images/main_card_image2.jpg" alt="">
      <Paragraph margin="20px 0 0 0" class="components_p">
        {{ $t('main.components_block2') }}
      </Paragraph>
    </div>
  </div>
</template>

<script>
import Paragraph from './Paragraph.vue';

export default {
  name: 'ComponentsSection',
  components: { Paragraph },
};
</script>

<style scoped>

.components_cards {
  display: inline-flex;
  gap: 19px;
}

.components_cards p {
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  color: #333333;
  margin-top: 20px;
}

.components_cards img {
  border-radius: 6px;
}
</style>

<style>
@media screen and (max-width: 1200px) {
  .components_p {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .components_p {
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .components_p {
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 575px) {
  .components_p {
    font-size: 12px !important;
    line-height: 16px !important;
  }
}
</style>
