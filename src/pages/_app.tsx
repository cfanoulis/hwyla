import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import '../styles/globals.css';
import '../styles/vendor/Blocks.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CookiesProvider>
			<Component {...pageProps} />
		</CookiesProvider>
	);
}

export default MyApp;
