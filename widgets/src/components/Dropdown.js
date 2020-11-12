import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Dropdown(props) {
    const {
        selected,
        onSelectedChange,
        options,
        label,
        showResult,
    } = props;
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = event => {
            if (ref.current && ref.current.contains(event.target)) {
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
                <label htmlFor="color" className="label">{label}</label>
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
            {showResult && (
                <div>
                    <b style={{ 'color': selected.value }}>This text is {selected.value}!</b>
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    selected: PropTypes.object.isRequired,
    onSelectedChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    showResult: PropTypes.bool,
};

Dropdown.defaultProps = {
    label: 'Select a Color',
    showResult: false,
};

export default Dropdown;
