import Leftside from "./Leftside.jsx"
import Rightside from "./Rightside.jsx"

function Page() {
  return (
    <div className="h-[90vh] bg-amber-600 flex items-center gap-20 pt-8 pb-10 px-20">
        <Leftside />
        <Rightside />
    </div>
  )
}

export default Page