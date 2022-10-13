import React from 'react'
import Image from "next/image";
import PropTypes from 'prop-types'

const CurrencyCard = ({ img, count, name }) => {
    return (
        <div className="card">
            <div className="relative card-img-top">
                <Image src={img} alt="" />
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