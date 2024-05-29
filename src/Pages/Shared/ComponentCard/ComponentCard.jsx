import React from 'react'

const ComponentCard = ({ name, category, price }) => {
    return (
        <div className="card w-64 bg-base-100 shadow-xl border-2">
            <figure className="px-10 pt-10">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ComponentCard