<template>
  <div class="container">
    <ComponentsSection style="margin: 20px 0 40px 0;" />
    <Paragraph class="components_paragraph" margin="0 0 56px 0">
      {{ $t('components.paragraph') }}
    </Paragraph>
  </div>
</template>

<script>
import ComponentsSection from '../components/ComponentsSection.vue';
import Paragraph from '../components/Paragraph.vue';

export default {
  name: 'Components',
  components: { Paragraph, ComponentsSection },
};
</script>

<style>
p.components_paragraph {
  white-space: pre-line;
}

@media screen and (max-width: 1200px) {
  .components_paragraph {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 992px) {
  .components_paragraph {
    font-size: 18px !important;

  }
}

@media screen and (max-width: 768px) {
  .components_paragraph {
    font-size: 16px !important;
    line-height: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .components_paragraph {
    font-size: 14px !important;
    line-height: 18px !important;
  }
}
</style>
