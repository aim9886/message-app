import React, {useState , useEffect} from 'react'
import axiosInstances from './axiosInstances';
import { Link } from 'react-router-dom';

const ViewPosts = () => {
    let [data , setData]=useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            let {data} = await axiosInstances.get('/posts')
            setData(data)
        }
        fetchData()
    },[])

    let deleteData = async(id)=>{
        await axiosInstances.delete(`/posts/${id}`)
        window.location.assign('/viewposts')
    }
  return (
    <div style={{display : "flex" , }}>
        {data.map((x)=>{
            return(
                <div style={{border : "2px solid black" , width : "40%" , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center",}}>
                    <h1>{x.coursename}</h1>
                    <h2>{x.authorname}</h2>
                    <Link to={`/updateposts/${x.id}`}>UPDATE</Link>
                    <button onClick={()=>{
                        deleteData(x.id)
                    }}>DELETE</button>
                </div>
            )
        })}
    </div>
  )
}

export default ViewPosts