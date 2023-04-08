import mike from '../../assets/customers/mike.jpg';
import yolanda from '../../assets/customers/yolanda.jpg';
import danielle from '../../assets/customers/danielle.jpg';
import roger from '../../assets/customers/roger.jpg';


import { Card, Box, Image, Text } from '@chakra-ui/react';

function CustomerSay() {
  const reviews = [
    {
      id: 1,
      name: 'Mike Frazier',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      rating: 4.6,
      image: mike,
    },
    {
      id: 2,
      name: 'Yolanda Romero',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      rating: 4.2,
      image: yolanda,
    },
    {
      id: 3,
      name: 'Danielle Jenkins',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      rating: 3.4,
      image: danielle,
    },
    {
      id: 4,
      name: 'Roger Bates',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      rating: 4.8,
      image: roger,
    },
  ];

  return (
    <Box className='testimonials' bg='var(--color-primary)' py='16'>
      <Box maxW='container.xl' mx='auto'>
        <Box textAlign='center'>
        <h2 className='testimonials__title'>Testimonials</h2>
        </Box>
        <Box display='flex' mt='8' flexWrap='wrap' justifyContent='space-between'>
          {reviews.map((review) => (
            <Card
              key={review.id}
              boxShadow='xl'
              borderRadius='lg'
              w='full'
              bg='white'
              mt='8'
              mx='auto'
              maxW={['xs', 'sm', 'md', 'lg']}
            >
              <Box p='6'>
                <Box d='flex' alignItems='center'>
                  <Box mr='3'>
                    <Image borderRadius='full' boxSize='40px' src={review.image} alt={review.name} />
                  </Box>
                  <Box>
                    <Text fontWeight='semibold'>{review.name}</Text>
                    <Text fontSize='sm'>{`Rating: ${review.rating}`}</Text>
                  </Box>
                </Box>
                <Box mt='4'>
                  <Text fontSize='sm' color='gray.600'>
                    {`"${review.review}"`}
                  </Text>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerSay;
