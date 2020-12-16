import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import './Photos.css'

const PhotoDetails = ({ photos }) => {
    const id = useParams().id
    const photo = photos ? photos.find(photo => photo.id === Number(id)) : null
    return (
        <div className='photo-details'>
            {
                photo ?
                    <Fragment>
                        <h2>{photo.title}</h2>
<<<<<<< HEAD
                        <img className='fullsize-img' key={photo.id} src={photo.url} alt="Fullsize" />
=======
                        <img key={photo.id} src={photo.url} alt="Fullsize" />
>>>>>>> c3f2200 (Sivun vaihto kesken)
                    </Fragment>
                    : <h2>Loading...</h2>

            }
        </div>
    );
}

export default PhotoDetails