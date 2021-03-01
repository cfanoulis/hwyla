import styles from '../styles/components/Layout.module.css';
const Layout: React.FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className="fixed block main-block">{children}</div>
			</main>

			<footer className={styles.footer}>
				<a href="https://hackropolis.club?utm_source=hwyla&utm_medium=footer&utm_campaign=hywla" target="_blank" rel="noopener noreferrer">
					<img src="/orpheus_flag.svg" alt="Blue Hack Club flag" className={styles.logo} /> A Hackropolis project
				</a>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
};

export default Layout;
