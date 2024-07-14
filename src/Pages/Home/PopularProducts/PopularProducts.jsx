import Title from '../../Shared/Title'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'
import { useComponenets } from '../../../hooks/useComponents'

const PopularPorducts = () => {
    const [components] = useComponenets()

    const filteredComps = components.slice(0, 5)
    return (
        <div className='py-10'>
            <Title heading={'Popular Products'} subheading={'Most Sales'}></Title>
            <div className='md:grid 2xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center'>
                {
                    filteredComps.map(comp => (
                        <ComponentCard
                            key={comp.id}
                            name={comp.name}
                            price={comp.price}
                            category={comp.category}
                            brand={comp.brand}
                            imageUrl={comp.imageUrl}
                            _id={comp._id}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default PopularPorducts