import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Accordion({ items }) {
    const renderedItems = items.map(item => (
        <Fragment key={item.title}>
            <div className="title active">
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </Fragment>
    ))

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