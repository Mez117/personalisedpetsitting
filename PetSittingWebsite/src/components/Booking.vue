<template>

    <v-container>
        <v-responsive class="fill-height">

            <h1 class="text-h2 text-center ma-10" >Book your Personal Petsitter Today!</h1>
            <v-form ref="form" v-model="valid" lazy-validation style="width: 800px;" class="mx-auto mb-15">

                <h1 class="text-h4 my-3">Name</h1>

                <v-row>
                    <v-col cols="6">
                        <v-text-field
                        v-model="firstName"
                        label="First Name"
                        :rules="[rules.required]"
                        required
                        ></v-text-field>
                    </v-col>
                        
                    <v-col cols="6">
                        <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        :rules="[rules.required]"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>

                <h1 class="text-h4 my-3">Contact Details</h1>
                    
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                        v-model="phoneNumber"
                        label="Phone Number"
                        :rules="[rules.required, rules.phone]"
                        required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="[rules.required, rules.email]"
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-text-field
                v-model="address"
                label="Address"
                :rules="[rules.required]"
                required
                ></v-text-field>

                <h1 class="text-h4 my-3">Booking Details</h1>
                
                <v-row>
                    <v-col cols="6">
                        <VueDatePicker 
                        v-model="dateRange" 
                        :range="{ noDisabledRange: true }"
                        multi-calendars 
                        :format="customFormat" 
                        :disabled-dates="disabledDates"
                        required
                        :min-date="minDate"
                        ></VueDatePicker>
                    </v-col>

                    <v-col cols="6">
                        <v-select
                        v-model="selectedPackage"
                        :items="packages"
                        label="Package Options"
                        :rules="[rules.required]"
                        required
                        hide-details
                        ></v-select>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="6">
                        <v-select
                        v-model="howManyPets"
                        :items="petOptions"
                        label="How Many Pets"
                        :rules="[rules.required]"
                        ></v-select>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                        v-model="whatPets"
                        label="What Pets"
                        :rules="[rules.required]"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-text-field
                    v-model="additionalInfo"
                    label="Additional Information"
                ></v-text-field>


                <v-btn @click="submitForm" :disabled="!valid" class="mt-5">Submit Booking Request</v-btn>
            </v-form>

        </v-responsive>
    </v-container>

</template>

<script>
import emailjs from '@emailjs/browser';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { db, collection, getDocs } from '../firebase';

// export default {
//     components: {
//         VueDatePicker,
//     },
//     data() {
//         return {
//             valid: false,
//             firstName: '',
//             lastName: '',
//             phoneNumber: '',
//             email: '',
//             address: '',
//             dateRange: null,
//             selectedPackage: '',
//             packages: ['Independant Fur Child Package', 'Fur Baby Package', 'Seperation Anxiety Package'],
//             howManyPets: '',
//             petOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
//             whatPets: '',
//             additionalInfo: '',
//             rules: {
//                 required: value => !!value || 'Required.',
//                 email: value => /.+@.+\..+/.test(value),
//                 phone: value => /^\d+( \d+)*$/.test(value),
//             },
//         };
//     },
//     methods: {
//         submitForm() {
//             if (this.$refs.form.validate()) {

//                 console.log(this.dateRange);

//                 const formattedDateRange = this.customFormat(this.dateRange);

//                 console.log(formattedDateRange);

//                 const templateParams = {
//                     firstName: this.firstName,
//                     lastName: this.lastName,
//                     phoneNumber: this.phoneNumber,
//                     email: this.email,
//                     address: this.address,
//                     selectedPackage: this.selectedPackage,
//                     howManyPets: this.howManyPets,
//                     whatPets: this.whatPets,
//                     additionalInfo: this.additionalInfo,
//                     dateRange: formattedDateRange,
//                 };

//                 emailjs.send("service_3uq0j9x", "template_tbhhsvd", templateParams, { publicKey: 'y28Njxa62kEbnjheZ',})
//                     .then(() => alert('Booking request sent!'))
//                     .catch(error => console.error('Failed to send booking request:', error));
//             }
//         },
//         customFormat(date) {
//             const formatDate = (d) => {
//                 if (d != null) {
//                 const day = String(d.getDate()).padStart(2, '0');
//                 const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
//                 const year = d.getFullYear();
//                 return `${day}/${month}/${year}`;
//                 }
//             };
            
//             if (Array.isArray(date)) {
//                 return `${formatDate(date[0])} - ${formatDate(date[1])}`;
//             }
//             return '';
//         },
//     },
    
// }
export default {
    components: {
        VueDatePicker,
    },
    data() {
        return {
            valid: false,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            dateRange: null,
            disabledDates: [],
            minDate: new Date(),
            selectedPackage: '',
            packages: ['Independant Fur Child Package', 'Fur Baby Package', 'Seperation Anxiety Package'],
            howManyPets: '',
            petOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            whatPets: '',
            additionalInfo: '',
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value),
                phone: value => /^\d+( \d+)*$/.test(value),
            },
        };
    },
    methods: {
        // customFormat(date) {
        //     if (!date || !(date instanceof Date)) {
        //         return ''
        //     }
        //     const day = String(date.getDate()).padStart(2, '0');
        //     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        //     const year = date.getFullYear();
        //     return `${day}/${month}/${year}`;
        // },
        customFormat(date) {
            const formatDate = (d) => {

                if (d != null) {
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
                const year = d.getFullYear();
                return `${day}/${month}/${year}`;
                }

            };
            
            if (Array.isArray(date)) {
                return `${formatDate(date[0])} - ${formatDate(date[1])}`;
            }
            return '';
        },

        formatToJavascriptObject(dateString) {
            const [year, month, day] = dateString.split("-").map(Number);
            const dateObject = new Date (year, month - 1, day);
            return dateObject;
        },

        async fetchUnavailableDates() {

            Date.prototype.addDays = function(days) {
                const date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            }

            function getDates(startDate, endDate) {
                let dateArray = new Array();
                let currentDate = startDate;
                while (currentDate <= endDate) {
                    dateArray.push(new Date (currentDate));
                    currentDate = currentDate.addDays(1);
                }
                return dateArray;
            }

            const unavailableDates = [];
            try {
                const querySnapshot = await getDocs(collection(db, 'unavailableDates'));
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const startDate = (this.formatToJavascriptObject(data.startDate))
                    const endDate = (this.formatToJavascriptObject(data.endDate))

                    if (startDate && endDate) {

                        const datesBeingRemoved = getDates(startDate, endDate);

                        unavailableDates.push(...datesBeingRemoved);
                    }
                });
                this.disabledDates = unavailableDates;
            } catch (error) {
                console.error('Error fetching unavailable dates:', error);
            }
        },

        submitForm() {
            if (this.$refs.form.validate()) {

                const formattedDateRange = this.customFormat(this.dateRange);

                const templateParams = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    address: this.address,
                    selectedPackage: this.selectedPackage,
                    howManyPets: this.howManyPets,
                    whatPets: this.whatPets,
                    additionalInfo: this.additionalInfo,
                    dateRange: formattedDateRange,
                };

                emailjs.send("service_3uq0j9x", "template_tbhhsvd", templateParams, { publicKey: 'y28Njxa62kEbnjheZ',})
                    .then(() => alert('Booking request sent!'))
                    .catch(error => console.error('Failed to send booking request:', error));
            }
        },
    },

    created() {
        this.fetchUnavailableDates();
    }
    
}
</script>

<style>
:root {
    --dp-input-padding: 14px 30px 14px 12px;
}
</style>