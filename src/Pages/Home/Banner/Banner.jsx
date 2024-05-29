import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {
    return (
        <div id='banner'>
            <div>
            <h1>Build your PC</h1>
            <button className="btn btn-active btn-primary"><Link to={'/components'}>Go To PC Builder</Link></button>
            </div>
            
        </div>

    )
}

export default Banner