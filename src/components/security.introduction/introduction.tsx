import image from '../../assets/security.introduction/image.webp';
import DualPaneCard from '../shared/DualPaneCard';

function Introduction() {
	return (
		<div className="w-full p-4">
			<DualPaneCard image={image}>
				<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem] after:content-['_Top_Priority'] after:text-green-800">
					Your Security is Our
				</h1>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
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
