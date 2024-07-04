import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'News Title 1',
    date: 'July 1, 2024',
    description: 'This is a brief description of the first news item.',
    image: '/images/image1.jpg',
    content: 'This is the detailed content of the first news item.',
  },
  {
    id: 2,
    title: 'News Title 2',
    date: 'June 25, 2024',
    description: 'This is a brief description of the second news item.',
    image: '/images/image2.jpg',
    content: 'This is the detailed content of the second news item.',
  },
  {
    id: 3,
    title: 'News Title 3',
    date: 'June 18, 2024',
    description: 'This is a brief description of the third news item.',
    image: '/images/image3.jpg',
    content: 'This is the detailed content of the third news item.',
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // Add your reducers here if needed
  },
});

export default newsSlice.reducer;

