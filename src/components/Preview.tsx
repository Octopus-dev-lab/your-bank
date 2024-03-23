import arrowDesign from '../assets/home.preview/arrow-abstract.svg';
import PreviewBox from './PreviewBox';
import PreviewCurrencyChip from './PreviewCurrencyChip';
import PreviewFloatingChip from './PreviewFloatingChip';

function Preview() {
	return (
		<div className="relative w-[92vw] mx-auto mt-20">
			<PreviewFloatingChip />
			<img
				className="absolute -top-[1.19rem] -right-[1.31rem] -z-40"
				src={arrowDesign}
				alt="arrow design element"
			/>
			<PreviewBox />
			<PreviewCurrencyChip />
		</div>
	);
}

export default Preview;
