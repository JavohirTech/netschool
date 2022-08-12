import '../../styles_umar.css'
import { Link } from 'react-router-dom';
import { HomeMainBtn } from '../Home';

const BrowseCategory = ()=>{
    return(
        <>
            <div className="browse_category">
                <small className="home_theme">
                    Browse Category
                </small>
                <h2>Popular Topics To Learn</h2>
                <div className="browse_category_cards">
                    <Link to="/architect">
                        <div className="browse_category_card">
                            <i className='fas fa-cog fa-3x'></i>
                            <h2>Architect Design</h2>
                            <small>3 courses</small>
                        </div>
                    </Link>
                    <Link to="/business">
                        <div className="browse_category_card">
                            <i className='fas fa-computer fa-3x'></i>
                            <h2>Business Management</h2>
                            <small>3 courses</small>
                        </div>
                    </Link>
                    <Link to="/manage">
                        <div className="browse_category_card">
                            <i className='fas fa-server fa-3x'></i>
                            <h2>Business Management</h2>
                            <small>3 courses</small>
                        </div>
                    </Link>
                    <Link to="/ai">
                        <div className="browse_category_card">
                        <i className="fas fa-microchip fa-3x"></i>
                            <h2>Artificial Inteligence</h2>
                            <small>3 courses</small>
                        </div>                  
                    </Link>
                    
                </div>
                <HomeMainBtn manzil="/courses" dizayn="browse_btn" text="See All Categories"/>
            </div>
        </>
    )
}

export default BrowseCategory