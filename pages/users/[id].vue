<template>
	<main class="min-h-dvh flex flex-col items-center justify-center">
    <UModal v-model="mapModal" :ui="{ base: 'sm:!max-w-[1000px]' }">
			<div class="w-full p-3 space-y-3 sm:p-6 sm:space-y-6">
				<div class="flex items-center justify-between">
					<h2 class="title">Location</h2>
					<UButton color="gray" :ui="{ rounded: 'rounded-full' }" variant="ghost" icon="i-heroicons-x-mark-20-solid"
						class="-my-1" @click="mapModal = false" />
				</div>
				<UDivider />
				<div class="h-[500px] rounded-2xl overflow-hidden">
          <iframe width="100%" height="100%" loading="lazy" class="outline-none border-none" referrerpolicy="no-referrer-when-downgrade" :src="`https://maps.google.com/maps?q=${user?.address.geo.lat},${user?.address.geo.lng}&hl=en-US&z=8&amp;output=embed`"></iframe>
        </div>
				<UDivider />
				<div class="flex items-center justify-end gap-x-3">
					<UButton @click="
						mapModal = false;" class="w-28 justify-center" size="xl" label="Close" variant="solid" :ui="{ rounded: 'rounded-lg' }" />
				</div>
			</div>
		</UModal>
		<section class="container my-3 space-y-4">
      <div class="flex gap-x-4 justify-between">
        <UButton class="flex-1 sm:flex-none sm:w-1/4" variant="solid" size="lg" icon="i-heroicons-arrow-left" to="/users" label="Go Back" />
        <UButton @click="mapModal = true" class="flex-1 sm:flex-none sm:w-1/4 justify-end" variant="solid" size="lg" trailing-icon="i-heroicons-map-pin" label="View on Map" />
      </div>
			<div class="card">
				<div>
					<div class="px-4 sm:px-0">
						<h3 class="font-semibold text-lg">User Information</h3>
						<p class="text-sm">Personal details and location.</p>
					</div>
					<div class="mt-6 border-t border-gray-100">
						<dl class="divide-y divide-gray-100">
							<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Full name</dt>
								<dd class="text-sm/6 sm:col-span-2">{{ user?.name }}</dd>
							</div>
							<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Username</dt>
								<dd class="text-sm/6 sm:col-span-2">{{ user?.username }}</dd>
							</div>
							<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Email address</dt>
								<dd class="text-sm/6 sm:col-span-2">{{ user?.email }}</dd>
							</div>
							<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Phone number</dt>
								<dd class="text-sm/6 sm:col-span-2">{{ user?.phone }}</dd>
							</div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Website</dt>
								<dd class="text-sm/6 sm:col-span-2"><ULink class="hover:underline duration-200 hover:text-purple" target="_blank" :to="`https://${ user?.website }`">{{ user?.website }}</ULink></dd>
							</div>
							<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="font-medium text-sm">Company</dt>
								<dd class="text-sm/6 sm:col-span-2">
                  <p>{{ user?.company.name }}</p>
                  <p>{{ user?.company.bs }}</p>
                  <p>{{ user?.company.catchPhrase }}</p>
                </dd>
							</div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt class="text-sm/6 font-medium text-gray-900">Address</dt>
								<dd class="text-sm/6 sm:col-span-2">
                  <p>{{ user?.address.city }}</p>
                  <p>{{ user?.address.street }}</p>
                  <p>{{ user?.address.suite }}</p>
                  <p>{{ user?.address.zipcode }}</p>
                </dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
// importing store
import { useUsers } from '~/store/users';

// users global
const usersStore = useUsers();

// route global
const route = useRoute();

// page title
useHead({
	title: () => `User | ${route.params.id}`
});

// users store DATAS
const { user } = storeToRefs(usersStore);

// fetching users
useAsyncData('userId', () => usersStore.getUser(parseInt(route.params.id as string)));

// modal
const mapModal = ref(false);
</script>
