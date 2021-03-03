import { stringify } from 'querystring';
import type { SpotifyOauthData } from '../types/Spotify';

export class Spotify {
	public clientId: string;
	public redirectUri: string;
	private clientSecret: string;

	public constructor(props: { clientId: string; clientSecret: string; redirectUri: string }) {
		this.clientId = props.clientId;
		this.clientSecret = props.clientSecret;
		this.redirectUri = props.redirectUri;
	}
	public generateAuthorizationLink(scopes: string[]) {
		return `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientId}&scope=${encodeURIComponent(
			scopes.join(' ')
		)}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
	}
	public async exchangeCodeForToken(code: string) {
		const req = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			body: stringify({
				grant_type: 'authorization_code',
				redirect_uri: this.redirectUri,
				code
			}),
			headers: {
				Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		if (!req.ok) {
			const txt = await req.text();
			throw `Spotify returned a ${req.status} on oAuth, with txt ${txt}`;
		}

		return (req.json() as unknown) as SpotifyOauthData;
	}
}
