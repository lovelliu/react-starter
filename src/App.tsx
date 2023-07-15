import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="flex flex-col items-center mt-10%">
      <h1 className="text-xl font-bold">Hello World</h1>
      <hr className="w-xl mb-5" />
      <Outlet />
    </div>
  )
}
