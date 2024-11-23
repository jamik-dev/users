export default defineAppConfig({
	ui: {
		primary: 'purple',
		button: {
			base: 'duration-200 ease-in-out !shadow-none',
			rounded: 'rounded-lg',
			variant: { solid: 'bg-primary-800 hover:bg-primary-600' }
		},
		modal: {
			overlay: {
				background: 'bg-black/[.5] backdrop-blur-sm'
			},
			shadow: '',
			rounded: 'rounded-2xl'
		},
		divider: {
			border: {
				base: 'border-grey-border'
			}
		},
		pagination: {
			wrapper: 'w-fit space-x-1 px-3 py-2 rounded-xl bg-brown/[.1]',
			rounded: 'rounded-lg first:rounded-lg last:rounded-lg',
			base: 'h-7 w-7 flex items-center justify-center ring-0 bg-transparent disabled:bg-transparent disabled:text-grey-0 hover:bg-brown/[.2]',
			default: {
				activeButton: { class: '!bg-brown' },
				inactiveButton: { class: 'hover:bg-brown/[.2]' },
				firstButton: { class: 'disabled:bg-transparent disabled:text-grey-0 hover:bg-brown/[.2]' },
				lastButton: { class: 'disabled:bg-transparent disabled:text-grey-0 hover:bg-brown/[.2]' }
			}
		},
		table: {
			tbody: 'divide-grey-border tbody-striped',
			divide: 'divide-grey-border',
			th: { size: 'text-base tracking-wide' },
			td: { font: 'font-medium' }
		},
		notifications: {
			position: 'top-0 end-0',
			wrapper: 'justify-start z-[55] pointer-events-none',
		},
		notification: {
			position: 'top-0 right-0',
		},
	}
});
