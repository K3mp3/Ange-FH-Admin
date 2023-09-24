<script setup lang="ts">
    import { computed, ref } from "vue";
    import { useFormStore } from "../../stores/store";
    import { registerUser } from "../../services/userService"


    const formOpen = ref(false);
    const form = useFormStore();
    const email = ref("");
    const password = ref("");

    function showRegisterForm() {
        formOpen.value = true;
        form.formIsOpen = true;
        form.changeFormValue();
    }

    const newUser = computed(() => {
        return {
            email: email.value,
            password: password.value
        };
    });

    async function handleRegistration() {
    try {
        const registeredUser = await registerUser(newUser.value);
    } catch (error) {
        console.log("Error handling users:", error);   
    }
}

    function sendUserData() {
        console.log(email.value, password.value);
        handleRegistration();
    }
</script>

<template>
    <div class="create-account-parent-container">
        <div class="form-container">
            <div class="first-message" :class="{ hide: formOpen === true }">
                <h3>Hejsan!</h3>
            <p>
                Klicka på knappen nedanför för att registrera ditt konto
            </p>
                <button type="submit" @click="showRegisterForm">Registrera dig</button>
            </div>

            <div class="register-form" v-if="formOpen">
                <h3>Skapa konto</h3>
                <form @submit.prevent="sendUserData">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Exempel@mail.se" class="text-input" v-model="email">
                    
                    <label for="password">Lösenord:</label>
                    <input type="password"  name="password" placeholder="Lösenord"  class="text-input" v-model="password">
                    <button type="submit">Skapa konto</button>
                </form> 
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .create-account-parent-container {
        width: 100%;
        padding: 20px;
        border-radius: 20px;
        background-color: #ff7b0f;
        display: flex;
        align-items: center;

        .form-container {
            max-width: 260px;
            margin: auto;

            .first-message {
                display: flex;
                flex-direction: column;
                gap: 40px;
            }

            .hide {
                display: none;
            }

            h3 {
                color: #F1F1F1;
                font-family: Arial;
                font-size: 1.5rem;
                font-weight: 600;
            }

            p {
                color: #F1F1F1;
                font-family: Verdana;
                font-size: 1.1rem;
                font-weight: 400;
            }

            button {
                padding: 10px 0;
                border: none;
                background-color: #F1F1F1;
                border: 1px solid #F1F1F1;
                font-family: Verdana;
                border-radius: 20px;

                &:hover {
                    transition: all 0.2s ease-in-out;
                    background: transparent;
                    cursor: pointer;
                    color: #F1F1F1;
                }
            }

            .register-form {
                width: 260px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 50px;

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
                    border-bottom: 1px solid #F1F1F1;
                    box-sizing: border-box;
                    color: #F1F1F1;
                    margin-bottom: 30px;
                }

                input:focus, textarea:focus, select:focus {
                    outline: none;
                    transition: all 0.2s ease-in-out;
                    border-bottom: 1px solid #ff7b0f;
                }
            }
        }
    }
</style>