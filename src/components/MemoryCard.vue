<template>
  <div class="card">
    <h1>Hey {{card.id}}</h1>
  </div>
</template>

<script>
export default {
  props: ['card'],
  name: 'MemoryCard'
}
</script>

<style>

</style>