import Title from '../../Shared/Title'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'
import { useComponenets } from '../../../hooks/useComponents'

const PopularPorducts = () => {
    const [components] = useComponenets()

    const filteredComps = components.slice(0, 5)
    return (
        <div>
            <Title heading={'Popular Products'} subheading={'Our popular products'}></Title>
            <h3>Products Loaded: {components.length}</h3>
            <div className='md:grid grid-cols-4 gap-4 justify-items-center'>
                {
                    filteredComps.map(comp => (
                        <ComponentCard
                            key={comp.id}
                            name={comp.name}
                            price={comp.price}
                            category={comp.category}
                            _id={comp._id}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default PopularPorducts