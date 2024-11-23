<template>
	<main class="h-dvh flex items-center justify-center">
		<section class="container">
			<div class="bg-white rounded-2xl pb-3">
				<div class="flex px-3 py-3.5 border-b border-grey-border">
					<UInput v-model="filterSearch" variant="outline" placeholder="Filter users..." :ui="{color: {white: {outline: 'ring-gray-200 shadow-none'}}}" />
				</div>
				<UTable @select="selectUser" :columns="columns" :rows="usersFiltered">
					<template #website-data="{ row }">
						<ULink class="hover:underline duration-200 hover:text-purple" :to="`https://${row.website}`" target="_blank" @click.stop>
							{{ row.website }}
						</ULink>
					</template>
				</UTable>
				<UPagination
					class="mt-4"
					:first-button="{ icon: 'i-heroicons-chevron-double-left-20-solid', color: 'gray' }"
					:last-button="{ icon: 'i-heroicons-chevron-double-right-20-solid', trailing: true, color: 'gray' }"
					:total="10"
					show-first
					show-last
					v-model="pagination"
					:ui="{
						wrapper: 'mx-auto' }" />
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
// importing store
import { useUsers } from '~/store/users';

// page title
useHead({
	title: 'Users'
});

// users global
const usersStore = useUsers();

// users store DATAS
const { users } = storeToRefs(usersStore);

// fetching users
useAsyncData('users', () => usersStore.getUsers());

// notification
const toast = useToast();
onMounted(() => {
	toast.add({
		id: 'success',
		color: 'green',
		title: 'Successfully fetched!',
		description: 'Users has been succesfully fetched!',
		icon: 'i-heroicons-check-circle',
		timeout: 3000
	});
})

// table
const filterSearch = ref('');

const columns = [
	{
		key: 'id',
		label: '#',
		class: 'w-12'
	},
	{
		key: 'name',
		label: 'Name'
	},
	{
		key: 'username',
		label: 'Username'
	},
	{
		key: 'phone',
		label: 'Phone'
	},
	{
		key: 'website',
		label: 'Website'
	}
];

const usersFiltered = computed(() => {
	const filtered = users.value.map((user: UserResponse) => {
		return {
			id: user.id,
			name: user.name,
			username: user.username,
			phone: user.phone,
			website: user.website
		} as Rows;
	});

	if (!filterSearch.value) {
		return filtered;
	}

	return filtered.filter((person: Rows) => {
		return Object.values(person).some((value) => {
			return String(value).toLowerCase().includes(filterSearch.value.toLowerCase());
		});
	});
});

const selectUser = (row: Rows) => {
	navigateTo(`/users/${row.id}`);
};

// pagination
const pagination = ref(1);
</script>
