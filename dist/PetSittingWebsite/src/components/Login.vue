<template>
    <v-container>
        <v-form ref="loginForm" v-model="valid" lazy-validation>
            <v-text-field
                v-model="email"
                label="Email"
                :rules="[rules.required, rules.email]"
                required
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Password"
                :type="'password'"
                :rules="[rules.required]"
                required
            ></v-text-field>

            <v-btn @click="login" :disabled="!valid">Login</v-btn>

            <v-alert
                v-if="errorMessage"
                type="error"
                dismissible
            >
                {{  errorMessage }}
            </v-alert>
        </v-form>
    </v-container>
</template>

<script>
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '@/firebase';

export default {
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            errorMessage: null,
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value) || 'Invalid email.',
            },
        };
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);

                this.$router.push('/admin');
            } catch (error) {
                this.errorMessage = error.message;
            }
        }
    }
};

</script>