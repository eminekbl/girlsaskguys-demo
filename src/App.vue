<template>
  <div class="d-flex flex-column min-vh-100">
    <BaseLayout>
      <ModalComponent/>
    </BaseLayout>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BaseLayout from "./components/BaseLayout.vue";
import ModalComponent from "./components/ModalComponent.vue";


export default defineComponent({
  components: {
    ModalComponent,
    BaseLayout,
  },
  setup() {
    return {};
  }
});
</script>

<style>

</style>
