import bgTexture from '../assets/bg-texture.webp';
import PreviewExchange from './PreviewExchange';
import PreviewTransactions from './PreviewTransactions';

function PreviewBox() {
	return (
		<div className="relative w-[85%] mx-auto p-px -z-30 rounded-md bg-gradient-to-br from-grey-800 via-[#3A441F] to-grey-800 from-[37%] to-[63%]">
			<div className="relative rounded-md bg-[#1A1A1A] -z-20">
				<img
					className="absolute w-full h-full -z-10  opacity-30"
					src={bgTexture}
				></img>
				<div className="p-[1.28rem] flex flex-col gap-4 rounded-md bg-gradient-to-tr from-[#1A1A1A] from-55%">
					<PreviewTransactions />
					<PreviewExchange />
				</div>
			</div>
		</div>
	);
}

export default PreviewBox;
