import PreviewCurrencyChip from './PreviewCurrencyChip';
import PreviewExchange from './PreviewExchange';
import PreviewFloatingChip from './PreviewFloatingChip';
import PreviewTransactions from './PreviewTransactions';

function PreviewBox() {
	return (
		<div className="relative w-[85%] mx-auto lg:max-w-[450px] 2xl:max-w-[515px]">
			<PreviewFloatingChip />
			<div
				id="preview-box"
				className="relative -z-30 p-px rounded-md bg-gradient-to-br from-grey-800 via-[#3A441F] to-grey-800 from-[37%] to-[63%]"
			>
				<div className="relative rounded-md bg-[#1A1A1A] -z-20 max-h-full overflow-clip">
					<div
						className={
							'absolute w-full h-full -z-10 opacity-80 bg-plywood'
						}
					></div>
					<div className="p-[1.28rem] flex flex-col gap-4 rounded-md bg-gradient-to-tr from-[#1A1A1A] from-55% lg:p-[1.72rem] 2xl:p-[2.17rem]">
						<PreviewTransactions />
						<PreviewExchange />
					</div>
				</div>
			</div>
			<PreviewCurrencyChip />
		</div>
	);
}

export default PreviewBox;
