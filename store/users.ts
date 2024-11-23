import { defineStore } from 'pinia';

export const useUsers = defineStore('users', () => {
  const nuxtApp = useNuxtApp();
	const users = ref<UserResponse[]>([]);
  const user = ref<UserResponse>();

	async function getUsers() {
		try {
			let data: UserResponse[] = await $fetch(nuxtApp.$config.public.BASE_URL + '/users', {
				method: 'GET'
			});

      if(data.length) {
        users.value = data;
        return { data }
      }
		} catch (error) {
			console.log('error', error);
		}
	}

  async function getUser(id: number) {
		try {
			let data: UserResponse[] = await $fetch(nuxtApp.$config.public.BASE_URL + '/users', {
				method: 'GET',
				query: {
          id
        }
			});

      if(data.length) {
        user.value = data[0];
        return { data }
      }
		} catch (error) {
			console.log('error', error);
		}
	}


	return {
    users,
    user,
    getUsers,
    getUser
	};
});
