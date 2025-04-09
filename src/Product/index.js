import ProductItem from "../ProductItem";
const products = [
  {
    id: 1,
    title: "Chicken Boneless",
    img_url: "nonvegimgpaths/chickenboneless.png",
    price: "500",
  },
  {
    id: 2,
    title: "Chicken Bone",
    img_url: "nonvegimgpaths/chikenbone.png",
    price: "510",
  },
  {
    id: 3,
    title: "Fish",
    img_url: "nonvegimgpaths/Fish.png",
    price: "520",
  },
  {
    id: 4,
    title: "Gongura Chicken",
    img_url: "nonvegimgpaths/gongurachicken.png",
    price: "540",
  },
  {
    id: 5,
    title: "Prawns",
    img_url: "nonvegimgpaths/prawns.png",
    price: "600",
  },
];

const Product = () => {
  return (
    <div>
      {products.map((eachItem) => (
        <ProductItem key={eachItem.id} products={eachItem} />
      ))}
    </div>
  );
};

export default Product;
