import { Add, PlayArrow, ThumbDown, ThumbUpOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from 'react' 
export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 
  "https://player.vimeo.com/video/694324208?h=4c1710f5e7";
  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/Squid_Game_Crypto_News_Kryptowa%CC%88hrung.jpg" alt="" />
        {isHovered && (
        <>
         <video src ={ trailer } autoPlay = {true} loop/>
         <div className="itemInfo">
              <div className="icons">
                  <PlayArrow className="icon"/>
                  <Add className="icon"/>
                  <ThumbUpOutlined className="icon"/>
                  <ThumbDown className="icon"/>

              </div>
              <div className="itemInfoTop">
                  <span>1 hour 14 mins</span>
                  <span className="limit">+16</span>
                  <span>1999</span>
              </div>
              <div className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Velit, quas atque. 
              </div>
              <div className="genre">Action</div>
          </div>
        </>
       )}
    </div>

  )
}
