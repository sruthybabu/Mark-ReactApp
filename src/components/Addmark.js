import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Addmark = () => {
    var [name,setName]=useState("")
    var [admno,setAdmno]=useState("")
    var [cgpa,setCgpa]=useState("")
    const subData=()=>{
        const data={"name":name,"admno":admno,"cgpa":cgpa}
        console.log(data)
        axios.post("http://localhost:5009/api/studentadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                     alert("Successfully added")
                }
                else{
                    alert("failed to add")

                }
            }
        )
    }

  return (
    <div>
        <NavBar/>
       <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Enter admission no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(e)=>{setCgpa(e.target.value)}} placeholder="Enter cgpa" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Addmark