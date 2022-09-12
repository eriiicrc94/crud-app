<template>
  <nav>
    <router-link to="/register">REGISTER</router-link>
    <router-link to="/show">EMPLOYEES</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
body{
  background-color: #F3F2F2 !important;
}

nav {
  padding: 30px;
  text-align: center;
  background-color: #333;
  margin-bottom: 5%;
}

nav a {
  font-weight: bold;
  color: white;
  margin: 10%;
  text-decoration: none; 
  padding: 14px 16px;
  border-radius: 10px;
  transition: 0.2s;
}

nav a:hover {
  transition: 0.2s;
  background-color: #ddd;
  color: black !important;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #ddd;
  color: black !important;
}

h1 {
    margin-bottom: 2rem !important;
    @media (max-width: 480px) {
        text-align: center;
    }
}

.align-right {
  text-align: right;
}

button {
  margin-bottom: 1.5rem;
  min-width: 5rem;
}

</style>
