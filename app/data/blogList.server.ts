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
	};
}
