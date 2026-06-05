import { Link } from "react-router-dom"

function Product() {
  return (
    <div>
      <h1
        className="text-6xl text-[#adadad] h-200  flex items-center justify-center"
      >Products</h1>

      <Link to='men'
        className="text-4xl text-white"
      >Men</Link>
    </div>
  )
}

export default Product