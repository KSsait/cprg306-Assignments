export default function Item({name, quantity, category, onSelect}) {
    return(
        <div>
            <li className="m-2 p-2 bg-gray-700 w-80 text-center hover:bg-slate-800" onClick={onSelect}>
                <ul>
                    <h2 className="text-green-500 capitalize">{name}</h2>
                    <h2 className="text-blue-300">{quantity} {category}</h2>
                </ul>
            </li>
        </div>
    );
};