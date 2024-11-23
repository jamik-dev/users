<template>
  <main>
  </main>
</template>

<script>
definePageMeta({
  middleware: [
    function (to, from) {
      if(to.path === '/') return navigateTo('/users');
    },
  ]
})
</script>