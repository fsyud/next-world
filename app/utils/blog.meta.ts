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
		{ property: 'description', content: description },
		{ property: 'keywords', content: keywords },
		{ property: 'image', content: image },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:image', content: image },
		{
			property: 'twitter:card',
			content: image ? 'summary_large_image' : 'summary',
		},
		{ property: 'twitter:creator', content: '@fsyud' },
		{ property: 'twitter:site', content: '@fsyud' },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description },
		{ property: 'twitter:image', content: image },
		{ property: 'twitter:image:alt', content: title },
	];
}
