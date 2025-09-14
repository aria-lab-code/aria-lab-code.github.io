import React from 'react';

const Home = React.lazy(() => import('@/pages/Home'));
const People = React.lazy(() => import('@/pages/People'));
const Research = React.lazy(() => import('@/pages/Research'));
const Publications = React.lazy(() => import('@/pages/Publications'));
const Videos = React.lazy(() => import('@/pages/Videos'));
const Photos = React.lazy(() => import('@/pages/Photos'));


export const routes = [
  { path: '/', element: Home },
  { path: '/people', element: People, title: "People" },
  { path: '/research', element: Research, title: "Research" },
  { path: '/publications', element: Publications, title: "Publications" },
  { path: '/videos', element: Videos, title: "Videos" },
  { path: '/photos', element: Photos, title: "Photos" },
];
