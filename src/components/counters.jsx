import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
    const [counters, setCounters] = useState([
        { value: 0, id: 1 },
        { value: 0, id: 2 },
        { value: 5, id: 3 },
        { value: 0, id: 4 },
        { value: 0, id: 5 }
    ]);
    return (
        <div>
            {counters.map((counter) => (
                <Counter key={counter.id} value={counter.value} />
            ))}
        </div>
    );
};

export default Counters;
