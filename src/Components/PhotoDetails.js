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
                        <img key={photo.id} src={photo.url} alt="Fullsize" />
                    </Fragment>
                    : <h2>Loading...</h2>

            }
        </div>
    );
}

export default PhotoDetails