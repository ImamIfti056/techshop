import React from 'react'
import { useComponenets } from '../../../hooks/useComponents'
import ComponentCard from '../../Shared/ComponentCard/ComponentCard'
import Title from '../../Shared/Title'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductsTab from '../ProductsTab/ProductsTab';

const Products = () => {
    const [components] = useComponenets()

    const processor = components.filter(comp => comp.category === "processor")
    const motherboard = components.filter(comp => comp.category === "motherboard")
    const ram = components.filter(comp => comp.category === "ram")
    const ssd = components.filter(comp => comp.category === "ssd")
    const casing = components.filter(comp => comp.category === "case")
    const psu = components.filter(comp => comp.category === "psu")
    const keyboard = components.filter(comp => comp.category === "keyboard")
    const mouse= components.filter(comp => comp.category === "mouse")
    const hdd= components.filter(comp => comp.category === "hdd")

    return (
        <div className='pt-24 mb-16'>
            <div className="container">
                <Title heading={'All Components'} subheading={'Build your PC'}></Title>

                <Tabs>
                    <TabList >
                        <Tab>Processor</Tab>
                        <Tab>Motherboard</Tab>
                        <Tab>Ram</Tab>
                        <Tab>SSD</Tab>
                        <Tab>Hard Disk</Tab>
                        <Tab>Power Supply</Tab>
                        <Tab>Casing</Tab>
                        <Tab>Keyboard</Tab>
                        <Tab>Mouse</Tab>
                    </TabList>

                    <TabPanel>
                        <ProductsTab items={processor} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={motherboard} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={ram} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={ssd} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={hdd} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={psu} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={casing} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={keyboard} />
                    </TabPanel>
                    <TabPanel>
                        <ProductsTab items={mouse} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Products