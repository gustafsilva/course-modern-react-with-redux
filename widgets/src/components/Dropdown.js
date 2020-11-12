import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Dropdown({ selected, onSelectedChange ,options }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = event => {
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map(option => (
        option !== selected && (
            <div
                className="item"
                key={option.value}
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    ));

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label htmlFor="color" className="label">Select a Color</label>
                <div
                    className={`ui selection dropdown ${open? 'visible active' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    selected: PropTypes.object.isRequired,
    onSelectedChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default Dropdown;
