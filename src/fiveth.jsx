import Fake from "./fake.jsx/fakenormal"
import a from "./images/china.jpg"
import b from "./images/cities-in-america.jpg"
import c from "./images/download.jpeg"
import d from "./images/greece.webp"
import e from "./images/jorden.webp"
import f from "./images/mumbai-belongs-to-india-2020-09-22.jpg"
var img="https://miro.medium.com/v2/resize:fit:1400/1*pzbYin_gqDNVjOSLQs06NQ.jpeg"
function Img(){
    return (
       <>
       <h1>images</h1>
       <img src={img} width={400} height={400} />
       <img src={a} width={400} height={400}></img>
       <img src={b} width={400} height={400}></img>
       <img src={c} width={400} height={400}></img>
       <img src={d} width={400} height={400}></img>
       <img src={e} width={400} height={400}></img>
       <img src={f} width={400} height={400}></img>
       <hr />
       <Fake/>
       </>
       
       
    )
}
export default Img;