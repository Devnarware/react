

const LocalStorage = () => {
   
   let users = []

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const userInfo2 = JSON.parse(localStorage.getItem("userInfo"))
    const userInfo3 = JSON.parse(localStorage.getItem("userInfo"))

    users.push(userInfo)
    users.push(userInfo2)
    users.push(userInfo3)

    const allUsers = JSON.stringify(users)
    localStorage.setItem("All users info", allUsers)
    

    const data = JSON.parse(localStorage.getItem("All users info"))

        data.map((elem, idx) => {
            console.log(elem.name, idx);
            
        })

  return (
    <div className="m-10 text-3xl">
        {data.map((elem, idx)=>{
            return (
                <div>
                    <h1>for the {idx +1}th user </h1>
                    <h2>{elem.name}</h2>
                    <h2>{elem.age}</h2>
                    <h2>{elem.mail}</h2>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default LocalStorage