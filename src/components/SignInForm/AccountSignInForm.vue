<script setup lang="ts">
    import { RouterLink } from "vue-router"
    import { computed, onMounted, ref } from "vue";
    import { useFormStore } from "../../stores/store";
    import { signInUser } from "@/services/userService";
    import { useSignInStore } from "@/stores/signIn";
import AccountWriteToken from "./AccountWriteToken.vue";

    const formIsOpen = computed(() => useFormStore().formIsOpen);
    const signedIn = computed(() => useSignInStore().singedIn)
    const email = ref("");
    const password = ref("");
    const isSignedIn = ref(false)

    const newUser = computed(() => {
        return {
            email: email.value,
            password: password.value,
        };
    });

    async function handleSignIn() {
        try {
            const response = await signInUser(newUser.value);
            console.log(signedIn.value);
            if (signedIn.value) {
                isSignedIn.value = true;
            }
        } catch (error) {
            console.log("Error handling users:", error); 
        }
    }
</script>

<template>
    <div class="form-parent-container" v-if="!formIsOpen">
        <div class="form-container">
            <h3>Logga in</h3>
            <span>Har du inget konto?<router-link to="/" class="router-link">Skapa ett här</router-link></span> 
            <form @submit.prevent="handleSignIn">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Exempel@mail.se" class="text-input" v-model="email">
                
                <label for="password">Lösenord:</label>
                <input type="password"  name="password" placeholder="Lösenord"  class="text-input" v-model="password">
                <button type="submit">Skicka magic link</button>
            </form> 
        </div>
    </div>
</template>

<style scoped lang="scss">

    .form-parent-container {
        width: 100%;
        padding: 20px;

        .form-container {
            max-width: 260px;
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: 50px;

            h3 {
                color: #F1F1F1;
                font-family: Arial;
                font-size: 1.5rem;
                font-weight: 600;
                background: -webkit-linear-gradient(0deg, rgba(255, 123, 15,1) 0%, rgba(128,0,255,1) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            span {
                display: flex;
                flex-direction: column;
                color: #F1F1F1;
                font-family: Verdana;
                line-height: 1.5rem;

                .router-link {
                    text-decoration: none;
                    color: #F1F1F1;

                    &:hover {
                        transition: all 0.2s ease-in-out;
                        color: #F1F1F1;
                    }
                }
            }

            form {
                color: #F1F1F1;
                font-family: Verdana;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .text-input {
                background: transparent;
                width: 100%;
                padding: 12px 10px;
                display: inline-block;
                border: none;
                border-bottom: 1px solid #292929;
                box-sizing: border-box;
                color: #F1F1F1;
                margin-bottom: 30px;
            }

            input:focus, textarea:focus, select:focus {
                outline: none;
                transition: all 0.2s ease-in-out;
                border-bottom: 1px solid #ff7b0f;
            }

            button {
                padding: 10px 0;
                border: none;
                background-color: #F1F1F1;
                /* color: #F1F1F1; */
                font-family: Verdana;
                border-radius: 20px;

                &:hover {
                    transition: all 0.2s ease-in-out;
                    background: #ff7b0f;
                    cursor: pointer;
                    color: #F1F1F1;
                }
            }
        }
    }
</style>