import employeesLg from '../../assets/images/employees-lg.webp';
import employeesMd from '../../assets/images/employees-md.webp';
import employeesSm from '../../assets/images/employees-sm.webp';
import DualPaneCard from '../shared/DualPaneCard';

function Introduction() {
	return (
		<div className="w-full p-4 lg:px-20 2xl:px-40">
			<DualPaneCard
				imageSm={employeesSm}
				imageMd={employeesMd}
				imageLg={employeesLg}
			>
				<h2 className="mb-[0.12rem] text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:text-[1.125rem] lg:leading-[1.6875rem] min-[1180px]:text-start 2xl:text-[1.25rem] 2xl:leading-[1.875rem]">
					Welcome to YourBank
				</h2>
				<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem] after:content-['_Excellence!'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] xl:mb-5 xl:text-[3rem] xl:leading-[3.9rem] min-[1180px]:text-start 2xl:text-[3.625rem] 2xl:leading-[4.7125rem]">
					Where Banking Meets
				</h1>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 min-[1180px]:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
					At YourBank, we believe that banking should be more than
					just transactions. It should be an experience that empowers
					individuals and businesses to thrive and reach their
					financial goals. As a trusted financial institution, we are
					committed to delivering exceptional banking services that go
					beyond expectations. With a focus on innovation,
					personalized solutions, and unwavering integrity, we strive
					to provide the best banking experience for our valued
					customers. Join us on this exciting journey and discover a
					new level of banking excellence.
				</p>
			</DualPaneCard>
		</div>
	);
}

export default Introduction;
