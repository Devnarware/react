import Card from "./components/Card.jsx"

const img = "https://images.unsplash.com/photo-1772371272179-3ecc656fc677?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const img2 = "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const App = () => {
  return (
    <div className="parent">
      <Card img = {img} name = "Dev"></Card>
      <Card img = {img2} name = "Devansh"></Card>
    </div>
  )
}

export default App