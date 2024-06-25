export default function MarketItem(product) {
    console.log(product.product.image)
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                <img
                    src={product.product.image}
                    alt={product.product.name}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{product.product.name}</h2>
                <p className="text-gray-600 mb-2">{product.product.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.product.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}
