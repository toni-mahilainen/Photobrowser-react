import React from 'react'
import { Link } from 'react-router-dom';
import './Photos.css'

const Photos = ({ photos }) => {
    console.log('photos', photos);
    return (
        <div>
            <div className='photos-container'>
                {photos.map(photo =>
                    <Link className='thumbnail' key={photo.id} to={`/photo/${photo.id}`}>
                        <img src={photo.thumbnailUrl} alt='Thumbnail' />
                    </Link>)}
            </div>
        </div>
    );
}

export default Photos