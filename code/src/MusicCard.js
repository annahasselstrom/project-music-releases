import React from 'react';
import { MusicAlbum } from './card-component-directory/MusicAlbum';
import { MusicArtist } from './card-component-directory/MusicArtist';
import { MusicImage } from './card-component-directory/MusicImage';

// MusicCard component for the music item which will house the album image, album title and artist name
export const MusicCard = (prop) => {
    return (
        <div className="music-card-container">
        {/* Here we're only creating ONE card, accessing the array information for
        each of the three elements inside the card. We will then be able to access the respective data (i.e. name, id type etc) 
        in their respective component files e.g. MusicImage, MusicAlbum and MusicArtist
        to then further specify which part of these we want to use in that
        component folder */}
        <MusicImage image={prop.item.images} />
        <MusicAlbum albumname={prop.item.name} albumlink={prop.item.external_urls} />
        <MusicArtist artistsname={prop.item.artists} />
        </div>
    );
};