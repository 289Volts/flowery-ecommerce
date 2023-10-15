import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="">
			<h1 className="text-desktopHeading1">Hello world</h1>
			<Button
				variant="primary"
				className=""
			>
				Hello
			</Button>
		</main>
	);
}
