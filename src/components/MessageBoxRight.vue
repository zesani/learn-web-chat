<template lang="html">
  <div class="">
    <div class="media-right">
      <img :src="historyChat.photoURL" class="img-circle img-sm" alt="Profile Picture">
    </div>
    <div class="media-body pad-hor speech-right">
      <div class="speech">
        <a href="#" class="media-heading">{{historyChat.displayName}}</a>
        <p>{{historyChat.message}}</p>
        <p class="speech-time">
        <i class="fa fa-clock-o fa-fw"></i>{{historyChat.time}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['historyChat']
}
</script>

<style lang="css">
</style>
