// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
	slug: string;
	metadata: {
		bannerCredit: string;
		bannerUrl: string;
		date: string;
		description: string;
		rawDate: string;
		title: string;
		readingTime?: string;
	};
}

export const blogList: Array<BlogList> = [
	{
		slug: 'hello-world', // Filename
		metadata: {
			bannerCredit: '',
			bannerUrl: '',
			date: '30 Nov 2021',
			description: 'Every blog starts with a single post. This is yours. Make it great.',
			rawDate: '',
			title: '',
			readingTime: '',
		},
	},
	{
		slug: 'hello-world', // Filename
		metadata: {
			bannerCredit: '',
			bannerUrl: '',
			date: '30 Nov 2021',
			description: 'Every blog starts with a single post. This is yours. Make it great.',
			rawDate: '',
			title: '',
			readingTime: '',
		},
	},
	{
		slug: 'hello-world', // Filename
		metadata: {
			bannerCredit: '',
			bannerUrl: '',
			date: '30 Nov 2021',
			description: 'Every blog starts with a single post. This is yours. Make it great.',
			rawDate: '',
			title: '',
			readingTime: '',
		},
	},
	{
		slug: 'hello-world', // Filename
		metadata: {
			bannerCredit: '',
			bannerUrl: '',
			date: '30 Nov 2021',
			description: 'Every blog starts with a single post. This is yours. Make it great.',
			rawDate: '',
			title: '',
			readingTime: '',
		},
	},
];
