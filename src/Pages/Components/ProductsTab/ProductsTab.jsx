import React from 'react'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'

const ProductsTab = ({items}) => {
    return (
        <div className='lg:grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid md:grid-cols-3  gap-4 justify-items-center'>
            {
                items.map(comp => (
                    <ComponentCard
                        key={comp._id}
                        name={comp.name}
                        price={comp.price}
                        brand={comp.brand}
                        imageUrl={comp.imageUrl}
                        category={comp.category}
                        _id={comp._id}
                    />
                ))
            }
        </div>
    )
}

export default ProductsTab