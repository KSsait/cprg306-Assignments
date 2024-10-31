export default function Item({name, quantity, category, onSelect}) {
    return(
        <div>
            <li onClick={onSelect} className="m-2 p-2 bg-gray-700 w-80 text-center hover:bg-neutral-500">
                <ul>
                    <h2 className="text-green-500 capitalize">{name}</h2>
                    <h2 className="text-blue-300">{quantity} {category}</h2>
                </ul>
            </li>
        </div>
    );
};