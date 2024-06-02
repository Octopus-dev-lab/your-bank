import secureSmartphoneLg from '../../assets/images/secure-smartphone-lg.webp';
import secureSmartphoneMd from '../../assets/images/secure-smartphone-md.webp';
import secureSmartphoneSm from '../../assets/images/secure-smartphone-sm.webp';
import DualPaneCard from '../shared/DualPaneCard';

function Introduction() {
	return (
		<div className="w-full p-4 lg:px-20 2xl:px-40">
			<DualPaneCard
				imageSm={secureSmartphoneSm}
				imageMd={secureSmartphoneMd}
				imageLg={secureSmartphoneLg}
			>
				<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem] after:content-['_Top_Priority'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] xl:mb-5 xl:text-[3rem] xl:leading-[3.9rem] min-[1180px]:text-start 2xl:text-[3.625rem] 2xl:leading-[4.7125rem]">
					Your Security is Our
				</h1>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 min-[1180px]:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
					At YourBank, we understand the importance of keeping your
					financial information secure. We employ robust security
					measures and advanced technologies to protect your personal
					and financial data. Rest assured that when you bank with us,
					your security is our utmost priority.
				</p>
			</DualPaneCard>
		</div>
	);
}

export default Introduction;
