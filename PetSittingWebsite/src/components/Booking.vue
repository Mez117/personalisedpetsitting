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
                
                <v-btn @click="submitForm" :disabled="!valid">Submit</v-btn>
            </v-form>

        </v-responsive>
    </v-container>

</template>

<script setup>
import emailjs from 'emailjs-com';
// import { ref, onMounted } from 'vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';

// const date = ref(new Date());

// const format = (date) => {
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     return `bruh this date ${day}/${month}/${year}`;
// }

// onMounted(() => {
//     const startDate = new Date();
//     const endDate = new Date(new Date().setDate(startDate.getDate()));
//     date.value = [startDate, endDate]
// })

</script>

<script>
import { ref } from 'vue';

export default {
    setup() {
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

    return {
      dateRange,
      customFormat
    };
  },
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