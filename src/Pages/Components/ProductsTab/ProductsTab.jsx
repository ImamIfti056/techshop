import React from 'react'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'

const ProductsTab = ({items}) => {
    return (
        <div className='lg:grid lg:grid-cols-5 md:grid md:grid-cols-3  gap-4 justify-items-center'>
            {
                items.map(comp => (
                    <ComponentCard
                        key={comp._id}
                        name={comp.name}
                        price={comp.price}
                        category={comp.category}
                        _id={comp._id}
                    />
                ))
            }
        </div>
    )
}

export default ProductsTab