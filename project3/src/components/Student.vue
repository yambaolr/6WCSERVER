<template>
    <div class="page">
      <h2>Student Form</h2>
            <form action="http://localhost:5000/getStudent" method="get">
                <label for="studentId" >Student ID: </label>
                <input type="text" id="studentId" name="studentId" class="inp">
                <br />

                <label for="firstName" >First Name: </label>
                <input type="text" id="firstName" name="firstName" class="inp">
                <br />

                <label for="lastName" >Last Name: </label>
                <input type="text" id="lastName" name="lastName" class="inp">
                <br />

                <label for="section" >Section: </label>
                <input type="text" id="section" name="section" class="inp">
                <br />

                <input type="submit" value="Submit" class="submit">
        </form>
  </div>

            
</template>

<script></script>

<style>
</style>