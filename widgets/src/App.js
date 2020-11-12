import React, { useState } from "react";

//import Accordion from "./components/Accordion";
//import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JavaScript framework.',
    },
    {
        title: 'Why use React?',
        content: 'React is favorite JS Library among engineers.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.',
    },
]
const options = [
    {
        label: 'The color Red',
        value: 'red',
    },
    {
        label: 'The color Green',
        value: 'green',
    },
    {
        label: 'The Shade of Blue',
        value: 'blue',
    },
]

function App() {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown && (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            )}
        </div>
    );
}

export default App;
