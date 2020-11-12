import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';


        return (
            <Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Accordion;