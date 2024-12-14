import "./App.css";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

// ========== for normal-level import ========== //
// import InputBox from "./components/InputBox";

// ======== for production-level import ======== //
import { InputBox } from "./components"; // as "index.js" file automatically called

function App() {
	// necessary states
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	// using custom created hook - "useCurrencyInfo"
	// to retrieve all the keys from api data
	const currencyInfo = useCurrencyInfo(from);
	// collecting all the keys of "currency" passed data, in an array
	const options = Object.keys(currencyInfo);

	// function to swap the 2 input-box container
	const swap = () => {
		setFrom(to);
		setTo(from);
		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};

	// function to convert one currency to another
	// it will convert it by multiplying 2 things
	// (1) "amount" from "FROM" input-box
	// (2) "currency-type" from "TO" input-box
	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<div
			className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXl8ZW58MHx8MHx8fDA%3D')`,
			}}
		>
			<div className="w-full">
				<div className="w-full max-w-md mx-auto border bg-gray-800 rounded-lg p-5">
					<form
						onSubmit={(e) => {
							// things to do when, form get submitted
							// (1) prevent default actions
							e.preventDefault();
							// (2) convert the currency
							convert();
						}}
					>
						{/* div for "FORM" input-box */}
						<div className="w-full mb-1">
							<InputBox
								// for label
								label="FROM"
								// for amount
								amount={amount}
								onAmountChange={(amount) => setAmount(amount)}
								// for currency types / list
								selectCurrency={from}
								currencyOptions={options}
								onCurrencyChange={(currency) =>
									setFrom(currency)
								}
							/>
						</div>
						{/* "SWAP" button */}
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
								onClick={swap}
							>
								swap
							</button>
						</div>
						{/* div for "TO" input-box */}
						<div className="w-full mt-1 mb-4">
							<InputBox
								// for label
								label="TO"
								// for amount
								amount={convertedAmount}
								// When a boolean prop is passed without an explicit value
								// (e.g., amountDisable), it is automatically evaluated as "true" in JSX.
								amountDisable
								// for currency types / list
								selectCurrency={to}
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								// When a boolean prop is passed without an explicit value
								// (e.g., currencyDisable), it is automatically evaluated as "true" in JSX.
								currencyDisable
							/>
						</div>
						{/* "CONVERT" button */}
						<button
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
						>
							Convert {from.toUpperCase()} to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
