import React from 'react';


export const MusicAlbum = (prop) => {
    return(
        <a href={prop.albumlink.spotify} target="_blank" rel="noopener noreferrer">
            <h4 className="album-name">{prop.albumname}</h4>
        </a>
    );
};

