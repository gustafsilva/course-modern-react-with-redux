import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

function App() {
  return (
    <div>
        <br />
        <Search />
    </div>
  );
}

export default App;
