

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

    

    

  return (
    <div className="m-10 text-3xl">
        
    </div>
  )
}

export default LocalStorage