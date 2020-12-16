import React from 'react'

const Photos = ({ photos }) => {
    return (
        <div>
            <h1>Hello</h1>
            {photos ? photos.map(photo => <p>{photo.title}</p>) : null}
        </div>
    );
}

export default Photos