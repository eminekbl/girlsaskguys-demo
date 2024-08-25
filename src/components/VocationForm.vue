<template>
  <Form @submit="submitForm" class="d-flex flex-column gap-2">

    <!-- Soru 1 -->
    <div class="form-group question-card">
      <label>Where do you want to go on vacation?</label>
      <Field
          name="vacationLocation"
          as="input"
          rules="required"
          placeholder="Write the answer"
          class="form-control"
      />
      <ErrorMessage name="vacationLocation" class="error-message"/>
    </div>

    <!-- Soru 2 -->
    <div class="form-group question-card">
      <label>Which date ranges are suitable for you?</label>
      <div class="d-flex gap-4">

        <div class="">
          <Field
              name="startDate"
              as="input"
              type="date"
              rules="required|valid_date"
              class="form-control d-flex w-auto"
          />
          <ErrorMessage name="startDate" class="error-message"/>
        </div>
        <div class="">
          <Field
              name="endDate"
              as="input"
              type="date"
              rules="required|valid_date|after_start_date:@startDate" placeholder="End Date"
              class="form-control d-flex w-auto"
          />
          <ErrorMessage name="endDate" class="error-message"/>
        </div>
      </div>


    </div>

    <!-- Soru 3 -->
    <div class="form-group question-card">
      <label for="bookHotel">Would you also like to book a hotel?</label>
      <div class="form-check">
        <Field
            name="bookHotel"
            type="radio"
            value="yes"
            rules="required"
            class="form-check-input"
            id="bookHotelYes"
        />
        <label class="form-check-label" for="bookHotelYes">Yes</label>
      </div>
      <div class="form-check">
        <Field
            name="bookHotel"
            type="radio"
            value="no"
            rules="required"
            class="form-check-input"
            id="bookHotelNo"
        />
        <label class="form-check-label" for="bookHotelNo">No</label>
      </div>
      <ErrorMessage name="bookHotel" class="error-message"/>
    </div>

    <!-- Soru 4 -->
    <div class="form-group question-card">
      <label for="otherHelpSwitch">Do you need help with anything else about your vacation?</label>
      <div class="form-check">
        <Field
            name="needHelp"
            type="radio"
            value="yes"
            rules="required"
            v-model="needHelp"
            class="form-check-input"
            id="helpYes"
        />
        <label class="form-check-label" for="helpYes">Yes</label>
      </div>

      <div class="form-check">
        <Field
            name="needHelp"
            type="radio"
            value="no"
            rules="required"
            v-model="needHelp"
            class="form-check-input"
            id="helpNo"
        />
        <label class="form-check-label" for="helpNo">No</label>
      </div>

      <!-- Radio button için hata mesajı -->
      <ErrorMessage name="needHelp" class="error-message"/>

      <!-- Radio button "Yes" seçeneğinde olduğunda görünür -->
      <div v-if="needHelp === 'yes'" class="mt-2">
        <Field
            name="otherHelpDetails"
            as="textarea"
            rules="required"
            placeholder="Please describe what you need help with"
            class="form-control"
        />
        <ErrorMessage name="otherHelpDetails" class="error-message"/>
      </div>
    </div>

    <button type="submit" class="btn btn-lg btn-dark submit-button">Plan Now</button>
  </Form>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {ErrorMessage, Field, Form} from "vee-validate";
import '../validation/validationRules'

export default defineComponent({
  name: "VocationForm",
  components: {
    Form,
    Field,
    ErrorMessage
  },

  setup() {
    const needHelp = ref('');
    return {
      needHelp
    }
  },
  methods: {
    submitForm() {
      this.$emit('submitForm');
    }
  }
})
</script>


<style scoped>
.question-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #EAECF0;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.question-card .form-control {
  border: 0;
}

.error-message {
  color: #862828;
}

.submit-button {
  margin: 1rem auto;
}
</style>