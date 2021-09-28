import React from 'react';


// const Card = ({ number }) => <div className="card">
//     <h4>{number}</h4>
// </div>
const Card = props => <img className="card" src={props.card} alt="card"/>


{/* <div className="gig-img">
                    <img src={a5} alt="a5" />
                </div>
                <div className="gig-description">
                    <h3><span><FaUser style={{color: 'grey'}}/></span>{gig.seller.fullname}</h3>
                    <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                    <p>⭐{gig.rate} ({gig.rateCount})</p>
                    <p className="gig-price"><FaHeart style={{color: 'red'}}/><span>Starting At ${gig.price}</span></p>
                </div> */}


export default Card;