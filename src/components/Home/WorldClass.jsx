import { HomeMainBtn } from "../Home"
import { WorldClassCard } from "../Cards/Card"
const WorldClass = ()=>{
   return(
      <>
         <div className="worldclass">
            <div className="container pad">
               <small className="home_theme">
                  Testimonials
               </small>
               <h2>Student Community Feedback</h2>
               <div className="worldclass_cards">
                  <WorldClassCard/>
                  <WorldClassCard/>
                  <WorldClassCard/>
                  <WorldClassCard/>
               </div>
               <div className="div_for_home_main_btn">
                  <HomeMainBtn manzil="/courses" dizayn="browse_btn" text="See All Categories"/>
               </div>
            </div>
         </div>
      </>
   )
}

export default WorldClass