import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const tags = ["tag1", "tag2", "tag3"];
    // const [imgUrl, setImgUrl] = useState("https://picsum.photos/200");
    const fortCount = () => {
        return count === 0 ? "NULL" : count;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += count === 0 ? "danger" : "primary";
        return classes;
    };

    const handleIncrement = (productId) => {
        console.log(productId);
        setCount(count + 1);
    };
    const handleDecrement = ({ id }) => {
        console.log(id);
        if (count > 0) setCount(count - 1);
    };
    return (
        <>
            {tags.length === 0 ? (
                <h2>Список пуст</h2>
            ) : (
                <ul>
                    {tags.map((tag) => {
                        return <li key={tag}>{tag}</li>;
                    })}
                </ul>
            )}

            <span className={getBadgeClasses()}>{fortCount()}</span>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={() => {
                    handleIncrement({ id: 2 });
                }}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={() => {
                    handleDecrement({ id: 3 });
                }}
            >
                Decrement
            </button>
        </>
    );
};

export default Counter;
