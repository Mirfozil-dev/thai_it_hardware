<template>
  <b-navbar toggleable="lg" class="navbar_wrapper">
    <div class="container">
      <router-link :to="{ name: 'Main' }">
        <img class="logo" src="../assets/images/logo.svg" alt="">
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="bg-white" style="z-index: 2;">
        <b-navbar-nav class="w-100 container">
          <NavLinks />
          <div class="lang_picker_wrapper">
            <b-dropdown variant="outline-secondary" no-caret dropdown size="sm">
              <template #button-content>
                <img class="w-100 h-100" :src="getCurrencyImg" alt="">
              </template>
              <b-dropdown-item
                v-for="lang in locales"
                :key="lang.value"
                @click="selectLang(lang.value)"
                :title="lang.text"
              >
                <img :src="lang.icon" alt="">
                {{ lang.text }}

              </b-dropdown-item>
            </b-dropdown>
          </div>
          <ContactsSection />
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import NavLinks from '../components/NavLinks.vue';
import ContactsSection from '../components/ContactsSection.vue';

export default {
  name: 'Navbar',
  components: { ContactsSection, NavLinks },
  props: ['locales'],
  computed: {
    getCurrencyImg() {
      return this.locales.find(locale => locale.value === this.$i18n.locale).icon;
    },
  },
  methods: {
    selectLang(val) {
      this.$set(this.$i18n, 'locale', val);
    },
  },
};
</script>

<style scoped>
.navbar_wrapper {
  height: 90px;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.lang_picker_wrapper {
  margin: 0 auto !important;
  display: flex;
  justify-content: center;
  align-items: center;

}

@media screen and (max-width: 1200px) {
  .navbar_wrapper .logo {
    width: 170px;
  }
}

@media screen and (max-width: 992px) {
  .navbar-collapse.collapse {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;
  }
  .lang_picker_wrapper {
    margin: 0 0 5px auto !important;
  }

  .navbar_wrapper {
    height: 70px !important;
  }
}

@media screen and (max-width: 768px) {
  .navbar_wrapper {
    height: 60px !important;
  }

  .navbar-collapse.collapse {
    top: 60px;
  }
  .lang_picker_wrapper {
    width: 24px;
    height: 20px;
    margin-bottom: 10px !important;
  }
}
@media screen and (max-width: 510px) {
  .lang_picker_wrapper {
    width: 20px;
    height: 16px;
  }
}

</style>

<style>

.navbar-collapse.collapse.show .contacts {
  width: 100% !important;
  padding: 0 28px 20px 0;
}
.navbar_wrapper .btn.dropdown-toggle {
  padding: 3px 5px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar_wrapper .dropdown-menu.show {
  position: absolute;
  top: 100%;
  right: 0;
}

@media screen and (max-width: 1200px) {
  .dropdown-menu.show {
    width: 100px;
    min-width: 0;
  }
  .dropdown-menu.show .dropdown-item {
    font-size: 10px;

  }
}
@media screen and (max-width: 992px) {
  .navbar-collapse.collapse.show .contacts {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .navbar_wrapper .btn.dropdown-toggle {
    padding: 2px 4px !important;
  }
}
@media screen and (max-width: 510px) {
  .navbar_wrapper .btn.dropdown-toggle {
    padding: 2px !important;
  }
}
</style>
