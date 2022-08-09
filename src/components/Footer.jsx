import '../styles_umar.css'
import {Link} from "react-router-dom"
import '../assets/responsive.css'

const Footer = ()=>{
   const navItems = [
      {name: 'Home', url: '/'},
      {name: 'About', url: '/about'},
      {name: 'Courses', url: '/courses'},
      {name: 'Pages', url: '/pages'}, 
      {name: 'Blog', url: '/blog'},
      {name: 'Contact', url: '/contact'},
  ]
   return(
      <>
         <div className="footer">
            <div className="container">
               <div className="footer_center">
                  <h1>NetSchool.uz</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Verium, quos nam id illum asperiores debitis labore fugiat</p>
                  <hr style={{margin: '3% 0', color: 'white'}} />
               </div>
               <div className="row footer_row">
                  <div className="col">
                     <h1>NETSCHOOL.UZ</h1>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit similique officiis laboriosam facilis quas ex quasi modi sint ratione sed nam maxime volu exercitatione aliquam.</p>
                     <div className="media_footer" style={{margin: '20px 0'}}>
                        <i className='fab fa-tiktok' style={{padding: '10px'}}></i>
                        <i className='fab fa-telegram' style={{padding: '10px'}}></i>
                        <i className='fab fa-youtube' style={{padding: '10px'}}></i>
                        <i className='fab fa-twitter' style={{padding: '10px'}}></i>  
                     </div>
                  </div>
                  <div className="col">
                     <h1 style={{fontWeight: '300'}}>Explore</h1>
                     <ul>
                     {navItems.map((navItem)=>{
                        return(
                              <li><Link to={navItem.url}>{navItem.name}</Link></li>
                        )
                     })}
                     </ul>
                  </div>
                  <div className="col">
                     <h1 style={{fontWeight: '300'}}>Foydali linklar</h1>
                     <ul>
                        <li><i className='fas fa-location-arrow' style={{padding: '10px'}}></i>Namangan Pop tuamni</li>
                        <li><i className='fas fa-phone' style={{padding: '10px'}}></i>Telefon raqami</li>
                        <li><i className='fas fa-envelope' style={{padding: '10px'}}></i>Namangan Pop tuamni</li>
                     </ul>
                  </div>
               </div>
               <hr style={{margin: '1% 0', color: 'white'}} />

               <div className="row bottom_footer" style={{padding: '20px'}}>
                  <div className="col">Copyright &copy; 2022 Virtual Group //</div>
                  <div className="col footer_nav">
                     <ul>
                        {navItems.map((navItem)=>{
                           return(
                                 <li><Link to={navItem.url}>{navItem.name}</Link></li>
                           )
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}


export default Footer