import { useEffect, useRef } from 'react';
import { render } from 'lit-html';
import { myTemplate } from '~/utils/templates';

const LitComponent = ({ name }: { name: string }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		// 使用 lit-html 渲染模板
		if (containerRef.current) {
			render(myTemplate(name), containerRef.current);
		}
	}, [name]);

	return <div ref={containerRef}></div>;
};

export default LitComponent;
