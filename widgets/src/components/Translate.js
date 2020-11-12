import React, { useState } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
]

function Translate() {
    const [select, setSelect] = useState(options[0]);
    const [text, setText] = useState('');

    return (
      <div>
          <div className="ui form">
              <div className="field">
                  <label htmlFor="text">Enter Text</label>
                  <input
                      type="text"
                      value={text}
                      onChange={event => setText(event.target.value)}
                      name="text"
                  />
              </div>
          </div>
          <Dropdown
              label="Select a Language"
              options={options}
              onSelectedChange={setSelect}
              selected={select}
          />
          <hr />
          <h3 className="ui header">Output</h3>
          <Convert
            language={select.value}
            text={text}
          />
      </div>
    );
}

export default Translate;
