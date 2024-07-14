import { Helmet } from 'react-helmet-async';
import Products from '../Products/Products';

const Components = () => {
  return (
    <>
        <Helmet>
        <title>Techshop | Components</title>
      </Helmet>
        <Products />
    </>
  )
}

export default Components