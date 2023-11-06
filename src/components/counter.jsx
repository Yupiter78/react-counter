import React from "react";

const Counter = ({ value, name, id, onIncrement, onDecrement, onDelete }) => {
    const fortValue = () => {
        return value === 0 ? "NULL" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += value === 0 ? "danger" : "primary";
        return classes;
    };

    return (
        <div>
            <h4>{name}</h4>
            <span className={getBadgeClasses()}>{fortValue()}</span>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={() => {
                    onIncrement(id);
                }}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={() => {
                    console.log("ID:", id);
                    onDecrement(id);
                }}
            >
                Decrement
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
