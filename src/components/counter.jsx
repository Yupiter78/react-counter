import React, { useState } from "react";

const Counter = (props) => {
    const [value, setValue] = useState(props.value);
    // const tags = ["tag1", "tag2", "tag3"];
    // const [imgUrl, setImgUrl] = useState("https://picsum.photos/200");
    const fortValue = () => {
        return value === 0 ? "NULL" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += value === 0 ? "danger" : "primary";
        return classes;
    };

    const handleIncrement = (productId) => {
        console.log(productId);
        setValue(value + 1);
    };
    const handleDecrement = ({ id }) => {
        console.log(id);
        if (value > 0) setValue(value - 1);
    };
    return (
        <div>
            {/* {{
                tags.length === 0 ? (
                    <h2>Список пуст</h2>
                ) : (
                    <ul>
                        {tags.map((tag) => {
                            return <li key={tag}>{tag}</li>;
                        })}
                    </ul>
                )
            }}*/}
            {props.children}
            <span className={getBadgeClasses()}>{fortValue()}</span>
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
        </div>
    );
};

export default Counter;
