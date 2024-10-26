import { MetaFunction, TypedResponse } from '@remix-run/node';
import { RootLoaderType } from '~/root';
import { PostType } from './blog.server';

type ExtraMeta = Array<{ [key: string]: string }>;
type MetaLoader = () => Promise<TypedResponse<PostType>>;

export const blogPageMeta: MetaFunction<MetaLoader, { root: RootLoaderType }> = ({
	data,
	matches,
}) => {
	const requestInfo = getRequestInfo();

	if (data) {
		const extraMetaInfo = data.metadata.meta ?? {};
		const extraMeta: ExtraMeta = Object.entries(extraMetaInfo).reduce(
			(acc: ExtraMeta, [key, val]) => [...acc, { [key]: String(val) }],
			[],
		);

		const title = data.metadata.title;
		const url = getUrl(requestInfo);

		return [
			...getSocialMetas({
				url,
				title,
				description: data.metadata.description,
				image: data.metadata.bannerUrl,
			}),
			...extraMeta,
		].filter(Boolean);
	} else {
		return [{ title: 'Not found' }, { description: 'You landed on the wrong place buddy' }];
	}

	function getRequestInfo() {
		return (matches.find(m => m.id === 'root')?.data as RootLoaderType)?.requestInfo;
	}
};

export function getOrigin(requestInfo?: { origin?: string; path: string }) {
	return requestInfo?.origin ?? 'https://fsyud.com';
}
function removeTrailingSlash(s: string) {
	return s.endsWith('/') ? s.slice(0, -1) : s;
}
function getUrl(requestInfo?: { origin: string; path: string }) {
	return removeTrailingSlash(`${getOrigin(requestInfo)}${requestInfo?.path ?? ''}`);
}

const images = {
	garden: 'https://www.fsyud.com/assets/images/interesting-show.webp',
};

/**
 * Inspired by https://kentcdodds.com
 */
export function getSocialMetas({
	url,
	title = 'Karl, who likes to write code, travel, ride a bike and advocate freedom',
	description = 'Make the world better with software',
	image = images.garden,
	keywords = '',
}: {
	image?: string;
	url: string;
	title?: string;
	description?: string;
	keywords?: string;
}) {
	return [
		{ title },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'image', content: image },
		{ name: 'og:url', content: url },
		{ name: 'og:title', content: title },
		{ name: 'og:description', content: description },
		{ name: 'og:image', content: image },
		{
			name: 'twitter:card',
			content: image ? 'summary_large_image' : 'summary',
		},
		{ name: 'twitter:creator', content: '@fsyud' },
		{ name: 'twitter:site', content: '@fsyud' },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: image },
		{ name: 'twitter:image:alt', content: title },
	];
}
