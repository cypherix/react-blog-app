import { useState,useEffect,useRef} from "react"
import { useDispatch } from "react-redux"
import { addBlog } from "../Reducers/Blog"
import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"


export const AddBlog = ()=>{
    
    const blog = useSelector((state) => state.blogs.value)
    const Event =useRef(true)
    const dispatch = useDispatch()
    const [title,setTitle] = useState()
    const [content,setContent] =useState()
    const [author,setAuthor] = useState()
    const [update,updated] = useState(false)
    const [data,setData] = useState()
    const [style ,setStyle] =useState({
      display:'none'
    })
    
    const handleSubmit =(e) =>{
        
        e.preventDefault();
        updated(true);
        setData({title,content,author ,id: blog[blog.length-1].id+1})
         console.log("hadled the submit");
         setStyle({
          display:""
         })
         
        
    }
     
    useEffect(()=>{
        if(Event.current){
            console.log("if statement") 
            console.log(data);
            Event.current = false

        }
        else{
            console.log("else statement")
           
           dispatch(addBlog(data))
            
        }
        // eslint-disable-next-line
        },[update])

    return(
        <div id="form">
        {console.log(blog)}
        <form onSubmit={handleSubmit}>
            
           <h1>Add Your Blog</h1> 
          <div>
            <label  htmlFor="name">Title:</label>
            <input id="name" type="text"  required autoComplete="off" onChange={(e)=>setTitle(e.target.value) }/>
          </div>
          
          
          <div>
            <label htmlFor="content">CONTENT
            </label>
            <textarea id="content" required autoComplete="off" onChange={(e)=>setContent(e.target.value)}></textarea>
          </div>
          <div>
            <label htmlFor="email">AUTHOR:</label>
            <input id="email" placeholder="i.e Your Name" required autoComplete="off" onChange={(e)=> setAuthor(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
          <Alert variant="success" style={style}> Successfully Added a New Blog !!!</Alert>

        </form>
      </div>
    )
}