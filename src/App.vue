<template>
  <div id="app">
    <Navbar :locales="locales" />
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
    <CustomFooter />
  </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue';
import CustomFooter from './layouts/CustomFooter.vue';

export default {
  name: 'App',
  components: { CustomFooter, Navbar },
  data() {
    return {
      locales: [
        {
          value: 'th',
          text: 'ภาษาไทย',
          icon: require('./assets/images/th.svg'),
        },
        {
          value: 'en',
          text: 'English',
          icon: require('./assets/images/en.svg'),
        },
      ],
    };
  },
};
</script>
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-style: normal;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
