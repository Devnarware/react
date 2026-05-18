

const Card = (props) => {

  console.log(props);
  

  return (
    <div className="card">
        <img src={props.img} alt="pfp" />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat!</p>
        <button>Click me</button>

    </div>
  )
}

export default Card