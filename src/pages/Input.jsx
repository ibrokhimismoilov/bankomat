import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor="curence-input" className="form-label">Summani kiriting</label>
            <input
                id='curence-input'
                value={value}
                onChange={(e) => onChange(e?.target?.value)}
                min={0}
                aria-label="3-digit prefix"
                max={999999999}
                minLength={1}
                maxLength={9}
                pattern="[0-9\/]*"
                type="text"
                className="form-control"
                placeholder="Summani kiriting"
            />
        </div>
    )
}

Input.defaultProps = {
    onChange: () => { }
}

Input.propTypes = {
    onChange: PropTypes.func
}

export default Input