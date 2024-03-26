import dottedAbstractDesign from '../../assets/careers.introduction/dotted-abstract.svg';

function DualPaneCard({
	image,
	children
}: {
	image: string;
	children: React.ReactNode;
}) {
	return (
		<div className="relative w-full p-[0.88rem] rounded-2xl bg-grey-900">
			<img
				className="absolute top-0 right-0 z-10"
				src={dottedAbstractDesign}
				alt="Dotted abstract design"
			/>
			<div className="relative w-full z-20">
				<img
					className="relative top-0 left-0 w-full rounded-t-2xl"
					src={image}
					alt="Careers introduction image"
				/>
				<div className="relative w-full -mt-6 p-6 z-10 rounded-3xl bg-grey-1000">
					{children}
				</div>
			</div>
		</div>
	);
}

export default DualPaneCard;
