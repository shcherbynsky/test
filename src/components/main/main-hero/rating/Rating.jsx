import React from 'react'

const Rating = ({ setRating, rating }) => {


    const [hover, setHover] = React.useState(null)

    const ratingBackground = [...Array(11)].map((item, index) => {
        return (


            <span key={index} className="rating__bg-item">
                {index === 0 ? 'Note' : index}
            </span>

        )
    })
    const ratingElements = [...Array(100)].map((item, index) => {
        // const currentRating = index > 0 ? index / 10 : null;
        const currentRating = index / 10;
        let tempRating = rating;
        return (
            
            <label key={index}

                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => {
                    setHover(null)
                }
                }
                className={`rating__item ${index / 10 <= rating || index / 10 <= hover ? '_active' : ''}`}>
                <input type="radio" value={index / 10} className="rating__btn" id="rating" />


            </label>
        )
    })




    return (
        <div className="hero__rating rating">
            <div className="rating__bg">
                {ratingBackground}
            </div>
            <div className="rating__items">
                {ratingElements}
            </div>
        </div>
    )
}

export default Rating