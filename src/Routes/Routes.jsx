import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';

import Root from '@Root/Root';

import Tag from '@Pages/Tag';
import New from '@Pages/New';
import Auth from '@Pages/Auth';
import Home from '@Pages/Home';
import Tags from '@Pages/Tags';
import Music from '@Pages/Music';
import Track from '@Pages/Track';
import Artist from '@Pages/Artist';
import Popular from '@Pages/Popular';
import Artists from '@Pages/Artists';
import Playlist from '@Pages/Playlist';
import NotFound from '@Pages/NotFound';
import Settings from '@Pages/Settings';
import Favorites from '@Pages/Favorites';
import Collection from '@Pages/Collection';

import SignIn from '@Components/Auth/SignIn/SignIn';
import SignUp from '@Components/Auth/SignUp/SignUp';
import UserTracks from '@Components/User/UserTracks';
import UserArtists from '@Components/User/UserArtists';
import UserPlaylists from '@Components/User/UserPlaylists';

import ProtectedRoute from '@Routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Root />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'music',
            children: [
              {
                path: '',
                element: <Music />,
              },
              {
                path: 'playlists/:id',
                element: <Playlist />,
              },
              {
                path: 'collections/:id',
                element: <Collection />,
              },
              {
                path: 'tags',
                element: <Tags />,
              },
              {
                path: 'tags/:tag',
                element: <Tag />,
              },
              {
                path: 'artists',
                element: <Artists />,
              },
              {
                path: 'artists/:name',
                element: <Artist />,
              },
              {
                path: 'tracks/:id',
                element: <Track />,
              },
              {
                path: 'new',
                element: <New />,
              },
            ],
          },
          {
            path: 'popular',
            element: <Popular />,
          },
          {
            path: 'favorites',
            element: <Favorites />,
            children: [
              {
                path: '',
                element: <UserTracks />,
              },
              {
                path: 'playlists',
                element: <UserPlaylists />,
              },
              {
                path: 'artists',
                element: <UserArtists />,
              },
            ],
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: 'user',
        element: <Auth />,
        children: [
          {
            path: 'sign-in',
            element: <SignIn />,
          },
          {
            path: 'sign-up',
            element: <SignUp />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
