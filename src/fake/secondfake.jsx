import Sec_tas from "../2nd_task/parent"
import Hi from "../third"
function S_fake(prop){
    var d=prop.b


    var res=d.map((val,ind,arr)=>{

        return (
            <>
           
         

            <tr>
                <td>{val["id"]}</td>
                <td>{val["title"]}</td>
                <td>{val["price"]}</td>
                <td>{val["description"]}</td>
                <td>{val["category"]}</td>
                <td><img src={val["image"]} width={100} /></td>
            </tr>
            </>

        )
    })

    return (
        <>
        <h1>This is child fake store api</h1>
        <table border={2}>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
            {res}</table>

            <Sec_tas/>
         

        </>
    )
}
export default S_fake;