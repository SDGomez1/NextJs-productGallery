import { Gallery } from "../containers/Gallery";

export async function getStaticProps() {
	const response = await fetch(
		"https://next-js-product-gallery.vercel.app/api/llamas"
	);
	const data = await response.json();

	return {
		props: { data }, // will be passed to the page component as props
	};
}

const homePage = ({ data }) => {
	return (
		<>
			<Gallery LlamaInfo={data} />
		</>
	);
};

export default homePage;
