import '../../styles_umar.css'
import {Link} from 'react-router-dom'
const Membership = ()=>{
   return(
      <>
         <div className="membership pad">
            <div className="container">
               <div className="row membership_row">
                  <div className="col membership_text">
                  <small className="home_theme">
                        About Us
                     </small>
                     <h2>Start your Learning <b>Journey Today!</b></h2>
                     <p>Lorem ipsumibus voluptas cupiditate, veritatis at quae?</p>
                     <button className='main_buttoncha'><Link to="/courses">Get Started Today</Link></button>
                  </div>
                  <div className="col membership_mini_row">
                     <div className="membership_col">
                        <div className="row">
                           <div className="col"><i className='fas fa-cog fa-3x'></i></div>
                           <div className="col"><b>Flexible classes</b> <span>You pick the schedule</span></div>
                        </div>
                     </div>
                     <div className="membership_col">
                        <div className="row">
                              <div className="col"><i className='fas fa-briefcase fa-3x'></i></div>
                              <div className="col"><b>Flexible classes</b> <span>You pick the schedule</span></div>
                           </div>
                     </div>
                     <div className="membership_col">
                           <div className="row">
                              <div className="col"><i className='fas fa-calendar-days fa-3x'></i></div>
                              <div className="col"><b>Flexible classes</b> <span>You pick the schedule</span></div>
                           </div>   
                     </div>
                     <div className="membership_col">
                           <div className="row">
                              <div className="col"><i className='fas fa-headphones-simple fa-3x'></i></div>
                              <div className="col"><b>Flexible classes</b> <span>You pick the schedule</span></div>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Membership