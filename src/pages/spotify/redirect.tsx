import { serialize } from 'cookie';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from '../../components/Layout';
import { SPOTIFY_CONFIG } from '../../config';
import { Spotify } from '../../lib/apis/Spotify';

export default function SpotifyRedirect(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout>
			<h1>Ruh-roh, we encountered an error.</h1>
			<h3>{props.error ?? 'Suspiciously empty string'}</h3>
			<br />
			{props.more && <p>{props.more}</p>}
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps<{ error: string; more?: string }> = async (ctx) => {
	const { res, query } = ctx;
	const code = typeof query.code === 'undefined' ? false : Array.isArray(query.code) ? query.code[0] : query.code;
	if (!code) {
		return {
			props: {
				error: 'No code was provided'
			}
		};
	}

	try {
		const spotify = new Spotify(SPOTIFY_CONFIG);
		const token = await spotify.exchangeCodeForToken(code);
		res.setHeader('Set-Cookie', serialize('spotifyToken', token.access_token, { httpOnly: true, expires: new Date(Date.now() + 3300) }));

		return {
			redirect: {
				destination: '/dashboard',
				permanent: false
			}
		};
	} catch (error) {
		return {
			props: {
				error: 'Issue while talking to Spotify',
				more: error
			}
		};
	}
};
