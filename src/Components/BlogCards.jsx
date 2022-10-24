
export const BlogCards= (props)=>{
    
    return(
        
            <div className={`box ${props.color}`}>
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
                <p>@{props.data.author}</p>
            </div>
                
       
    )
}