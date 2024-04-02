import dottedAbstractDesign from '../../assets/careers.introduction/dotted-abstract.svg';

function DualPaneCard({
	image,
	children
}: {
	image: string;
	children: React.ReactNode;
}) {
	return (
		<div className="relative w-full p-[0.88rem] rounded-2xl bg-grey-900 md:p-5 lg:max-w-[640px] lg:mx-auto min-[1150px]:p-10 min-[1150px]:max-w-none 2xl:p-[3.12rem]">
			<img
				className="absolute top-0 right-0 z-10 lg:w-[20.875rem] 2xl:w-[31.5625rem]"
				src={dottedAbstractDesign}
				alt="Dotted abstract design"
			/>
			<div className="relative w-full z-20 min-[1150px]:flex min-[1150px]:flex-row-reverse">
				<img
					className="relative top-0 left-0 w-full rounded-t-2xl min-[1150px]:min-w-[66.666667%] min-[1150px]:w-2/3 min-[1150px]:self-start min-[1150px]:flex-auto"
					src={image}
					alt="Careers introduction image"
				/>
				<div className="relative w-full -mt-6 p-6 z-10 rounded-3xl bg-grey-1000 md:-mt-16 md:p-8 min-[1150px]:p-[3.75rem] min-[1150px]:min-w-[50%] min-[1150px]:w-1/2 min-[1150px]:h-min min-[1150px]:mt-0 min-[1150px]:-right-[16.666667%] min-[1150px]:rounded-tr-[0] min-[1150px]:rounded-l-[1.25rem] min-[1150px]:rounded-br-[3.75rem] 2xl:p-20 2xl:rounded-br-[5rem]">
					{children}
				</div>
			</div>
		</div>
	);
}

export default DualPaneCard;
