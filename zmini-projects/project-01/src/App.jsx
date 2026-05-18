import Card from "./components/Card.jsx"
const img = "https://imgs.search.brave.com/-kYf5CYKNI9LVjMyP3ue1jngBaYrdPgP00RRu3ty89M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzcw/L2FjLzNiNzBhYzdj/M2RhMjhlNDdmZGVl/NGNiMjlkYmM1YzY3/LmpwZw"
const App = () => {
  return (
    <>
        <Card comapnyName="Amazon" brandLogo={img} datePosted="5 dayys ago" post="database administrator" tag1="full time" tag2="mid level" pay="$700/hour" location="mubai, india" />
    </>
  )
}

export default App ;