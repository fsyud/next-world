import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import type { Theme } from '~/utils/theme-provider';
import Header from '~/components/Header';
import { getDomainUrl } from './utils/misc';

import '~/styles/tailwind.css';

export const links: LinksFunction = () => [];

export async function loader({ request }: LoaderFunctionArgs) {
	return {
		requestInfo: { origin: getDomainUrl(request), path: new URL(request.url).pathname },
	};
}
export type RootLoaderType = SerializeFrom<typeof loader>;

export type LoaderData = {
	theme: Theme | null;
};

function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
						<Outlet />
					</main>
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
