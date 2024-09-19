export default function Item({name, quantity, category}) {
    return(
        <div className="ml-4">
            <li>
                <h2 className="text-green-500">{name}</h2>
            </li>
            <li>
                <h2 className="text-blue-300">{quantity} {category}</h2>
            </li>
        </div>
    );
};