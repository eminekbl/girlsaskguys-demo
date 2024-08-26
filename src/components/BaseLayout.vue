<template>
  <Header />
  <main class="main-content flex-shrink-0">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <FeedComponent />
        </div>
        <div class="col-md-4">
          <SidebarComponent />
        </div>
      </div>
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import FeedComponent from "./FeedComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";

export default defineComponent({
  components: {
    SidebarComponent,
    FeedComponent,
    Header,
  },
});
</script>

<style scoped>
.main-content {
  background-color: #f3f3f3;
  flex-grow: 1;
}
</style>
