
import Hi from "./third";
function Hello(prop){
    console.log(prop)

    return (
        <>
        <h1>this second page</h1>
        <h1>first page varable {prop.c}</h1>
        <Hi d={prop.c}/>

        </>
    )
}
export default Hello;