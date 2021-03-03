import type { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Layout from '../components/Layout';

export default function Dashboard({ name }: { name: string }) {
	return (
		<Layout>
			<h1>Here's What You're Listening At</h1>
			<br />
			<p>
				Hi {name}, thanks for your interest!
				<br />
				HWYLA is currently under development, and so we can't operate yet. Fear not, your data has not been saved anywhere, and the
				authorization you provided us with will expire in 6 minutes.
			</p>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { spotifyToken } = parseCookies(ctx) as { spotifyToken: string };

	fetch('https://api.spotify.com/v1/me', {
		headers: {
			Authorization: `Bearer ${spotifyToken}`
		}
	});

	return {
		props: {
			name: 'Charalampos Fanoulis'
		}
	};
};
