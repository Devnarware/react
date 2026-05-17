
const img = "https://images.unsplash.com/photo-1772371272179-3ecc656fc677?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const Card = () => {
  return (
    <div className="card">
        <img src={img} alt="pfp" />
        <h1>Dev</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat!</p>
        <button>Click me</button>

    </div>
  )
}

export default Card