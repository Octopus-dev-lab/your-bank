import checkIcon from '../assets/home.introduction/check.svg';

function Chip() {
	return (
		<div className="w-fit pl-2 pr-4 py-2 mb-3 gap-1 flex justify-center items-center bg-grey-800 rounded-full">
			<img
				src={checkIcon}
				alt="check icon"
			/>
			<p className="text-white-100 text-xs leading-6 font-extralight">
				No LLC Required, No Credit Check.
			</p>
		</div>
	);
}

export default Chip;
