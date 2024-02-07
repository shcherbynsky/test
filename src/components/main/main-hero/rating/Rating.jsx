import React from 'react'

const Rating = ({ setRating, rating }) => {


    const [hover, setHover] = React.useState(null)
    const [tempRating, setTempRating] = React.useState(null)



    // mapping backround Note 1 2 3 4 5 6 7 8 9 10
    const ratingBackground = [...Array(11)].map((item, index) => {
        return (


            <span key={index} className="rating__bg-item">
                {index === 0 ? 'Note' : index}
            </span>

        )
    })

    // mapping rating elements from 0.1 to 10
    const ratingElements = [...Array(100)].map((item, index) => {
        const currentIndex = index + 1;
        const currentRating = currentIndex / 10;


        return (

            <label key={currentIndex}

                onClick={() => {
                    setRating(currentRating);
                    setTempRating(currentRating)
                }
                }
                onMouseEnter={() => {
                    setHover(currentRating);
                    setTempRating(null);
                }
                }
                onMouseLeave={() => {
                    setHover(null);
                    setTempRating(rating);
                }
                }
                className={`rating__item ${currentIndex / 10 <= tempRating || currentIndex / 10 <= hover ? '_active' : ''}`}>
                <input type="radio" value={currentIndex / 10} className="rating__btn" id="rating" />


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