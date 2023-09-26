import SingleProduct from "./SingleProduct";

const FeaturedProducts = ({ featuredProds }) => {
  return (
    <div className="">
      <div className="lg:container mx-auto">
        <div className="text-center mt-4">
          <h2 className="font-semibold text-xl">Featured Products</h2>
          <p className="text-sm mt-1">Check & Get Your Desired Product!</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:gap-y-6 gap-2 py-14 mx-2 lg:mx-0">
          {featuredProds.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
