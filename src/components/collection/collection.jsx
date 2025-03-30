import products from "../../data/shoes";

function Shoescard({ avator, title, shoeName, price }) {
    return (
        <div className="w-45 bg-white shadow-lg rounded-xl overflow-hidden p-2 flex flex-col items-center">
    <div>
        <img src={avator} alt={title} className="w-full h-40 object-cover rounded-lg" />
    </div>
    <div className="flex justify-between items-center mt-4 gap-5">
        <h3 className="text-lg font-semibold">{shoeName}</h3>
        <h2 className="text-xl font-bold text-blue-500">{price}</h2>
    </div>
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-4">
        View More
    </button>
</div>

    );
}

function Collection() {
    return (
        <section >
            <div className="flex flex-wrap gap-5 p-7 ">
                {products.map((product, i) => (
                    <Shoescard
                        avator={product.avator}
                        title={product.title}
                        shoeName={product.shoeName}
                        price={product.price}
                        key={i}
                    />
                ))}
            </div>
        </section>
    );
}

export default Collection;
