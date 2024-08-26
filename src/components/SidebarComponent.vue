<template>
  <div class="card my-3">
    <h4 class="title">Related Questions</h4>
    <div class="questions">
      <div class="question">
        <div class="bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div class="question">
        <div class="bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div class="question">
        <div class="bold">Ab beatae eaque labore neque nostrum quod repellat!</div>
      </div>
      <div class="question">
        <div class="bold">Ad adipisci explicabo fugiat illum nemo quidem voluptatem.</div>
      </div>
      <div class="question">
        <div class="bold">Doloremque dolores ducimus ipsam magni nobis nulla, vero?</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "SidebarComponent",
  setup() {
    return {}
  }
});

</script>

<style scoped>
.question {
  position: relative;
  padding: 10px;
}

.question:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}
</style>