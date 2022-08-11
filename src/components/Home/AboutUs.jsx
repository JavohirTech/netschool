import about_us_img from '../../assets/about_us_img.png'
import '../../styles_umar.css'
import {Link} from 'react-router-dom'

const AboutUs = ()=>{
   return(
      <>
         <div className="about_us">
            <div className="container pad">
               <div className="row about_row">
                  <div className="col about_us_images">
                     <img src={about_us_img} alt="" />
                  </div>
                  <div className="col about_us_matn">
                     <small className="home_theme">
                        About Us
                     </small>
                     <h2>Creating A Community Of <br /> <b>Life Long Leaners</b></h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nesciunt delectus! Quas tempora molestiae blanditiis architecto possimus vero incidunt voluptates nulla commodi ratione, harum, temporibus voluptas cupiditate, veritatis at quae?</p>
                     <div className="about_us_icons">
                        <div className="about_us_icon">
                        <i className="fas fa-briefcase fa-3x"></i>
                           <span>Flexable Classes</span>
                        </div>
                        <div className="about_us_icon">
                           <i className="fa-solid fa-envelope-open-text fa-3x"></i>
                           <span>Educator Support</span>
                        </div>
                     </div>
                     <Link className='main_buttoncha browse_btn' to="/courses">Learn More</Link>
                  </div>
               </div>   
            </div>
         </div>
      </>
   )
}

export default AboutUs