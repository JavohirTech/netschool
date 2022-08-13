import "./Card.css"
import { Link } from "react-router-dom"
export const FeaturedCard = ()=> {
    return(
        <>
            <div className="container-b">  
                <div className="row-b">
                    <div className="card-b">
                        <div className="content-b">
                            <div className="front-b">
                                <img className="card-img-b" width="100%" src="https://source.unsplash.com/random/400x300" alt="card-img" />
                                <div className="card-body">
                                    <button className="card-btn-b">Business</button>
                                    <div className="profile-b">
                                        <div className="profile-img-b">
                                            <img src="https://source.unsplash.com/random/300x300" alt="" />
                                            John Doe
                                        </div>
                                        <div className="profile-date-b"><i className="fa-solid fa-clock"></i> 12 works</div>
                                    </div>
                                    <div className="card-title-b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, illum.</div>
                                    <div className="cost-b">
                                        <div className="newOld-cost-b"><span>$150.00</span><del>$190.00</del></div>
                                        <div className="star-b">⭐⭐⭐⭐⭐ <span>(5)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="back-b">
                                <button className="back-btn-b">Language Learning</button>
                                <div className="card-title-b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, illum.</div>
                                <p className="des-b">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem, accusamus tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem, accusamus tempora.
                                </p>
                                <div className="cost-b">
                                    <div className="newOld-cost-b back-cost-b"><span>$150.00</span><del>$190.00</del></div>
                                    <div className="profile-date-b"><i className="fa-solid fa-clock"></i> 12 works</div>
                                </div>
                                <Link to="/courses" className="back-btn1-b">Register Now</Link>
                            </div>                              
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
