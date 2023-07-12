import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from './views/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello world</div>,
    errorElement: <ErrorPage />,
  },
])
