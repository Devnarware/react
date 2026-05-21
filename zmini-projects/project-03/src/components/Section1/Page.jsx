import Leftside from "./Leftside.jsx"
import Rightside from "./Rightside.jsx"

function Page() {
  return (
    <div className="h-[85vh] flex items-center gap-20 px-15">
        <Leftside />
        <Rightside />
    </div>
  )
}

export default Page