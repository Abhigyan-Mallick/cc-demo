import React, { Fragment } from "react";

const InputTextField = ({ name, placeholder, required, className, handleChange }) => {
    return (
        <Fragment>
            <div>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    required={Boolean(required)}
                    className={className}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <span>&nbsp;</span>
        </Fragment>
    );
};

export default InputTextField;
