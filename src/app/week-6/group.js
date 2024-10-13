import itemsJson from "./items.json";

let items = [...itemsJson];

const groupBy = (array, key) => {
    return array.reduce((acc, obj) => {
      const keyValue = obj[key]; 

      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      
      acc[keyValue].push(obj);
      return acc;
    }, {});
  };

const ShowGrouped = () => {
    const groupedByCategory = groupBy(items, 'category');

    return (
        <div className="ShowGrouped">
            {Object.entries(groupedByCategory).map(([category, group]) => (
                <div key={category}>
                    <h2 className="text-2xl capitalize text-purple-400 text-center mb-2">{category}</h2>
                    <ul className="flex flex-col items-center">
                        {group.map(item => (
                            <li key={item.name} className="text-green-500 bg-slate-700 w-80 text-center mb-2 p-2">
                                {item.name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ShowGrouped;