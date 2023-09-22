import MohitImage from '../assets/mohit.jpg';
import { Typography } from '@material-tailwind/react';
import ProfilePic from '../assets/profile-pic.jpg'
const Biography = () => {
  return (
    <>
      <Typography variant="h1" style={{color:'#BEADFA'}} className="text-4xl text-center mb-5">
        Biography
      </Typography>
      <div className="flex flex-col-reverse md:flex-row p-10 gap-2 mt-10 min-h-screen">
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="">
            <div className="flex flex-row justify-center">
              <img src={ProfilePic} className="h-40 w-40 m-2" alt="" />
              Through my artwork, I strive to capture various aspects of life
              and express the intricate workings of the mind. The figures I
              create on paper and canvas serve as a representation of the
              profound expressions that emanate from within. I would describe my
              work as the “line of life,” where every twist and turn embodies
              life’s struggles, joys, and moments of reprieve.
            </div>
            Within my art, one can discern both happiness and sadness, as life
            itself is an enchanting blend of these contrasting emotions.
            Happiness and sorrow exist as opposing sentiments, intertwined and
            inseparable. Life, however, is far from a linear journey; it is
            imbued with rhythm and dynamics. It is a path where we tread
            joyfully, interrupted intermittently by sorrow and tragedy. The
            dynamic rhythm of the lines in my work serves as a symbolic
            representation of a blissful aesthetic existence, inviting the
            viewer to experience the pulsation of life upon a two-dimensional
            surface.
          </div>
          <div className="">
            Many of my artworks reflect my mental anguish, serving as an outlet
            for my internal struggles. They bear witness to the natural
            exclamation and relentless effort present in my art, as I repeatedly
            emerge from the depths of depression to depict the moments of
            happiness in life. However, the echoes of my memories draw me back
            time and again to this emotional landscape. It is this constant
            interplay between happiness and sadness that imbues my art with its
            wonderful mixture of emotions. In essence, my artist statement
            encapsulates my exploration of life’s complexities and the perpetual
            quest to break through the barriers imposed upon us. Through my art,
            I invite viewers to join me on this journey, to experience the full
            range of human emotions, and to find solace in the knowledge that
            life’s struggles and joys intertwine, ultimately shaping our
            individual narratives.
          </div>
        </div>
        <img
          src={MohitImage}
          alt={'Mohit image'}
          className="h-screen md:w-1/2 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        />
      </div>
    </>
  );
};

export default Biography;
