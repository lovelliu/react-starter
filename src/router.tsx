import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import ErrorPage from './views/ErrorPage'
import CounterPage from './views/CounterPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'counter',
        element: <CounterPage />,
      },
    ],
  },
])
