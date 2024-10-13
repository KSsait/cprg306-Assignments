import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-black h-screen">
            <h1 className="font-bold text-2xl text-center mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}