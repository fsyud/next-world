import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider';
import type { Theme } from '~/utils/theme-provider';
import { getThemeSession } from '~/utils/theme.server';
import Header from '~/components/Header';
import { getDomainUrl } from './utils/misc';
import clsx from 'clsx';

import '~/styles/tailwind.css';

export const links: LinksFunction = () => [];

export async function loader({ request }: LoaderFunctionArgs) {
	const themeSession = await getThemeSession(request);
	return {
		theme: themeSession.getTheme(),
		requestInfo: { origin: getDomainUrl(request), path: new URL(request.url).pathname },
	};
}
export type RootLoaderType = SerializeFrom<typeof loader>;

export type LoaderData = {
	theme: Theme | null;
};

function App() {
	const data = useLoaderData<LoaderData>();

	// const [theme] = useTheme();

	// console.log(theme);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				{/* <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} /> */}
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
	// const data = useLoaderData<LoaderData>();

	return (
		// <ThemeProvider specifiedTheme={data.theme}>
		<App />
		// </ThemeProvider>
	);
}
