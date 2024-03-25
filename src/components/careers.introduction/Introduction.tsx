import dottedAbstractDesign from '../../assets/careers.introduction/dotted-abstract.svg';
import image from '../../assets/careers.introduction/Image.webp';

function Introduction() {
	return (
		<div className="w-full p-4">
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
						<h1 className="text-white-100 text-[1.75rem] leading-[2.275rem] font-medium text-center mb-[0.88rem]">
							Welcome to{' '}
							<span className="text-green-800">YourBank</span>{' '}
							Careers!
						</h1>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
							Join our team and embark on a rewarding journey in
							the banking industry. At YourBank, we are committed
							to fostering a culture of excellence and providing
							opportunities for professional growth. With a focus
							on innovation, customer service, and integrity, we
							strive to make a positive impact in the lives of our
							customers and communities. Join us today and be a
							part of our mission to shape the future of banking.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
