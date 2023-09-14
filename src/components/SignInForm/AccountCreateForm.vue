<script setup lang="ts">
</script>

<template>
    <div class="create-account-parent-container">
        <div class="form-container">
            <h3>Hejsan!</h3>

            <h6>
                skriv in din mailadress och lösenord i rutan till höger
                och klicka sedan på knappen Registrera dig
            </h6>

            <button type="submit">Registrera dig</button>
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
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        
        h3 {
            color: #F1F1F1;
            font-family: Arial;
            font-size: 1.5rem;
            font-weight: 600;
        }

        h6 {
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
    }
</style>