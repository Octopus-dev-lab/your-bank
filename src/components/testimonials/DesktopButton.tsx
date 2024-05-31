import Arrow from '../../assets/svg/arrow.svg?react';

function DesktopButton({
	isNext = false,
	onClick
}: {
	isNext?: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`hidden min-w-max xl:block p-3 rounded-full border border-grey-800 bg-grey-900 2xl:p-[0.88rem] z-20 ${isNext ? 'ml-[3.12rem]' : 'mr-[3.12rem]'}`}
		>
			<Arrow className={isNext ? 'transform rotate-180' : ''} />
		</button>
	);
}

export default DesktopButton;
