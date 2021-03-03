import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { SPOTIFY_CONFIG } from '../config';
import { Spotify } from '../lib/apis/Spotify';
import styles from '../styles/pages/Home.module.css';
export default function Home(props: { url: string }) {
	return (
		<Layout>
			<h1>Here's What You're Listening At</h1>
			<p>
				Put the tunes you're currently listening to
				<br />
				on Spotify on your Slack status
				<br />
				<p>
					<i>Currently available in closed beta for Hack Club</i>
				</p>
			</p>
			<a href={props.url}>
				<button className={`${styles.darkbutton} block`}>LOGIN WITH SPOTIFY &rarr;</button>
			</a>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const spotify = new Spotify(SPOTIFY_CONFIG);

	return {
		props: {
			url: spotify.generateAuthorizationLink(['user-read-currently-playing'])
		}
	};
};
