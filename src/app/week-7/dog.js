export default function Dog({id, name, age, onDeleteDog}) {
    return (
        <div>
            <p>name: {name} is {age} years old</p>
            <button type="button" onClick={() => onDeleteDog(id)}>Delete</button>   
        </div>
    );
}