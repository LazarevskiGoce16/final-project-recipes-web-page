import '../css/Card.css';

export const Card = ({title, imageUrl, body, courseType, time, persons, stars, nextArrows}) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <span>{courseType}</span>
                <img src={imageUrl} alt='coverImg' />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className='card-facilities'>
                <img src={time} alt='clock' className='clock-img'/>
                <span className='time-text'>45 min</span>
                <img src={persons} alt='plate' className='plate-img'/>
                <span className='persons-text'>4 persons</span>
                <img src={stars} alt='stars' className='stars-img'/>
                <span className='stars-text'>28</span>
                <button className='next-arrows-btn'>
                    <img src={nextArrows} alt='nextArrows' />
                </button>
            </div>
        </div>
    )
};
