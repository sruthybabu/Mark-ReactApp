import axios from 'axios'
import React, { useState } from 'react'

const Viewmark = () => {
    const deleteAdd=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5009/api/delete",data).then(
            (response)=>{
                
                if(response.data.status=="success")
                {
                    alert("Successfully deleted")
                }
                else
                {
                    alert("Failed to delete")

                }

        })
    }


    var [viewlist,setViewlist]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
   axios.get("http://localhost:5009/api/studentview").then(
        (response)=>{
             console.log(response.data)
             setViewlist(response.data)
             setLoadstatus(false)
        }
    )
  return (
    <div>
         <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                    {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<table className="table table-primary table-strip">
  <thead className="table-success">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Admission No</th>
      <th scope="col">CGPA</th>
      <th scope='col'>Action</th>
     
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
        return <tr>
        
        <td>{value.name}</td>
        <td>{value.admno}</td>
        <td>{value.cgpa}</td>
        <td><button onClick={()=>{deleteAdd(value._id)}} className='btn btn-danger'>DELETE</button></td>
      </tr>
    })}
   
    
  </tbody>
</table>}

                    </div>

                </div>

            </div>

        </div>







    </div>
  )
}

export default Viewmark