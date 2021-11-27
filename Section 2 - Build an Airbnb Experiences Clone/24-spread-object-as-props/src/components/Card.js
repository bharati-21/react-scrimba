/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import star from './Assets/star.webp'


export default function Card(item) {    
    console.log(item)
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card" >
            {badgeText ? <div className="card--badge">{badgeText}</div> : ""}
            <img src={require(`./Assets/${item.coverImg}`).default} className="card--image" />
            <div className="card--stats">
                <img src={star}className="card--star" />
                <span>{item.rating}</span>
                <span className="gray">({item.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card-title">{item.title}</p>
            <p><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}