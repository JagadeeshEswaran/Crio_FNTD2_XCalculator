/* eslint-disable no-unused-vars */
import { useState } from "react";

const buttonValues = [
	{
		id: 9,
		value: "1",
	},
	{
		id: 10,
		value: "2",
	},
	{
		id: 11,
		value: "3",
	},
	{
		id: 5,
		value: "4",
	},
	{
		id: 6,
		value: "5",
	},
	{
		id: 7,
		value: "6",
	},
	{
		id: 1,
		value: "7",
	},
	{
		id: 2,
		value: "8",
	},
	{
		id: 3,
		value: "9",
	},
	{
		id: 4,
		value: "+",
	},
	{
		id: 8,
		value: "-",
	},
	{
		id: 12,
		value: "*",
	},
	{
		id: 13,
		value: "C",
		action: "Clear",
	},
	{
		id: 14,
		value: "0",
	},
	{
		id: 15,
		value: "=",
	},
	{
		id: 16,
		value: "/",
	},
];

function App() {
	const [inputStr, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleButtonClick = (item) => {
		const inputVal = item.value;

		if (item.action === "Clear") {
			setResult("");
			return setInput("");
		}

		if (item.value === "=") {
			if (inputStr === "") {
				return setResult("Error");
			}

			return setResult(String(eval(inputStr)));
		}

		if (typeof parseInt(inputVal) === "number") {
			// console.log("Number: ", inputVal);
			setInput(inputStr.concat(inputVal));
		}
	};

	return (
		<>
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<h1>React Calculator</h1>

				<input type="text" name="" id="" disabled value={inputStr} />

				<div
					style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}>
					{result ? result : ""}
				</div>

				<article
					style={{
						marginTop: "1rem",
						width: "18rem",
						display: "flex",
						flexWrap: "wrap",
					}}>
					{buttonValues
						.sort((a, b) => a.id - b.id)
						.map((item) => (
							<button
								onClick={() => handleButtonClick(item)}
								key={item.id}
								style={{ width: "4rem", height: "4rem", margin: "4px" }}>
								{item.value}
							</button>
						))}
				</article>
			</section>
		</>
	);
}

export default App;
