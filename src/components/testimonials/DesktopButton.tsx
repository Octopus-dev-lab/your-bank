import Arrow from './Arrow';

function DesktopButton({
	isPrevoius = false,
	onClick
}: {
	isPrevoius?: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`hidden min-w-max xl:block p-3 rounded-full border border-grey-800 bg-grey-900 2xl:p-[0.88rem] z-20 ${isPrevoius ? 'mr-[3.12rem]' : 'ml-[3.12rem]'}`}
		>
			<Arrow direction={isPrevoius ? 'left' : 'right'} />
		</button>
	);
}

export default DesktopButton;
