import Dog from '../week-3/dog';
import Link from "next/link"

export default function Page() {
  let dog1 = {
    name: "Ahsoka",
    breed: "Shiba-Inu",
    age: 7,
    color: "Black and Tan",
  };

  let dog2 = {
    name: "Spot",
    breed: "Dalmatian",
    age: 3,
    color: "black and white",
  };

  let dog3 = {
    name: "Rover",
    breed: "Golden Retriever",
    age: 2,
    color: "golden",
  };

  let dog4 = {
    name: "Buddy",
    breed: "Beagle",
    age: 5,
    color: "brown and white",
  }

  let dog5 = {
    name: "Rusty",
    breed: "Irish Setter",
    age: 4,
    color: "red",
  }

  return (
    <main className="m-4 ml-6">
      <h1 className="text-5xl font-bold">Week 3 - My Dogs</h1>
      <Dog
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        color={dog1.color}
      />
      <Dog
        name={dog2.name}
        breed={dog2.breed}
        age={dog2.age}
        color={dog2.color}
      />
      <Dog
        name={dog3.name}
        breed={dog3.breed}
        age={dog3.age}
        color={dog3.color}
      />
      <Dog 
        name={dog4.name}
        breed={dog4.breed}
        age={dog4.age}
        color={dog4.color}
      />
        <Dog 
            name={dog5.name}
            breed={dog5.breed}
            age={dog5.age}
            color={dog5.color}
      />
      <div className="mt-4">
        <Link href="/" >Back to Home</Link>
      </div>
    </main>
  );
}