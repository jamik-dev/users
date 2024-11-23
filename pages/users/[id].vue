<template>
  <main>
    <pre>
      {{ user }}
    </pre>
  </main>
</template>

<script setup>
// importing store
import { useUsers } from '~/store/users';

// users global
const usersStore = useUsers();

// route global
const route = useRoute();

// users store DATAS
const { user } = storeToRefs(usersStore);

// fetching users
await useAsyncData('userId', () => usersStore.getUser(route.params.id));
</script>