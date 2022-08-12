import { useState } from "react"
import { Link } from "react-router-dom"
import { HomeMainBtn } from "../Home"
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
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                  </div>

                  <div className={toggleState === 2 ? "featured_courses_card_active" :"featured_courses_card"}>
                  <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                  </div>
                  <div className={toggleState === 3 ? "featured_courses_card_active" :"featured_courses_card"}>
                  <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                  </div>
                  <div className={toggleState === 4 ? "featured_courses_card_active" :"featured_courses_card"}>
                  <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                     <div className="cardcha">
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum corporis, nam quidem natus optio nemo quo a? Dignissimos, nemo iure ea eligendi ipsa dicta maxime? Delectus similique voluptates doloremque.</p>
                     </div>
                  </div>
               </div>
               <div className="div_for_home_main_btn">
                  <HomeMainBtn manzil="/courses" dizayn="browse_btn" text="See All Categories"/>
               </div>
            </div>
         </div>
      </>
   )
}

export default FeaturedCourses