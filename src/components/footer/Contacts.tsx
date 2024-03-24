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
					<img
						src={contact.icon}
						alt={contact.alt}
					/>
					<p className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-normal whitespace-nowrap">
						{contact.text}
					</p>
				</a>
			))}
		</div>
	);
}

export default Contacts;
