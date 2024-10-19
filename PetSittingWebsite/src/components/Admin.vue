<template>
    <v-container>
        <h2>Manage Unavailable dates</h2>

        <vue-date-picker
            v-model="newUnavailableDateRange"
            :range="{ noDisabledRange: true }"
            multiCalendars
            :format="customFormat"
            :disabled-dates="disabledDates"
            :min-date="minDate"
        ></vue-date-picker>

        <v-btn @click="addUnavailableDates">Add Unavailable dates</v-btn>

        <h3 class="my-5">Current Unavailable Dates</h3>
        <v-list>
            <v-list-item v-for="(date, index) in arrayOfUnavailableDatesRange" :key="index">
                <v-list-item-content>
                    <v-list-item-title>
                        {{ date }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn color="red" @click="removeUnavailableDate(index)">Remove</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-btn @click="signOut">Sign out</v-btn>
    </v-container>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { db, addDoc, deleteDoc, collection, query, where, getDocs } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';

export default {
    components: {
        VueDatePicker,
    },
    data() {
        return {
            newUnavailableDateRange: { start: null, end: null },
            unavailableDates: [],
            arrayOfUnavailableDatesRange: [],
            disabledDates: [],
            datePickerKey: 0,
            minDate: new Date(),
        };
    },

    methods: {

        formatAddedDate(dateAdding) {
            const day = String(dateAdding.getDate()).padStart(2, '0');
            const month = String(dateAdding.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const year = dateAdding.getFullYear();
            return `${year}-${month}-${day}`;
        },

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
            let arrayOfUnavailableDatesRange = [];
            let dataOfDisabledDates = [];
            try {
                const querySnapshot = await getDocs(collection(db, 'unavailableDates'));
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const firstDate = data.startDate;
                    const lastDate = data.endDate;
                    const startDate = (this.formatToJavascriptObject(data.startDate))
                    const endDate = (this.formatToJavascriptObject(data.endDate))

                    if (startDate && endDate) {

                        const datesBeingRemoved = getDates(startDate, endDate);

                        unavailableDates.push(...datesBeingRemoved);

                        arrayOfUnavailableDatesRange.push(`${ firstDate } to ${ lastDate }`);
                        dataOfDisabledDates.push(data);

                    }
                });
                this.disabledDates = unavailableDates;
                this.arrayOfUnavailableDatesRange = arrayOfUnavailableDatesRange;
                this.dataOfDisabledDates = dataOfDisabledDates;
            } catch (error) {
                console.error('Error fetching unavailable dates:', error);
            }
        },

        // ADDING NEW UNAVAILABLE DATES ///////////////////////////////////////////////

        async addUnavailableDates() {
            console.log('yurrr', this.formatAddedDate(this.newUnavailableDateRange[0]))
            const firstDate = this.formatAddedDate(this.newUnavailableDateRange[0]);
            const lastDate = this.formatAddedDate(this.newUnavailableDateRange[1]);
            if (firstDate && lastDate) {
                try {
                    await addDoc(collection(db, 'unavailableDates'), {
                        startDate: firstDate,
                        endDate: lastDate,
                    });

                    this.unavailableDates.push({
                        start: firstDate,
                        end: lastDate,
                    });
                    this.newUnavailableDateRange = { start: null, end: null};
                } catch (error) {
                    console.error('Error adding unavailable dates:', error);
                }
            } else {
                alert('Please select a valid date range.');
            }
        },

        // REMOVE UNAVAILABLE DATES /////////////////////////////////////////////////////

        async removeUnavailableDate(index) {
            const dateToRemove = this.dataOfDisabledDates[index];
            console.log(dateToRemove.startDate);
            try {
                const dateQuery = query(collection(db, 'unavailableDates'),
                    where('startDate', '==', dateToRemove.startDate),
                    where('endDate', '==', dateToRemove.endDate));
                const snapshot = await getDocs(dateQuery);
                snapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                });
                this.unavailableDates.splice(index, 1);
                this.arrayOfUnavailableDatesRange.splice(index,1);

            } catch (error) {
                console.error('Error removing unavailable date', error);
            }
        },

        async signOut() {
            const auth = getAuth();

            try {
                await signOut(auth);
                console.log('User successfully signed out');

                this.$router.push('/login');
            } catch(error) {
                console.log('Error signing user out', error);
            }
        }
    },
    created() {
        this.fetchUnavailableDates();
    },
};

</script>