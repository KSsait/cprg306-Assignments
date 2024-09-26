export default function Item({name, quantity, category}) {
    return(
        <div className="ml-4 w-1/3 ">
            <li className="bg-gray-700 mb-2 list-none text-center justify-center">
                <ul>
                    <h2 className="text-green-500 w">{name}</h2>
                    <h2 className="text-blue-300">{quantity} {category}</h2>
                </ul>
            </li>
        </div>
    );
};