<script setup lang="ts">
</script>

<template>
    <div class="form-container">
        <h3>Logga in</h3>
        <form action="/action_page.php">
            <label for="email">Email</label><br>
            <input type="email" id="email" name="email" placeholder="exempel@mail.se"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form> 
    </div>
</template>

<style scoped lang="scss">
    h3 {
        color: #F1F1F1;
        font-family: Arial;
        text-align: center;
    }

    .form-container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    form {
        color: #F1F1F1;
        font-family: Verdana;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    input[type=email], select {
        background: transparent;
        width: 100%;
        padding: 12px 0px;
        margin: 8px 0;
        display: inline-block;
        border: none;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;
        color: #F1F1F1;
    }

    
</style>