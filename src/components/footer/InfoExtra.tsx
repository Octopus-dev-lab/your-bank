import { social } from './footer.data';

function InfoExtra() {
	return (
		<div className="relative w-full flex flex-col justify-center items-center">
			<div className="absolute -top-5 z-10 flex gap-2">
				{social.map((social, index) => {
					return (
						<a
							key={index}
							className="p-3 bg-green-800 rounded-full"
							href={social.url}
						>
							<img
								src={social.logo}
								alt={social.alt}
							/>
						</a>
					);
				})}
			</div>
			<div className="pt-[3.12rem] pb-[1.88rem] w-full flex flex-col justify-center items-center gap-5 border border-grey-800 rounded-lg bg-grey-1000">
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
					YourBank All Rights Reserved
				</p>
				<div className="w-full flex justify-center items-center gap-2">
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center"
						href=""
					>
						Privacy Policy
					</a>
					<div className="w-px h-[1.3125rem] bg-grey-200"></div>
					<a
						className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center"
						href=""
					>
						Terms of Service
					</a>
				</div>
				<a
					className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center"
					href="https://produce-ui.com/"
				>
					Designed by Produce-ui
				</a>
				<a
					className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center"
					href="https://octopuslab.io/"
				>
					Developed by Jurgen - Octopus Lab
				</a>
			</div>
		</div>
	);
}

export default InfoExtra;
