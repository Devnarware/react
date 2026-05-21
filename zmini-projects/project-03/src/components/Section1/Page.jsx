import Leftside from "./Leftside.jsx"
import Rightside from "./Rightside.jsx"

function Page() {
  return (
    <div className="h-[90vh] flex items-center gap-22 px-15">
        <Leftside />
        <Rightside />
    </div>
  )
}

export default Page