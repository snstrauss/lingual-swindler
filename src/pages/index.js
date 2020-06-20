import React from "react"
import SongViewer from "../components/song-viewer/song-viewer"
import { graphql } from 'gatsby';

import './global.scss';

function mapSongs(data){
  return data.allFile.edges.map(e => e.node.childSongsJson);
}

const Home = ({ data }) => {

  const songs = mapSongs(data);

  return (
    <>
      <SongViewer song={songs[0]}/>
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
        }
      }
    }
  }
}`;

export default Home;
