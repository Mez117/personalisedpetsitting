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
                        hide-details
                        ></v-text-field>
                    </v-col>
                        
                    <v-col cols="6">
                        <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        :rules="[rules.required]"
                        required
                        hide-details
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
                        hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="[rules.required, rules.email]"
                        required
                        hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-text-field
                        v-model="address"
                        label="Suburb"
                        :rules="[rules.required]"
                        required
                        hide-details
                        ></v-text-field>
                        <p class="text-caption ml-1">We will contact you later to ask for your specific address once the booking process is complete</p>
                    </v-col>
                    <v-col cols="6">
                        <v-select
                            v-model="selectedContact"
                            :items="contactMethods"
                            label="How would you like to be contacted"
                            :rules="[rules.required]"
                            required
                            hide-details
                        ></v-select>
                    </v-col>
                </v-row>

                <h1 class="text-h4 my-3">Booking Details</h1>
                
                <v-row>
                    <v-col cols="6">
                        <VueDatePicker 
                        v-model="dateRange" 
                        :range="{ noDisabledRange: true }"
                        multi-calendars 
                        :format="customFormat" 
                        :disabled-dates="disabledDates"
                        :required="true"
                        :min-date="minDate"
                        ></VueDatePicker>
                        <span v-if="formSubmitted && !dateRange" style="color: red; font-size: 12px;">Date is required</span>
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
                        hide-details
                        ></v-select>
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                        v-model="whatPets"
                        label="What Pets"
                        :rules="[rules.required]"
                        hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-textarea
                    v-model="additionalInfo"
                    label="Additional Information"
                    class="mt-5"
                    auto-grow
                ></v-textarea>

                <v-row align="center">
                    <v-col cols="auto" class="pr-0">
                        <v-checkbox
                            required
                            :rules="[rules.required]"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col>
                        <p class="align-center">By ticking, you are confirming that you have read, understood and agree to Personalised Petsitting (PP) </p>

                        <v-dialog max-width="600">
                        <template 
                            v-slot:activator="{ props: activatorProps }"
                            ><button
                                v-bind="activatorProps"
                                style="color: purple;"
                            >Terms and Conditions</button>
                        </template>
                        

                        <template v-slot:default="{ isActive }">
                            <v-card title="Terms and Conditions" class="text-center">
                                <v-card-text class="text-justify">
        By entrusting your pet in the care of Personalised Petsitting (PP), you (Pet Owner) agree to the following terms and conditions: <br /><br />
        
        <span style="font-weight: bold;">Agreement to Terms:</span> Personalised Pet Sitting agrees to provide pet sitting services as described in the booking confirmation.<br /><br />
        
        <span style="font-weight: bold;">Booking and Payment:</span> The Pet Owner understands that a meet and greet needs to be had and completed before the booking is confirmed.  Following the meet and greet, PP may, in its sole discretion, refuse a booking request.<br class="mb-1"/>
        The Pet Owner agrees to pay a 50% deposit to confirm the booking.  Refunds of the deposit will not be released if the Pet Owner cancels within 96 hours of the relevant booking. For the purposes of these terms, the day of booking starts at 12am on the first booked date. <br class="mb-1"/>
        The remainder of the payment must be made 48 hours before the end of the booking. <br class="mb-1"/>
        If the Pet Owner needs to return earlier than expected the payment will still need to be paid in full for all dates booked. <br /><br />
        
        <span style="font-weight: bold;">Provision of items:</span> The Pet Owner must provide everything needed to care for their animal. This includes but is not limited to all food (wet, dry or raw food) treats, enrichment, toys, medications, leads, collar, beds, waste disposable (eg poo bags, litter etc). <br class="mb-1"/>
        If anything is required to be replaced or replenished during a booking, the Pet Owner will either provide a debit card or cash to purchase any items needed or completely reimburse PP for the cost of the items plus a 5% service fee, on demand.  <br /><br />
        
        <span style="font-weight: bold;">Pet information:</span> The Pet Owner agrees to provide accurate and up to date information about their pet, including but not limited to any health conditions, dietary restrictions, behavioural issues, and emergency contact details. <br /><br />

        
        <span style="font-weight: bold;">Care and Responsibility:</span> PP will undertake all necessary precautions and reasonable care with animals in its care as well as with your home and contents. PP accepts no responsibility for any loss or damage to any property or any content that occurs while under this contract. PP will attempt to contact you before making a decision on dealing with any issues that may occur. <br /><br /> 
        
        <span style="font-weight: bold;">Veterinary Care:</span> In the unlikely event of the death of a pet during a booking, the Pet Owner acknowledges that PP will do everything within its power and ability.  PP is not responsible for the safety of any pets, for any pre-existing conditions for any pet under its care and is not liable for the death or injury of any pet. PP is authorised to seek any emergency veterinarian assistance needed during the booking, at the cost of the Pet Owner, for any veterinarian chosen by PP if the Pet Owner's appointed veterinarian is unavailable. The term ‘emergency’ is to be interpreted and undertaken at PP's discretion. <br class="mb-1"/>
        If the Pet Owner or the Pet Owner’s emergency contact cannot be contacted in event of an emergency, the Pet Owner authorises PP to take any and all actions reasonably required to obtain veterinary care and/or any other medical assistance and to take any actions recommended by the veterinarian with respect to the relevant pet.  <br class="mb-1"/>
        The Pet Owner agrees to pay, and indemnifies PP against, all costs associated with the emergency, including pet transportation fees and the travel time in the event that an emergency arises. 
        
        <br /><br />
        <span style="font-weight: bold;">Home Access:</span> Once PP has agreed to the booking it will need to be provided with a set of keys. The Pet Owner is responsible for pet-proofing your home, backyard and the security of all fencing, locks and or latches. If the pet escapes from the premises due to poor/faulty security, PP takes no responsibility but will do everything in their power to try and locate your pet and contact you immediately as soon as they become aware of the missing animal. 
        
        <br /><br />
        <span style="font-weight: bold;">Liability and Insurance:</span> PP has public liability insurance to a value of $10,000,000.  This does not cover breeding, training and working animals and PP does not provide, and accepts no liability in relation to, such services. 

        <br /><br />
        <span style="font-weight: bold;">Indemnification:</span> The Pet Owner agrees to indemnify and hold PP harmless from any claims, liabilities, losses, or expenses arising from the Pet Owner's, or the pet’s, actions. 
        
        <br /><br />
        <span style="font-weight: bold;">Termination:</span> Any unpaid services may be cancelled without notice. PP reserves the right to refuse or cancel services if payment is not settled in accordance with these terms. If any payments are made 48 hours after the completion of the booking without prior agreement, a $200 late fee will be payable by the Pet Owner to PP for every day the payment hasn’t been made.  
        
        <br /><br />
        <span style="font-weight: bold;">Disclosure of surveillance devices:</span> The Pet Owner must inform PP of any surveillance equipment, cameras or recording devices both inside and outside the home. 
        
        <br /><br />
        <span style="font-weight: bold;">Images:</span> The Pet Owner gives permission for PP to use images taken of their pets in any social media and website.  
        
        <br /><br />
        <span style="font-weight: bold;">Governing Law:</span> This agreement shall be governed by and constructed in accordance with the laws of New South Wales, Australia.  
        
        <br /><br />
        <span style="font-weight: bold;">Entire Agreement:</span> This agreement contains the entire understanding between the parties and supersedes all prior agreements and understandings.  

        <br /><br />
        <span style="font-weight: bold;">Modifications:</span> Any modifications to this agreement must be made in writing and signed by both parties.  
        
        <br /><br />
        By engaging the service of Personalised Petsittting, the Pet Owner agrees to abide by the terms and conditions.  
        <br /><br />
        Date: {{ `${minDate.getFullYear()}/${minDate.getMonth() + 1}/${minDate.getDate()}` }}

                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        variant="plain"
                                        text="Close"
                                        @click="isActive.value = false"
                                    ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                        </v-dialog>
                    </v-col>
                </v-row>

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
import { day, month } from 'vue-cal/dist/i18n/en.cjs';

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
            selectedContact: '',
            contactMethods: ['Phone', 'Email'],
            howManyPets: '',
            petOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            whatPets: '',
            additionalInfo: '',
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value),
                phone: value => /^\d+( \d+)*$/.test(value),
            },
            formSubmitted: false,
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

            this.formSubmitted = true;

            if (this.$refs.form.validate() && this.dateRange) {

                const formattedDateRange = this.customFormat(this.dateRange);

                const templateParams = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    address: this.address,
                    contactMethod: this.selectedContact,
                    selectedPackage: this.selectedPackage,
                    howManyPets: this.howManyPets,
                    whatPets: this.whatPets,
                    additionalInfo: this.additionalInfo,
                    dateRange: formattedDateRange,
                };

                emailjs.send("service_3uq0j9x", "template_tbhhsvd", templateParams, { publicKey: 'y28Njxa62kEbnjheZ',})
                    .then(() => alert('Booking request sent!'))
                    .catch(error => console.error('Failed to send booking request:', error));
            } else {
                console.log('Form not submitted. Date required');
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