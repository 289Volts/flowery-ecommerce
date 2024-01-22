import CardLink from '@/components/shared/CardLink';
import { createClient } from 'contentful';

const Home = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID ?? '',
		accessToken: process.env.CONTENTFUL_API_KEY ?? ''
	});

	const res = await client.getEntries({ content_type: 'home' });

	console.log(res.items[0].fields);
	// console.log(typeof res.items);

	return (
		<main className="">
			<CardLink
				href="/flowers"
				linkText="See all flowers"
				textContent="Flowers"
			/>
		</main>
	);
};

export default Home;
