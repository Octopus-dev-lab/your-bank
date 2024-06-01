import { useRef } from 'react';
import ArrowsAbstract from '../../assets/svg/arrow-abstract.svg?react';
import AnimatePreview from './AnimatePreview';
import PreviewBox from './PreviewBox';

function PreviewSection() {
	const previewRef = useRef<HTMLDivElement>(null);

	return (
		<AnimatePreview scope={previewRef}>
			<div
				ref={previewRef}
				className="relative max-w-[398px] mx-auto mt-20 lg:max-w-none lg:w-1/2"
			>
				<ArrowsAbstract
					id="arrows-image"
					className="hidden-on-start absolute -top-[1.19rem] -right-[1.31rem] -z-40 w-[13.75rem] lg:w-[18.75rem] 2xl:w-[26.12175rem]"
				/>
				<PreviewBox />
			</div>
		</AnimatePreview>
	);
}

export default PreviewSection;
