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

import star from '../Assets/star.webp'

export default function Card() {
    return (
        <section className = "card-container">
            <article className="card">
                <div className="card-ticket-status">Sold Out</div>
            </article>
            <article className="card-content">
                <div className="activity-info">
                    <img src={star} className="star"/>
                    <span className="activity-rating">5.0</span>
                    <span className="activity-number">(6) • </span>
                    <span className="activity-country">USA</span>
                </div>
                <p className="activity-title">Life Lessons with Katie Zaferes</p>
                <p className="activity-cost"><span className="bold">From $136</span> / person</p>
            </article>
        </section>
    )
}