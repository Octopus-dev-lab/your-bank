import { contacts } from './footer.data';

function Contacts() {
	return (
		<div className="flex flex-wrap justify-center items-center gap-5">
			{contacts.map((contact, index) => (
				<a
					className="flex gap-[0.38rem] items-center"
					key={index}
					href={contact.url}
				>
					<contact.icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
					<p className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-normal whitespace-nowrap lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{contact.text}
					</p>
				</a>
			))}
		</div>
	);
}

export default Contacts;
