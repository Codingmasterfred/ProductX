


function FormForSmallComputer(props){
    return(
        <>
        <form type="submit" onSubmit={props.Submit} style={{ display: "flex", flexDirection:"column",alignItems:"center" }}>
         <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={props.labelStyleForMediumAdmin} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={props.onchangeTitle}></input></label>
          <label style={props.labelStyleForMediumAdmin} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={props.onchangeDescription}></input></label>
          <label style={props.labelStyleForMediumAdmin} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={props.onchangePrice}></input></label></div>
         <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={props.labelStyleForMediumAdmin} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={props.onchangeCategory}></input></label>
          <label style={props.labelStyleForMediumAdmin} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={props.onchangeImageUrl}></input></label>
          <button type="submit" style={props.buttonStyleForMediumAdmin} onClick={props.Submit} >Submit</button></div>
        </form>
        <form style={{ border: "1px solid black", width: "80%", alignSelf: "center", display: "flex", justifyContent: "space-between" }}>
          <div id="deletedSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
            <select onChange={props.Selected} style={props.selectionStyle}>
              <option value="">Delete A Product</option>
              {
                props.Products.map(arr => {
                  return (
                    <option onClick={() => props.setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                  )
                })
              }
            </select>
            <button onClick={props.Delete} style={props.buttonStyle} >delete</button>
          </div>
          <div id="updateSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
            <select onChange={props.Selected} style={props.selectionStyle}>
              <option value="">Update A Product</option>
              {
                props.Products.map(arr => {
                  return (
                    <>
                      <option value={arr._id}>{arr.Title}</option>
                      {/* {SelectedProductForUpdate(arr)} */}



                    </>
                  )
                })
              }
            </select>
            <button onClick={props.ShowCanvasForm} style={props.buttonStyle} >Update</button></div>
        </form>
        </>
    )
}
export default FormForSmallComputer