import '../styles_umar.css'
import '../assets/responsive.css'
import HomeGirl from  '../assets/home_girl.png'
import { Link } from 'react-router-dom';
import BrowseCategory from './Home/BrowseCategory';
import AboutUs from './Home/AboutUs';
import FeaturedCourses from './Home/FeaturedCourses';
import Footer from './Footer';

const Home = ()=>{
    return(
        <>
            <div className='home'>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{width: '100%'}}>
                            <h1 className='home_title_thin'>Get Startes Your</h1>
                            <h1 className='home_title'>Online Lesson</h1>
                            <p>Lorem ipsum dolor sit amet consectetur aonsectetur temporibus natus in dolores fugit veniam deleniti quisquam dolorum! Quae voluptatibus ipsam impedit voluptas!</p>
                            <button className='main_buttoncha'><Link to="/courses">Get Started Today</Link></button>
                        </div>
                        <div className="col">
                            <img className='homegirl' src={HomeGirl} width="900px" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <BrowseCategory/>
            </div>
            <AboutUs/>
            <FeaturedCourses/>
            <Footer/>
        </>
    )
}

export default Home



export const HomeMainBtn = (props)=>{
    return(
        <>
            <Link className={props.dizayn} to={props.manzil}>{props.text}</Link>
        </>
    )
}
