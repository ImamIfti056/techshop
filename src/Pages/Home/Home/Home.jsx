import { Helmet } from 'react-helmet-async';

import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import PopularPorducts from "../PopularProducts/PopularProducts"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Techshop | Home</title>
      </Helmet>
      <Banner />
      <div className="container">
        <Category />
        <PopularPorducts />
      </div>
    </>
  )
}

export default Home