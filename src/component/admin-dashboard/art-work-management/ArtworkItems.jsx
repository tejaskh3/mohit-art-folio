import { useContext } from 'react';
import ArtWorkCard from '../../ArtWorkItemCard';
import { ArtworkContext } from '../../../context/ArtworkContext';

const ArtWorkItems = () => {
  const { artwork } = useContext(ArtworkContext);
  return (
    <div className="flex flex-wrap justify-center mt-5">
      {artwork.map(({ imageURL, name, description, _id }) => (
        <ArtWorkCard
          key={_id}
          imageUrl={imageURL}
          imageName={name} // Replace with actual image name
          imageDescription={description}
          artworkId={ _id }
          isAdmin={true}
        />
      ))}
    </div>
  );
};

export default ArtWorkItems;
