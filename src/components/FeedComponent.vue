<script setup lang="ts">
import UserComponent from "./UserComponent.vue";
</script>

<template>
  <div class="feed-card card my-3">
    <div class="row gap-3">
      <div class="btn btn-secondary w-auto">Lorem ipsum.</div>
      <h2 class="feed-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        maxime perferendis.
      </h2>
      <UserComponent />
      <div class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        molestias quam quis quos?
      </div>
      <div class="feed-image">
        <img
          class="rounded w-100 h-100 object-fit-contain"
          src="https://picsum.photos/682/486.webp"
          alt=""
          width="100%"
          height="486"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
