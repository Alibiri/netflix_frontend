import ReactPlayer from "react-player"
import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <ReactPlayer width='1536px' height='753px' controls url='https://www.youtube.com/watch?v=oqxAJKy0ii4'/>
    </div>
  )
}
