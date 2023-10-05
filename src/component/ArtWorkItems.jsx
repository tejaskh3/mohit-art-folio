import ArtWorkCard from './ArtWorkItemCard';
import { useContext } from 'react';
import { ArtworkContext } from '../context/ArtworkContext';
import { Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const ArtWorkItems = () => {
  const { artwork } = useContext(ArtworkContext);
  return (
    <div className="flex flex-wrap justify-center mt-5">
      {artwork.length === 0 ? (
        <div className='flex flex-col items-center'>
          <Typography variant="h1">No artwork to show.</Typography>
          <Link>
            <Button className='bg-lightCream'>Back to home</Button>
          </Link>
        </div>
      ) : (
        artwork.map(({ imageURL, name, description, _id }) => (
          <ArtWorkCard
            key={_id}
            imageUrl={imageURL}
            imageName={name} 
            imageDescription={description}
            id={_id}
            isAdmin={false}
          />
        ))
      )}
    </div>
  );
};

export default ArtWorkItems;
