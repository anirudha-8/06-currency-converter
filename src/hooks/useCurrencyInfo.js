import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency) {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
		)
			.then((res) => res.json())
			//there are two keys inside API data,
			// (1) date and (2) currency
			//  to get required key of currency, we are explicitly passing currency
			.then((res) => setData(res[currency]));
	}, [currency]);
	return data;
}

export default useCurrencyInfo;
