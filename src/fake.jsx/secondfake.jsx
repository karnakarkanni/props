function S_fake(prop){
    var d=prop.b

    var res=d.map((val,ind,arr)=>{

        return (

            <tr>
                <td>{val["id"]}</td>
                <td>{val["title"]}</td>
                <td>{val["price"]}</td>
                <td>{val["description"]}</td>
                <td>{val["category"]}</td>
                <td><img src={val["image"]} width={100} /></td>
            </tr>

        )
    })

    return (
        <>
        <h1>this is child fake store api</h1>
        <table border={2}>{res}</table>

        </>
    )
}
export default S_fake;