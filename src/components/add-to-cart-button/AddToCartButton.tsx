type Props = {
	variantId: number;
	productTitle: string;
};

const AddToCartButton = ({ variantId, productTitle }: Props) => {
	console.log(variantId);
	return <button type="button">Add {productTitle} to cart</button>;
};

export default AddToCartButton;
