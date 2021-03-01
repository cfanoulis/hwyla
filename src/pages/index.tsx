import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css';
export default function Home() {
	return (
		<Layout>
			<h1>Here's What You're Listening At</h1>
			<p>
				Put the tunes you're currently listening to
				<br />
				on Spotify on your Slack status
			</p>
			<button className={`${styles.darkbutton} block`}>LOGIN WITH SPOTIFY</button>
		</Layout>
	);
}
