import { useState } from "react"

const FeaturedCourses = ()=>{

   const [toggleState, setToggleState] = useState(1)

   const toggleTab=(index)=>{
      console.log(index);
      console.log(toggleState);
      setToggleState(index)
   }

   return(
      <>
         <div className="featured_courses">
            <div className="container pad">
               <div className="row featured_courses_title">
                  <div className="col">
                     <small className="home_theme">
                        About Us
                     </small>
                     <h2>Pick A Course to Get Started</h2>
                  </div>
                  <div className="col featured_courses_tabs">
                     <span className={toggleState === 1 ? "active" : ""} onClick={()=>toggleTab(1)}>All</span>
                     <span className={toggleState === 2 ? "active" : ""} onClick={()=>toggleTab(2)}>Popularity</span>
                     <span className={toggleState === 3 ? "active" : ""} onClick={()=>toggleTab(3)}>Trending</span>
                     <span className={toggleState === 4 ? "active" : ""} onClick={()=>toggleTab(4)}>Featured</span>
                  </div>
               </div>

               <div className="featured_courses_cards">
                  <div className={toggleState === 1 ? "featured_courses_card_active" :"featured_courses_card"}>
                     <h1>Card 1</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                  </div>






                  
                  <div className={toggleState === 2 ? "featured_courses_card_active" :"featured_courses_card"}>
                     <h1>Card 2</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                  </div>
                  <div className={toggleState === 3 ? "featured_courses_card_active" :"featured_courses_card"}>
                     <h1>Card 3</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                  </div>
                  <div className={toggleState === 4 ? "featured_courses_card_active" :"featured_courses_card"}>
                     <h1>Card 4</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis modi sunt nemo iure dicta veritatis odit fugiat, tempora ratione aspernatur amet a saepe unde veniam ducimus architecto molestiae asperiores?</p>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}

export default FeaturedCourses