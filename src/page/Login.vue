<template lang="html">
  <div class="">
    <button type="button" name="button" @click="loginWithFacebook">Login with Facebook</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['loginWithFacebook']
}
</script>

<style lang="css">
</style>
