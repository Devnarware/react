import Leftside from "./Leftside.jsx"
import Rightside from "./Rightside.jsx"

function Page() {
  return (
    <div className="h-[90vh] bg-amber-600 flex items-center gap-20 py-8 px-10">
        <Leftside />
        <Rightside />
    </div>
  )
}

export default Page