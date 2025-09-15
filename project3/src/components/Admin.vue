<template>
    <div class="page">
      <h2>Admin Form</h2>
        <form action="http://localhost:5000/postAdmin" enctype="multipart/form-data" method="post">
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
    </div>
</template>

<script></script>

<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #2c2c2c;
    color: #e2e2e2;
    height: 100vh;
    margin: 0;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  min-width: 1200px;
}

form {
    background-color: #3c3c3c;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 380px;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
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

</style>