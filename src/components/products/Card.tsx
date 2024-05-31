import RadialAbstract from '../../assets/svg/radial-abstract.svg?react';

function Card({
	data
}: {
	data: {
		title: string;
		description: string;
		cardsData: {
			icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
			title: string;
		}[];
		stats: {
			percentage: string;
			title: string;
		}[];
	};
}) {
	return (
		<div className="relative lg:w-[50%]">
			<RadialAbstract className="absolute top-0 -left-1 w-[7.375rem] h-28 lg:-left-2 lg:w-56 lg:h-[13.3125rem]" />
			<div className="mb-[1.88rem] p-5 grid grid-cols-2 grid-rows-2 rounded-2xl bg-grey-900 gap-[0.62rem] lg:p-10 2xl:p-[3.12rem]">
				{data.cardsData.map((card, index) => (
					<div
						key={index}
						className="py-5 px-[0.88rem] border border-grey-800 rounded-lg bg-grey-1000 z-10 lg:p-6 2xl:p-[1.88rem]"
					>
						<card.icon className="mx-auto mb-[0.88rem] w-14 h-14 2xl:mb-6 2xl:w-[4.26rem] 2xl:h-[4.26rem]" />
						<h4 className="text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:text-[1rem] lg:leading-6 2xl:text-[1.25rem] 2xl:leading-[1.875rem]">
							{card.title}
						</h4>
					</div>
				))}
			</div>
		</div>
	);
}

export default Card;
