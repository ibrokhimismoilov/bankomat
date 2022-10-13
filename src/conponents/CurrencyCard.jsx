import React from 'react'
import Image from "next/image";
import PropTypes from 'prop-types'

const CurrencyCard = ({ img, count }) => {
    return (
        <div className="card">
            <div classNameName="relative">
                <Image
                    className="card-img-top"
                    objectFit={"contain"}
                    src={img}
                    alt="Card image cap"
                />
            </div>
            <div className="card-body">
                <p className="card-text">
                    {count}
                </p>
            </div>
        </div>
    )
}


CurrencyCard.defaultProps = {
    count: 0,
}


CurrencyCard.propTypes = {
    img: PropTypes.string,
    count: PropTypes.number,
}

export default CurrencyCard