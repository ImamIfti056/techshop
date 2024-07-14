import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {
    return (
        <div id='banner'>
            <div>
            <h1>Build Your Dream PC</h1>
            <button className="btn"><Link to={'/components'}>Browse Components</Link></button>
            </div>
            
        </div>

    )
}

export default Banner