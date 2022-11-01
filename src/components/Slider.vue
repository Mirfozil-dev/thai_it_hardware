<template>
  <div class="slider_wrapper" :style="{ width, height }">
    <img class="slide_img" src="../assets/images/image_1.jpg" alt="">
    <div class="slide_body w-100 d-flex flex-column align-items-center">
      <div class="d-flex justify-content-between w-100 align-items-center">
        <h1 class="slide_title">
          {{ slides[0].title }}
        </h1>
        <button class="slide_more_btn">
          <a :href="slides[0].link">
            more
          </a>
        </button>
      </div>
      <div class="slide_pagination">
        <span class="slide_dot active" />
        <span class="slide_dot" />
        <span class="slide_dot" />
        <span class="slide_dot" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['width', 'height', 'slides']
}
</script>

<style scoped>
.slider_wrapper {
  position: relative;
}

.slider_wrapper::after {
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(39, 39, 39, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 6px;
}

.slide_title {
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #FFFFFF
}

.slide_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
  z-index: -1;
  border-radius: 6px;
}

.slide_body {
  position: absolute;
  padding: 0 40px;
  bottom: 20px;
  z-index: 999;
}

.slide_pagination {
  display: inline-flex;
  gap: 10px;
  margin-top: 26px;
}

.slide_dot {
  width: 14px;
  height: 14px;
  background: #969696;
  border-radius: 50%;
}

.slide_dot.active {
  background: #ffffff !important;
}

.slide_more_btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  gap: 10px;
  background: #439B24;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
  width: 150px;
  height: 40px;
}
.slide_more_btn a {
  text-decoration: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
}
</style>
