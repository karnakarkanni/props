
import Hi from "./third";
function Hello(prop){
    console.log(prop)

    return (
        <>
        <h1>this second page {prop.c}</h1>
        
        <Hi d={prop.c}/>

        </>
    )
}
export default Hello;