import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
    const [counters, setCounters] = useState([
        { value: 0, id: 1, name: "plate" },
        { value: 0, id: 2, name: "spoon" },
        { value: 5, id: 3, name: "fork" },
        { value: 0, id: 4, name: "knife" },
        { value: 0, id: 5, name: "unnecessary things" }
    ]);
    return (
        <div>
            {counters.map((counter) => (
                <Counter key={counter.id} value={counter.value}><h4>{counter.name}</h4></Counter>
            ))}
        </div>
    );
};

export default Counters;
