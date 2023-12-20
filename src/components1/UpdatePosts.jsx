import React, {useState , useEffect} from 'react'
import axiosInstances from './axiosInstances'
import { useParams , useNavigate } from 'react-router-dom';

const UpdatePosts = () => {
    let [coursename , setCoursename] = useState("")
    let [authorname , setAuthorname] = useState("")
    let navigate = useNavigate()
    let {id} = useParams()

    let UpdatePosts = async(e)=>{
        e.preventDefault()
        let payload = {coursename , authorname}
        await axiosInstances.put(`/posts/${id}` , payload)
        navigate('/viewposts')
    }

    useEffect(()=>{
        let fetchData = async()=>{
            let {data} = await axiosInstances.get(`/posts/${id}`)
            setCoursename(data.coursename)
            setAuthorname(data.authorname)
        }
        fetchData()
    },[])

  return (
    <div>
        <form action="" onSubmit={UpdatePosts}>
            <fieldset>
                <legend>UPDATE POST</legend>
                <label htmlFor="CourseName">CourseName</label>
                <input value={coursename} type="text" id="CourseName" onChange={(e)=>{
                    setCoursename(e.target.value)
                }}/> <br /> <br />
                <label htmlFor="AuthorName">AuthorName</label>
                 <input value={authorname} type="text" id="AuthorName" onChange={(e)=>{
                    setAuthorname(e.target.value)
                }}/> <br />
                <button>SUBMIT</button>
            </fieldset>
        </form>
    </div>
  )
}

export default UpdatePosts