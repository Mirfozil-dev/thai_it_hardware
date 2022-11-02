<template>
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
</template>

<script>
export default {
  name: 'CompetenciesSection'
}
</script>

<style scoped>
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
</style>
