import image from '../../assets/about.introduction/image.webp';
import DualPaneCard from '../shared/DualPaneCard';

function Introduction() {
	return (
		<div className="w-full p-4">
			<DualPaneCard image={image}>
				<h2 className="mb-[0.12rem] text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center">
					Welcome to YourBank
				</h2>
				<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem] after:content-['_Excellence!'] after:text-green-800">
					Where Banking Meets
				</h1>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
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
