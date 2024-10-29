import { useEffect } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { getDomainUrl } from './utils/misc';

import '~/styles/tailwind.css';

export const links: LinksFunction = () => [];

export async function loader({ request }: LoaderFunctionArgs) {
	return {
		requestInfo: { origin: getDomainUrl(request), path: new URL(request.url).pathname },
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	};
}
export type RootLoaderType = SerializeFrom<typeof loader>;

function App() {
	const location = useLocation();

	useEffect(() => {
		if (window?.gtag) {
			window.gtag('config', 'G-T2EMHL25GX', {
				page_path: location.pathname,
			});
		}
	}, [location]);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{process.env.NODE_ENV === 'development' ? null : (
					<>
						<script async src={`https://www.googletagmanager.com/gtag/js?id=G-T2EMHL25GX`} />
						<script
							async
							id="gtag-init"
							dangerouslySetInnerHTML={{
								__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());

									gtag('config', 'G-T2EMHL25GX', {
									page_path: window.location.pathname,
									});
								`,
							}}
						/>
					</>
				)}
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
						<Outlet />
					</main>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function AppWithProviders() {
	return <App />;
}
