<template>
    <v-container>

        <!----------------------Add unavailable dates through the date picker------------------------>

        <h2>Manage Unavailable dates</h2>

        <vue-date-picker
        class="my-3"
        v-model="newUnavailableDateRange"
        :range="{ noDisabledRange: true, partialRange: false }"
        multiCalendars
        :format="customFormat"
        :disabled-dates="disabledDates"
        :min-date="minDate"
        teleport-center
        ></vue-date-picker>

        <v-btn @click="() => { addUnavailableDates(); }">
            Add Unavailable dates
        </v-btn>

        <!----------------------Show all current unavailable date ranges + button to remove them------------------------>

        <h3 class="my-5">Current Unavailable Dates</h3>

        <v-list style="border-radius: 40px; padding: 20px; margin-bottom: 20px;">

            <v-list-item 
            v-for="(date, index) in arrayOfUnavailableDatesRange" 
            :key="index">

                <v-list-item-content>
                    <v-list-item-title>
                        {{ date }}
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn color="red" @click="() => { removeUnavailableDate(index); }">Remove</v-btn>
                </v-list-item-action>

            </v-list-item>

        </v-list>

        <!----------------------Sign out of admin------------------------>

        <v-btn @click="signOut">Sign out</v-btn>

    </v-container>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { db, addDoc, deleteDoc, collection, query, where, getDocs, orderBy } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';

export default {

    components: {
        VueDatePicker,
    },

    data() {

        return {
            newUnavailableDateRange: { start: null, end: null },
            disabledDates: [],
            unavailableDates: [],
            arrayOfUnavailableDatesRange: [],
            dataOfDisabledDates: [],
            datePickerKey: 0,
            minDate: new Date(),
        };
    },

    methods: {

        formatAddedDate(dateAdding) { //Formats the date by taking the day, month and year out of the object and reformatting it into YYYY-MM-DD

            const day = String(dateAdding.getDate()).padStart(2, '0');
            const month = String(dateAdding.getMonth() + 1).padStart(2, '0'); 
            const year = dateAdding.getFullYear();

            return `${year}-${month}-${day}`;

        },

        customFormat(date) { //Formats the displayed date for the user into DD/MM/YYYY

            const formatDate = (d) => {

                if (d != null) { //Checks if the dates selected != null ensuring the function only occurs with a valid date range

                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0'); 
                const year = d.getFullYear();

                return `${day}/${month}/${year}`;

                }
            };
            
            return `${formatDate(date[0])} - ${formatDate(date[1])}`; //Returns the date range formatted into DD/MM/YYYY - DD/MM/YYYY
        },

        formatToJavascriptObject(dateString) { //Takes the unavailable dates YYYY-MM-DD and formats it into a valid date object

            const [year, month, day] = dateString.split("-").map(Number);
            const dateObject = new Date (year, month - 1, day);

            return dateObject;
        },

        /////////////////////////////////// FETCHING ALL DISABLED DATES ////////////////////////////////////////////////

        async fetchUnavailableDates() {

            function addDays(date, days) { //Adds however many "days" to "date", returning the "newDate" e.g. (today, 5) returns the date 5 days from today

                const newDate = new Date(date);
                newDate.setDate(newDate.getDate() + days);

                return newDate;
            }

            function getDates(startDate, endDate) { //Creates an array of every date including and between the "startDate" to the "endDate" e.g. (today, 2 days from now) returns [today, tomorrow, day after tomorrow]

                let dateArray = new Array();
                let currentDate = startDate;
                while (currentDate <= endDate) {

                    dateArray.push(new Date (currentDate));
                    currentDate = addDays(new Date (currentDate), 1);

                }
                return dateArray;
            }

            const unavailableDates = [];
            const arrayOfUnavailableDatesRange = [];
            const dataOfDisabledDates = [];

            try {

                const q = query(collection(db, 'unavailableDates'), orderBy("startDate", "asc")); //Organises the unavailable dates from firebase into ascending order
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => { //For every date range in firebase, gather the raw data, the dates in YYYY-MM-DD form and the dates as a valid date object

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

                this.disabledDates = unavailableDates; //Disabled dates array of every single disabled date for vue-date-picker to understand e.g. [Date object, Date object, Date object]
                this.arrayOfUnavailableDatesRange = arrayOfUnavailableDatesRange; //Array of all the unavailable dates ranges for the admin to see e.g. ["2025-03-11 to 2025-03-13"]
                this.dataOfDisabledDates = dataOfDisabledDates; //Array of all the firebase date range data e.g. [{startDate: "2025-03-11", endDate: "2025-03-13"}, {startDate: "2025-04-02", endDate: "2025-04-05"}]

            } catch (error) {
                console.error('Error fetching unavailable dates:', error);
            }
        },

        /////////////////////////////////// ADDING NEW UNAVAILABLE DATES ///////////////////////////////////////////////

        async addUnavailableDates() {

            const firstDate = this.formatAddedDate(this.newUnavailableDateRange[0]); //formats the chosen startDate into YYYY-MM-DD
            const lastDate = this.formatAddedDate(this.newUnavailableDateRange[1]); //formats the chosen endDate into YYYY-MM-DD

            if (firstDate && lastDate) {

                try {
                    await addDoc(collection(db, 'unavailableDates'), { // Adds the startDate and endDate to firebase

                        startDate: firstDate,
                        endDate: lastDate,
                    });

                    this.newUnavailableDateRange = { start: null, end: null}; // Resets the dateRange

                    setTimeout(() => {
                        this.fetchUnavailableDates(); // Updates the unavailable dates
                    }, 500)  

                } catch (error) {
                    console.error('Error adding unavailable dates:', error);
                }
            } else {

                alert('Please select a valid date range.');
            }
        },

        //////////////////////////////////////////// REMOVING UNAVAILABLE DATES /////////////////////////////////////////////////////

        async removeUnavailableDate(index) {

            const dateToRemove = this.dataOfDisabledDates[index]; // Finds the correct date range to remove by the index given to that specific date range
            
            try {

                const dateQuery = query(collection(db, 'unavailableDates'), // Creates a query assigning the startDate and endDate to the respect date range
                    where('startDate', '==', dateToRemove.startDate),
                    where('endDate', '==', dateToRemove.endDate));

                const snapshot = await getDocs(dateQuery); // Finds the corresponding date range in firebase

                snapshot.forEach(async (doc) => {

                    await deleteDoc(doc.ref); // Deletes the date range document from the firebase data
                });

                setTimeout(() => {
                    this.fetchUnavailableDates(); // Updates the unavailable dates
                }, 500)  

            } catch (error) {
                console.error('Error removing unavailable date', error);
            }
        },

        async signOut() {
            const auth = getAuth(); // Gets the details of the person signed in

            try {
                await signOut(auth); // signs out the current user
                console.log('User successfully signed out');

                this.$router.push('/login'); // Switches the route to the login page
            } catch(error) {
                console.log('Error signing user out', error);
            }
        },
    },
    created() {
        this.fetchUnavailableDates();
    },
};

</script>