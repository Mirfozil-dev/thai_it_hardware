<template>
  <div class="container">
    <ComponentsSection style="margin: 20px 0 40px 0;" />
    <Paragraph class="components_paragraph" margin="0 0 56px 0">In a time of Global Chip Shortage, sourcing market
      stocks becomes crucially important
      to avoid closedown of our
      customers. We do sourcing services at US, European and Asian markets.<br>
      *Active components<br>
      **Semiconductors – Network IC, CPU, Microcontrollers, Memory Chips<br>
      **Transistors<br>
      *Passive components<br>
      **Basic components – capacitors, resistors, coils, and etc.<br>
      **Electromechanical – relays, circuit Protection, connectors, cables<br>
    </Paragraph>
  </div>
</template>

<script>
import ComponentsSection from '../components/ComponentsSection.vue'
import Paragraph from '../components/Paragraph.vue'

export default {
  name: 'Components',
  components: { Paragraph, ComponentsSection }
}
</script>

<style>
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
