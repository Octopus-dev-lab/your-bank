import image from '../../assets/careers.introduction/image.webp';
import DualPaneCard from '../shared/DualPaneCard';

function Introduction() {
	return (
		<div className="w-full px-4 lg:px-20 2xl:px-40">
			<DualPaneCard image={image}>
				<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem] lg:text-[2.375rem] lg:leading-[3.5625rem] xl:mb-5 xl:text-[3rem] xl:leading-[3.9rem] min-[1150px]:text-start 2xl:text-[3.625rem] 2xl:leading-[4.7125rem]">
					Welcome to <span className="text-green-800">YourBank</span>{' '}
					Careers!
				</h1>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 min-[1180px]:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
					Join our team and embark on a rewarding journey in the
					banking industry. At YourBank, we are committed to fostering
					a culture of excellence and providing opportunities for
					professional growth. With a focus on innovation, customer
					service, and integrity, we strive to make a positive impact
					in the lives of our customers and communities. Join us today
					and be a part of our mission to shape the future of banking.
				</p>
			</DualPaneCard>
		</div>
	);
}

export default Introduction;
