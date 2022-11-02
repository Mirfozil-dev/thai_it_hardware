<template>
  <div
    class="slider_wrapper"
    :style="{ width, height }"
    v-touch:swipe.left="nextSlide"
    v-touch:swipe.right="lastSlide"
  >
    <img
      v-for="(slide, index) in slides"
      :key="index"
      class="slide_img"
      :style="{opacity: activeIndex === index ? '1': '0'}"
      :src="slide.img"
      alt=""
    >
    <div class="slide_body w-100 d-flex flex-column align-items-center">
      <div class="d-flex justify-content-between w-100 align-items-center">
        <h1 class="slide_title">
          {{ slides[activeIndex].title || '' }}
        </h1>
        <button class="slide_more_btn">
          <a :href="slides[activeIndex].link || '#'">
            more
          </a>
        </button>
      </div>
      <div class="slide_pagination">
        <span
          v-for="(item, index) in slides"
          :key="index"
          class="slide_dot"
          :class="index === activeIndex && 'active'"
          @click="changeSlide(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['width', 'height', 'slides'],
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeSlide (index) {
      this.activeIndex = index
    },
    nextSlide () {
      this.activeIndex < this.slides.length - 1 ? this.activeIndex += 1 : this.activeIndex = 0
    },
    lastSlide () {
      this.activeIndex > 0 ? this.activeIndex -= 1 : this.activeIndex = (this.slides.length - 1)
    }
  }
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
  position: absolute;
  transition: 0.3s opacity;
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
  transition: background-color 0.3s ease;
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
