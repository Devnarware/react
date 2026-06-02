

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 text-3xl border-b-1">
        <div>
            <h1>PhotoPia</h1>
        </div>
        <div className="flex gap-10">
            <h3>Home</h3>
            <h3>Favorite </h3>
        </div>
    </div>
  )
}

export default Navbar