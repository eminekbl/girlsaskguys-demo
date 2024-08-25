<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
       tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5 m-auto" id="exampleModalToggleLabel">{{ modalTitle }}</h1>
          <button type="button" class="btn-close modal-close-button" data-bs-dismiss="modal"
                  aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="isSubmitting">
            <LoadingSpinner v-if="isLoading"/>
            <TravelGuide v-else/>
          </div>
          <VocationForm @submitForm="submitForm" v-else></VocationForm>
        </div>

      </div>
    </div>
  </div>
  <a class="btn plan-vocation-button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
    <img src="@/assets/vocation.webp" alt="" height="120" width="160">
  </a>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import VocationForm from "./VocationForm.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import TravelGuide from "./TravelGuide.vue";

export default defineComponent({
  name: "ModalComponent",
  components: {
    TravelGuide,
    LoadingSpinner,
    VocationForm,
  },
  setup() {
    const isSubmitting = ref(false);
    const isLoading = ref(false);
    const modalTitle = ref('Plan Your Vacation');
    const submitForm = (values: any) => {
      console.log("Form Submitted", values);
      isSubmitting.value = true;
      isLoading.value = true;

      setTimeout(() => {
        isLoading.value = false;
        modalTitle.value = 'Travel Guide';
      }, 5000);
    };
    return {
      submitForm,
      isLoading,
      isSubmitting,
      modalTitle
    };
  },
  methods: {}
});
</script>

<style scoped>
.plan-vocation-button {
  position: fixed;
  bottom: 0;
  right: 0;
}

.modal-close-button {
  position: absolute;
  right: 20px;
}

.modal-lg {
  max-width: 740px;
}

.modal-content {
  padding: 10px;
}

</style>
