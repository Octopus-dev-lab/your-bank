import bgtexture from '../../assets/security.protection/bg-texture.webp';
import protectionData from './protection.data';

function Protection() {
	return (
		<div className="mt-5 px-4">
			<h1 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Protect_You'] after:text-green-800">
				How We
			</h1>
			<p className="mb-10 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				At YourBank, we prioritize the security and confidentiality of
				your financial information. Our state-of-the-art encryption
				technology and stringent data protection measures ensure your
				assets and transactions are safeguarded at all times
			</p>
			<div className="flex flex-col gap-5">
				{protectionData.map((data, index) => (
					<div
						key={index}
						className="p-6 relative border border-grey-800 rounded-[1.25rem] overflow-clip"
					>
						<img
							className="absolute top-0 left-0 z-10 w-full h-full"
							src={bgtexture}
							alt="background texture"
						/>
						<div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-green-800/[0.04] to-grey-900 from-[10%] to-[60%]"></div>
						<div className="relative z-30 mb-[1.12rem] flex items-center gap-[0.88rem]">
							<img
								src={data.icon}
								alt={data.alt}
							/>
							<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal">
								{data.title}
							</h3>
						</div>
						<p className="relative z-30 text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
							{data.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Protection;
