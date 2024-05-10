<template>
    <div>
     <v-btn @click="redirect">Pay</v-btn>  
    </div>
</template>

<script>

import { loadStripe } from "@stripe/stripe-js"
import { onMounted } from 'vue'

export default {
    setup() {
        let stripe = null;

        onMounted(async () => {
            stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
        })

        function redirect() {}
        return { redirect };
    }
};

</script>