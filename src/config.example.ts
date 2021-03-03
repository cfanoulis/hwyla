// Grab them from https://developer.spotify.com/dashboard/applications/
// Don;t forget to add http://localhost:3000/spotify/redirect as a valid redirect URI!
const SPOTIFY_CLIENT_ID = '';
const SPOTIFY_CLIENT_SECRET = '';

// Unused, for now
const SLACK_CLIENT_ID = '';
const SLACK_CLIENT_SECRET = '';

export const SPOTIFY_CONFIG = {
	clientId: SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID!,
	clientSecret: SPOTIFY_CLIENT_SECRET || process.env.SPOTIFY_CLIENT_SECRET!,
	redirectUri: process.env.NODE_ENV === 'production' ? 'https://hwyla.hackropolis.club/spotify/redirect' : 'http://localhost:3000/spotify/redirect'
};

export const SLACK_CONFIG = {
	clientId: SLACK_CLIENT_ID || process.env.SLACK_CLIENT_ID!,
	clientSecret: SLACK_CLIENT_SECRET || process.env.SLACK_CLIENT_SECRET!,
	redirectUri: process.env.NODE_ENV === 'production' ? 'https://hwyla.hackropolis.club/slack/redirect' : 'http://localhost:3000/slack/redirect'
};
