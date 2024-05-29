import { Helmet } from 'react-helmet-async';
import Products from '../Products/Products';

const Components = () => {
  return (
    <div>
        <Helmet>
        <title>Techshop | Components</title>
      </Helmet>
        <Products />
    </div>
  )
}

export default Components