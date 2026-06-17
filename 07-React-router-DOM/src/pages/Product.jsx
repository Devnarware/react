import { Link, Outlet } from "react-router-dom"

function Product() {
  return (
    <div>
      <h1
        className="text-6xl text-[#adadad] h-200  flex items-center justify-center"
      >Products</h1>

      <div className="flex justify-center gap-30 m-5 text-[#cecece]">
        <Link to='/product/men'className="text-2xl " >Men</Link>
        <Link to='women'className="text-2xl " >Women</Link>
        <Link to='kids'className="text-2xl " >Kids</Link>
      </div>
      <Outlet />

    </div>
  )
}

export default Product