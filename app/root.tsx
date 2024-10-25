import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import './tailwind.css';
import { getDomainUrl } from './utils/misc';

export const links: LinksFunction = () => [];

export async function loader({ request }: LoaderFunctionArgs) {
	return {
		requestInfo: { origin: getDomainUrl(request), path: new URL(request.url).pathname },
	};
}
export type RootLoaderType = SerializeFrom<typeof loader>;

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
