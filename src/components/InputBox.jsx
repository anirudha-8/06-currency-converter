const InputBox = (
	// props

	// 1. for label
	label,

	// 2. for amount
	amount,
	onAmountChange,
	amountDisable = false, // optional

	// 3. for currency
	currencyOptions = [],
	selectCurrency = "usd",
	onCurrencyChange,
	currencyDisable = false, // optional

	// 4. for custom classes
	className = ""
) => {
	return (
		// parent for input box container
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			{/* first half div for label and amount */}
			<div className="w-1/2">
				<label className="text-black/40 mb-2 inline-block">
					{label}
				</label>
				<input
					type="number"
					placeholder="Amount"
					className="outline-none w-full bg-transparent"
					value={amount}
					disabled={amountDisable}
					onChange={(e) =>
						// to check the if "amount" is passed or not, to prevent from crash
						// and converting to number bcz, JavaScript consider values in
						//  EVENTS as => "string"
						onAmountChange && onAmountChange(Number(e.target.value))
					}
				/>
			</div>
			{/* second half div for currency-type and list of currencies */}
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency} // default value as -> "usd"
					disabled={currencyDisable}
					onChange={(e) => {
						// to check if "currency" is passed or not, to prevent from crash
						// and this time we are not converting to number bcz,
						// JavaScript consider values in EVENTS as => "string"
						onCurrencyChange && onCurrencyChange(e.target.value);
					}}
				>
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default InputBox;
