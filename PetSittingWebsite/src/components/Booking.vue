<template>

    <v-container>
        <v-responsive class="fill-height">

            <h1 class="text-h2 text-center ma-10" >Book your Personal Petsitter Today!</h1>
            <v-form ref="form" v-model="valid" lazy-validation style="height: 1000px;">

                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    :rules="[rules.required]"
                    required
                ></v-text-field>

                <VueDatePicker v-model="dateRange" range multi-calendars :format="customFormat"></VueDatePicker>
                <p>Selected Date Range: {{  formattedDateRange }}</p>

                <v-btn @click="submitForm" :disabled="!valid">Submit</v-btn>
            </v-form>

        </v-responsive>
    </v-container>

</template>

<script>
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            valid: false,
            firstName: '',
            rules: {
                required: value => !!value || 'Required.',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                const templateParams = {
                    firstName: this.firstName,
                };

                emailjs.send("YOUR SERVICE ID", "YOUR TEMPLATE ID", templateParams, 'YOUR USER ID')
                    .then(() => alert('Booking request sent!'))
                    .catch(error => console.error('Failed to send booking request:', error));
            }
        }
    },
}
</script>

<script setup>
import { ref, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

    const dateRange = ref(null);

    // Custom format function to change the format to dd/MM/yyyy
    const customFormat = (date) => {
      const formatDate = (d) => {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      };
      
      if (Array.isArray(date)) {
        return `${formatDate(date[0])} - ${formatDate(date[1])}`;
      }
      return '';
    };

    const formattedDateRange = computed(() => {
        if (!dateRange.value) return 'No date selected';
        return customFormat(dateRange.value);
    })
</script>