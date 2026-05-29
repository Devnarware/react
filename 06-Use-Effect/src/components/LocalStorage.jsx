

const LocalStorage = () => {
   
    // const user = {
    //     name: "Dev",
    //     age: 20,
    //     mail: "dev@example.com"
    // }    
    
    // user.gender = 'male'
    

    // const userInfo = JSON.stringify(user)
    // localStorage.setItem('userInfo', userInfo)

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    

  return (
    <div className="m-10 text-3xl">
        <h2>{userInfo.name}</h2>
        <h2>{userInfo.mail}</h2>
        <h2>{userInfo.age}</h2>
        <h2>{userInfo.gender}</h2>
    </div>
  )
}

export default LocalStorage