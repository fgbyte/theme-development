import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Hello React</h1>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<p className="highlight">Count: {count}</p>
		</>
	);
}

export default Counter;
