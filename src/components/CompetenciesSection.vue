<template>
  <div class="d-flex w-100 competencies_wrapper justify-content-center">
    <div class="competencies_item d-flex flex-column align-items-center">
      <img src="../assets/images/hub.svg" alt="">
      <Paragraph class="text-center" fontWeight="600">
        {{ $t('main.networkSwitches') }}
      </Paragraph>
    </div>
    <div class="competencies_item d-flex flex-column align-items-center">
      <img src="../assets/images/supply.svg" alt="">
      <Paragraph class="text-center" fontWeight="600">
        {{ $t('main.powerSupply') }}
      </Paragraph>
    </div>
    <div class="competencies_item d-flex flex-column align-items-center">
      <img src="../assets/images/laptop.svg" alt="">
      <Paragraph class="text-center" fontWeight="600">
        {{ $t('main.workstations') }}
      </Paragraph>
      <p class="text-center"></p>
    </div>
    <div class="competencies_item d-flex flex-column align-items-center">
      <img src="../assets/images/router.svg" alt="">
      <Paragraph class="text-center" fontWeight="600">
        {{ $t('main.wirelessSolutions') }}
      </Paragraph>
    </div>
    <div class="competencies_item d-flex flex-column align-items-center">
      <img src="../assets/images/server.svg" alt="">
      <Paragraph class="text-center" fontWeight="600">
        {{ $t('main.serverEquipment') }}
      </Paragraph>
    </div>
  </div>
</template>

<script>
import Paragraph from './Paragraph.vue';

export default {
  name: 'CompetenciesSection',
  components: { Paragraph },
};
</script>

<style scoped>
.competencies_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

@media screen and (max-width: 768px) {
  .competencies_item img {
    width: 100%;
  }

  .competencies_wrapper {
    gap: 15px;
  }
}
</style>

<style>

@media screen and (max-width: 1200px) {
  .competencies_item p {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .competencies_item p {
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .competencies_item p {
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 575px) {
  .competencies_item p {
    font-size: 14px !important;
    line-height: 12px !important;
  }

  .competencies_wrapper {
    flex-wrap: wrap !important;
  }

  .competencies_item {
    width: 23% !important;
  }

  .competencies_item img {
    width: 80% !important;
  }
}

</style>
