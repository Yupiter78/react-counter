import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
    const initialState = [
        { value: 0, id: 1, name: "plate" },
        { value: 0, id: 2, name: "spoon" },
        { value: 5, id: 3, name: "fork" },
        { value: 0, id: 4, name: "knife" },
        { value: 0, id: 5, name: "unnecessary things" }
    ];
    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (counterId, counterValue) => {
        const newCounters = [...counters];
        const indexCounter = newCounters.findIndex(
            (counter) => counter.id === counterId
        );
        newCounters[indexCounter].value = counterValue + 1;
        setCounters(newCounters);
    };
    const handleDecrement = (counterId) => {
        setCounters(
            counters.map((counter) => {
                if (counter.id === counterId && counter.value > 0) {
                    counter.value -= 1;
                }
                return counter;
            })
        );
    };
    const handleDelete = (counterId) => {
        console.log(`delete counter id:${counterId}`);
        setCounters(counters.filter((counter) => counter.id !== counterId));
    };
    const handleReset = () => {
        setCounters(initialState);
    };

    const handleTotalItems = () =>
        counters.reduce((prev, cur) => prev + cur.value, 0);
    return (
        <div className="col-lg-8 mx-auto p-4 py-md-5">
            <main>
                <NavBar totalItems={handleTotalItems()} />
                <Counters
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onReset={handleReset}
                    onDelete={handleDelete}
                    counters={counters}
                />
            </main>
        </div>
    );
}

export default App;
