import { motion } from 'framer-motion';
import type { MetaFunction } from '@remix-run/node';
import {
	textVariants,
	containerVariants,
	imageLoadAnimationProps,
} from '~/data/animationConfig';

import { getSocialMetas, getOrigin } from '~/utils/blog.meta';

export const meta: MetaFunction = () => {
	return [...[{ title: 'Karl.home' }], ...getSocialMetas({ url: getOrigin() })];
};

export default function Index() {
	return (
		<div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
			>
				<motion.h1
					variants={textVariants}
					className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
				>
					欢迎来到我的博客
				</motion.h1>
				<motion.p variants={textVariants} className="text-lg md:text-xl">
					我的{' '}
					<a href="https://github.com/fsyud" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>{' '}
				</motion.p>
			</motion.div>

			<div className="mx-[1em] my-0 text-center">
				<motion.div {...imageLoadAnimationProps}>
					<picture className="block min-h-[250px]">
						<source srcSet="/assets/images/interesting-show.webp" media="(min-width: 600px)" />
						<img
							className="mb-[1em] w-full max-w-[750px] max-w-lg:max-w-[400px] rounded-2xl"
							alt="Illustration of person reading a book"
							src="/assets/images/interesting-show.webp"
							width="750"
							height="466"
						/>
					</picture>
				</motion.div>

				{/* <p className="text-left text-[0.8em] italic">
						Illustration by{' '}
						<a href="https://icons8.com/illustrations/author/AJeVuFhkCuqC">ekzi.letters Ouch!</a>
					</p> */}
			</div>
		</div>
	);
}
