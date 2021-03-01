import NextHead from 'next/head';
import type React from 'react';
interface HeadProps {
	author: string;
	title: string;
	description: string;
	image: string;
	color: string;
}

const Head: React.FC<HeadProps> = ({
	author = 'Hackropolis', // site name
	title = "Here's What you're Listening At", // page title
	description,
	image,
	color = '#1d7c00',
	children
}) => (
	<NextHead>
		<meta key="og_locale" property="og:locale" content="en_US" />
		<meta key="og_type" property="og:type" content="website" />
		<meta key="og_site" property="og:site_name" content={author} />
		<meta key="tw_site" name="twitter:site" content="@hackropolis" />
		<title key="title">{title}</title>
		<meta key="og_title" property="og:title" content={title} />
		<meta key="tw_title" name="twitter:title" content={title} />
		{description && (
			<>
				<meta key="desc" name="description" content={description} />
				<meta key="og_desc" property="og:description" content={description} />
				<meta key="tw_desc" name="twitter:description" content={description} />
			</>
		)}
		{image && (
			<>
				<meta key="og_img" property="og:image" content={image} />
				<meta key="tw_card" name="twitter:card" content="summary_large_image" />
				<meta key="tw_img" name="twitter:image" content={image} />
			</>
		)}
		<meta key="theme_color" name="theme-color" content={color} />
		<meta key="tile_color" name="msapplication-TileColor" content={color} />
		{/* <link key="safari_icon" rel="mask-icon" href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg" color={color} />
		<link key="apple_icon" rel="apple-touch-icon" sizes="180x180" href="https://assets.hackclub.com/favicons/apple-touch-icon.png" />
		<link key="favicon_32" rel="icon" type="image/png" sizes="32x32" href="https://assets.hackclub.com/favicons/favicon-32x32.png" />
		<link key="favicon_16" rel="icon" type="image/png" sizes="16x16" href="https://assets.hackclub.com/favicons/favicon-16x16.png" />
		{manifest && <link key="manifest" rel="manifest" href={manifest} />} */}
		{children}
	</NextHead>
);

export default Head;
