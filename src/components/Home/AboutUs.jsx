import about_us_man from '../../assets/about_us_man.jpg'
import about_us_pink from '../../assets/about_us_pink.jpg'
import about_us_right from '../../assets/about_us_right.jpg'
import '../../styles_umar.css'

const AboutUs = ()=>{
   return(
      <>
         <div className="about_us">
            <div className="container">
               <div className="row about_row pad">
                  <div className="col about_us_images">
                     <img src={about_us_man} className="about_us_man" alt="" />
                     <img src={about_us_pink} className="about_us_pink" alt="" />
                     <img src={about_us_right} className="about_us_right" alt="" />
                  </div>
                  <div className="col">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nesciunt delectus! Quas tempora molestiae blanditiis architecto possimus vero incidunt voluptates nulla commodi ratione, harum, temporibus voluptas cupiditate, veritatis at quae?</p>
                  </div>
               </div>   
            </div>
         </div>
      </>
   )
}

export default AboutUs