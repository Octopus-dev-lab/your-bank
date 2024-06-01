import Arrow from '../../assets/svg/arrow.svg?react';

function MobileButtons({
	onClickLeft,
	onClickRight
}: {
	onClickLeft: () => void;
	onClickRight: () => void;
}) {
	return (
		<div className="mt-[30px] xl:hidden">
			<button
				onClick={onClickLeft}
				className="p-3 mr-3 rounded-full border border-grey-800 bg-grey-900 lg:mr-14"
			>
				<Arrow className="w-7 h-7" />
			</button>
			<button
				onClick={onClickRight}
				className="p-3 ml-[10px] rounded-full border border-grey-800 bg-grey-900"
			>
				<Arrow className="w-7 h-7 transform rotate-180" />
			</button>
		</div>
	);
}

export default MobileButtons;
