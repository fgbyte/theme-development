import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter.tsx";

const rootElement = document.getElementById("counter");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Counter />
		</StrictMode>,
	);
}
