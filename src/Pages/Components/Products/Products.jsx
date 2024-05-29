import React from 'react'
import { useComponenets } from '../../../hooks/useComponents'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'
import Title from '../../Shared/Title'

const Products = () => {
    const [components] = useComponenets()
  return (
    <div className='pt-24'>
        <Title heading={'All Products'} subheading={'build your pc'}></Title>
        Products Loaded: {components.length}
        <div className='md:grid grid-cols-4 gap-4 justify-items-center'>
                {
                    components.map(comp => (
                        <ComponentCard
                            key={comp.id}
                            name={comp.name}
                            price={comp.price}
                            category={comp.category}
                        />
                    ))
                }
            </div>
    </div>
  )
}

export default Products