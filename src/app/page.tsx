import Button from '@/components/ui/Button';

export default function Home() {
	return (
		<main className="">
			<Button
				buttonProps={{
					type: 'submit'
					// type="submit"
				}}
				variant="secondary"
				className=""
			>
				Hello
			</Button>
		</main>
	);
}
