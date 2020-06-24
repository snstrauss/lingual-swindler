import React from "react"
import SongViewer from "../components/song-viewer/song-viewer"
import { graphql } from 'gatsby';

import './global.scss';
import { Helmet } from 'react-helmet';

function mapSongs(data){
  return data.allFile.edges.map(e => e.node.childSongsJson);
}

const Home = ({ data }) => {

  const songs = mapSongs(data);

  const song = songs.filter(song => song.choose)[0];

  return (
    <>
      <Helmet>
        <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>
      </Helmet>
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
          links {
            social
            song
          }
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
