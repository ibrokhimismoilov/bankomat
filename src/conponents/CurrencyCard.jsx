import React from 'react'
import Image from "next/image";
import PropTypes from 'prop-types'

const CurrencyCard = ({ img, count, name }) => {
    return (
        <div className="card">
            <div className="relative">
                <Image
                    className="card-img-top"
                    objectFit={"contain"}
                    src={img}
                    alt="Card image cap"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name} so'm: {count} ta</h5>
            </div>
        </div >
    )
}


CurrencyCard.defaultProps = {
    count: 0,
}


CurrencyCard.propTypes = {
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    count: PropTypes.number,
}

export default CurrencyCard