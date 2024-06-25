
import { useState } from 'react';
import MarketItem from './MarketItem';
export default function Market({ products }){
    const [sortBy, setSortBy] = useState('price');
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    let sortedProducts = [...products];

    switch (sortBy) {
        case 'price':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'date':
            sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            break;
        case 'bought':
            sortedProducts.sort((a, b) => b.bought - a.bought);
            break;
        case 'sold':
            sortedProducts.sort((a, b) => b.sold - a.sold);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex justify-between mb-4">
                <span className="text-lg font-bold">Market</span>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[100px]"
                    value={sortBy}
                    onChange={handleSortByChange}
                >
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                    <option value="bought">Bought</option>
                    <option value="sold">Sold</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            {sortedProducts.map((product) => (
                <MarketItem key={product.id} product={product} />
            ))}
        </div>
    );
};
