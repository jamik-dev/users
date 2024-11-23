<template>
  <main>
    <ul class="text-white">
      <li @click="navigateTo(`/users/${user.id}`)" v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </main>
</template>

<script setup>
// importing store
import { useUsers } from '~/store/users';

// users global
const usersStore = useUsers();

// users store DATAS
const { users } = storeToRefs(usersStore);

// fetching users
await useAsyncData('users', () => usersStore.getUsers());
</script>