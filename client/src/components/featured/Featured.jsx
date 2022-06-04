import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
       {type && (
           <div className="category">
               <span>{type === "movie" ? "Movies" : "Series"}</span>
               <select name="genre" id="genre">
                   <option >Genre</option>
                   <option value="adventure">Adventure</option>
                   <option value="comedy">Comedy</option>
                   <option value="crime">Crime</option>
                   <option value="fantasy">Fantasy</option>
                   <option value="historical">Historical</option>
                   <option value="horror">Horror</option>
                   <option value="romance">Romance</option>
                   <option value="sci-fi">Sci-Fi</option>
                   <option value="thriller">Thriller</option>
                   <option value="western">Western</option>
                   <option value="animation">Animation</option>
                   <option value="drama">Drama</option>
                   <option value="documantary">Documantary</option>
               </select>
           </div>
       )}
        <img src="https://pixfeeds.com/images/33/612334/1200-468818706-young-people-watching-film.jpg" alt="" />
        <div className="info">
            <img src="https://www.pngmart.com/files/21/Squid-Game-Official-Logo-PNG.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora reiciendis at perferendis commodi? Nisi, quidem doloribus voluptatem ullam voluptates vitae? Blanditiis ratione qui quas, rerum sed natus voluptas possimus?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
