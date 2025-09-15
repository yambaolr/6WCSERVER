<template>
    <h2>Admin Form</h2>
        <hr>
            <form action="/postAdmin" enctype="multipart/form-data" method="post">
                <label for="adminId">Admin ID: </label>
                <input type="text" id="adminId" name="adminId" class="inp">
                <br />

                <label for="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" class="inp">
                <br />

                <label for="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" class="inp">
                <br />

                <label for="department">Department: </label>
                <input type="text" id="department" name="department" class="inp">
                <br />

                <label for="file" >Select File: </label>
                <input type="file" id="file" name="file" class="inp">
                <br />
                

                <input type="submit" value="Submit" class="submit">
            </form>
</template>

<script></script>

<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #2c2c2c;
    color: #e2e2e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0;
}

form {
    background-color: #3c3c3c;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 380px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    display: block;
    margin: 1em 0 0.5em 0;
    font-weight: bold;
}

label:first-of-type {
    margin: 0 0 0.5em 0 !important;
}

.inp {
    width: 100%;
    max-width: 358px;
    padding: 10px;
    background-color: #2b2b2b;
    border: 1px solid #555;
    color: #f0f0f0;
    border-radius: 4px;
}

.submit {
    margin-top: 2em;
    align-content: center;
    width: 100%;
    padding: 10px;
    background-color: #66aaff;
    border: none;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
}

.submit:hover {
    background-color: #5599dd;
}

hr {
    margin: 1em 0;
    width: 80%;
    margin-bottom: 2em;
}

.links {
    text-align: center;
}

.links a {
    color: #e2e2e2;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 800;
}

.links a:hover {
    color: #f39c12;
}

ul {
    list-style-type: none;
    padding: 0 !important;
}

ul li {
    padding: 1em;
}
</style>