import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-xl text-center mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}