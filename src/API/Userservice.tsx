import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'antd';
import HistoryTable from '../HistoryTable/HistoryTable';
import { Spin } from 'antd'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  release_date:string;
  vote_average:number;
  rating: number;
}



const Userservice: React.FC = () => {



  const [movie, setMovie] = useState<Movie | null>(null);
  const [modal2Open, setModal2Open] = useState(false);


  useEffect(() => {
    chrome.storage.local.get(['currentMovie'], (result) => {
      setMovie(result.currentMovie);
      console.log("Movie",movie);
      
    });
  }, []);

  if (!movie) {
    return <h1><Spin /></h1>;
  }

//Star Generate Code

const getStars = (vote_average: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= vote_average) {
      stars.push(<FaStar key={i} style={{ color: 'yellow' }}  />);
    } else if (i === Math.ceil(vote_average) && !Number.isInteger(vote_average)) {
      stars.push(<FaStarHalfAlt key={i} style={{ color: 'yellow' }} />);
    } else {
      stars.push(<FaRegStar key={i} style={{ color: 'yellow' }} />);
    }
  }
  return stars;
};

  return (
    <div>
      <div style={{ paddingLeft: '88%' }}>
        <Button type="primary" onClick={() => setModal2Open(true)}>
          History
        </Button>
        <Modal
          title="History"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <HistoryTable />
        </Modal>
      </div>
      <div>
        <Card style={{ width: '87%' }}>
          <h4>{movie.title}</h4>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{width:'10rem',boxShadow:'rgba(50, 50, 93, 0.25)'}} />
          <p>Movie review:</p>
          <p>{movie.overview}</p>
          <p>Release Date: {movie?.release_date}</p>
          <p>Ratings: {getStars(movie?.vote_average)}</p>

        </Card>
      </div>

    </div>
  );

};

export default Userservice;
