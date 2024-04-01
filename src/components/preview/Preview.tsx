import arrowDesign from '../../assets/home.preview/arrow-abstract.svg';
import PreviewBox from './PreviewBox';
// import PreviewCurrencyChip from './PreviewCurrencyChip';
// import PreviewFloatingChip from './PreviewFloatingChip';

function Preview() {
	return (
		<div className="relative max-w-[398px] mx-auto mt-20 lg:max-w-none lg:w-1/2">
			<img
				className="absolute -top-[1.19rem] -right-[1.31rem] -z-40 w-[13.75rem] lg:w-[18.75rem] 2xl:w-[26.12175rem]"
				src={arrowDesign}
				alt="arrow design element"
			/>
			<PreviewBox />
		</div>
	);
}

export default Preview;
