import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const deleteData=(id)=>{
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




    const [data,setData]=useState([{"name":"","cgpa":""}])
    
    var [admno,setAdmno]=useState("")
    const subData=()=>{
        const data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:5009/api/search",data).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
        })
    }
  return (
    <div>
        <NavBar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label for="" className="form-label">Admission Number</label>
                            <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Enter Admission No" type="text" className="form-control" />
                        </div>
                        <div>
                            <button onClick={subData} className="btn btn-primary">SEARCH</button>
                        </div>
                    </div>
                    {data.map((value,key)=>{
                        return <div className='row g-3'>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className="form-label">Name</label>
                                <input value={value.name} type="text" className="form-control"/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <label for="" className='form-label'>CGPA</label>
                                <input value={value.cgpa} type="text" className='form-control'/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                <button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button>
                            </div>
                            </div>
                            
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search