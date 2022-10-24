import { BlogCards } from "./BlogCards"
import { useSelector } from "react-redux"
export const MyBlog = ()=>{

    const blogs = useSelector((state) => state.blogs.value)

    return (
        <div id="myblog">  
        <h1>My Blogs</h1>
        <div className="blog-container">
            {blogs.map( (e) =>{
                return <BlogCards key={e.id} data={e} color='orange'/>
            })}
            

            </div>
            
        </div>
           
        
    )
}