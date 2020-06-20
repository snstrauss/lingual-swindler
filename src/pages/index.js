import React from "react"
import SongViewer from "../components/song-viewer/song-viewer"
import { graphql } from 'gatsby';

import './global.scss';

function mapSongs(data){
  return data.allFile.edges.map(e => e.node.childSongsJson);
}

const Home = ({ data }) => {

  const songs = mapSongs(data);

  const song = songs.filter(song => song.choose)[0];

  return (
    <>
      <SongViewer song={song}/>
    </>
  )
}

export const query = graphql`query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "songs"}}) {
    edges {
      node {
        name
        childSongsJson {
          links
          image
          title
          video
          artist
          choose
        }
      }
    }
  }
}`;

export default Home;
