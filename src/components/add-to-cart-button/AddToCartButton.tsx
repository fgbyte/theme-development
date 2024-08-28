type Props = {
	variantId: number;
	productTitle: string;
};

const AddToCartButton = ({ variantId, productTitle }: Props) => {
	//NEW LINES 1 👇
	const cartDrawer: any = document.querySelector("cart-drawer");
	//END
	async function addToCart() {
		const addToCartRequest = await fetch("/cart/add.js", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				items: [
					{
						quantity: 1,
						id: variantId,
					},
				],
				//NEW LINES 2 👇
				sections: cartDrawer
					.getSectionsToRender()
					.map((section: any) => section.id),
				//END
			}),
		});

		const response = await addToCartRequest.json();
		console.log(JSON.stringify(response.sections));

		//NEW LINES 3 👇
		cartDrawer.renderContents(response);
		//END
	}

	return (
		<button onClick={addToCart} type="button">
			Add {productTitle} to cart
		</button>
	);
};

export default AddToCartButton;
