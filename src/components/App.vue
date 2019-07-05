<template>
  <div>
    <div class="">
      <router-view>
      <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
      </nav>
      </router-view>

    </div>
  </div>
</template>

<script>
   export default {

   }
</script>
