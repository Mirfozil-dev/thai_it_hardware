<template>
  <b-navbar-nav class="navigation">
    <li v-for="(link, index) in links" :key="index" class="nav-item">
      <div class="nav-link">
        <router-link active-class="link_active" :to="{ name: link.pathName }">{{ link.title }}</router-link>
      </div>
    </li>
  </b-navbar-nav>
</template>

<script>
export default {
  name: 'NavLinks',
  data() {
    return {
      links: [
        {
          title: 'About Thai IT',
          pathName: 'About',
        },
        {
          title: 'IT infrastructure',
          pathName: 'Infrastructure',
        },
        {
          title: 'Electronic Components',
          pathName: 'Components',
        },
        {
          title: 'Professional Services',
          pathName: 'Services',
        },
        {
          title: 'Contact Us',
          pathName: 'Contacts',
        },
      ],
    };
  },
};
</script>

<style scoped>
.navigation {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 58px;
}

.navigation a {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  position: relative;
}

.navigation a:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  border-bottom: solid #333333 1px;
  transition: 0.2s;
  width: 0;
  display: inherit;
  margin: 0 auto;
}

.navigation a.link_active:after {
  width: 105%;
}

@media screen and (max-width: 1400px) {
  .navigation {
    margin-left: 25px !important;
    gap: 10px !important;
  }
}

@media screen and (max-width: 1200px) {
  .navigation {
    margin-left: 10px !important;
    gap: 5px !important;
  }

  .navigation a {
    font-size: 11px;
    line-height: 18px;
  }
}
</style>
