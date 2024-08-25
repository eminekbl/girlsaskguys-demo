<template>
  <div class="container">
    <img class="travel-guide-image" src="@/assets/travel-guide.webp" alt="travel guide">
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dicta molestiae!</h5>
    <ul class="list-group">
      <li v-for="(item, index) in places" :key="index">
        <strong>{{ index + 1 }}. {{ item.name }}:</strong> {{ item.description }}
      </li>
    </ul>
    <div class="travel-guide-card">
      <div class="card-body">
        <div class="card-title fw-medium">
          Lorem ipsum dolor sit amet, consectetur.
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum ipsa iusto minus optio possimus
          recusandae tempora vitae?</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn btn-sm btn-dark">
            Explore now
          </div>
          <img src="@/assets/icons/turkish-airlines.svg" alt="" height="40" width="148">
        </div>
      </div>



    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TravelGuide",
  data() {
    return {
      places: [
        {
          name: 'Rome',
          description: 'Lorem ipsum dolor sit amet consectetur. Etiam ac ut donec amet nec sed dignissim pretium vitae. Morbi nulla proin ac integer sit feugiat commodo enim.'
        },
        {
          name: 'Florence',
          description: 'Lorem ipsum dolor sit amet consectetur. Etiam ac ut donec amet nec sed dignissim pretium vitae.'
        },
        {
          name: 'Venice',
          description: 'Lorem ipsum dolor sit amet consectetur. Etiam ac ut donec amet nec sed dignissim pretium vitae. Morbi nulla proin ac integer sit feugiat commodo enim.'
        },
      ]
    };
  },
  setup() {
    return {}
  }
})
</script>


<style scoped>
.travel-guide-image {
  width: 100%;
  object-fit: contain;
  height: 200px;
  margin-bottom: 30px;
}

.list-group {
  padding-left: 0;
  list-style-type: none;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.list-group li {
  margin-block: 10px;
}

.travel-guide-card {
  background-color: #EAECF0;
  padding: 20px 30px 20px 30px;
  gap: 20px;
  border-radius: 10px 0px 0px 0px;
}
.travel-guide-card .card-body {
  isplay: flex;
  flex-direction: column;
  gap: 20px;
}

</style>