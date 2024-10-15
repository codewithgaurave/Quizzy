import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import './App.css'
const AxiosUse = () => {
    const [data , setData]=useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchPhotos = async()=>{
            try{
            const response = await 
            axios.get('https://book-store-krwj.onrender.com/book');
            console.log(response);
            setData(response.data.slice(0,10));
            setLoading(false);
            // console.log(da);
            }catch(err){
                setError(err);
                setLoading(false)
            }
        }
        fetchPhotos();
    },[]);

    //render loading state
    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Fetching Data Error</div>
    }

    // const handleclick=(photo)=()=>{
    //     // photo.image
    //     // navigate(`/photos/${photo.id}`,{state:{photo}});
    //     navigate(`/photos/${photo.id}`,{state:{photo}})

    // }
    const handleclick =(photo)=>{
        navigate(`/photo/${photo.id}` ,{state:{photo}});
    }

  return (
    <div className='app'>
        <h1>PhotoGallery</h1>
        <div className='photoContainer'>
            {/* getalldata */}
            {data.map(photo=>(
                <div key={photo.id} className='card' onClick={()=>handleclick(photo)}>
                    <img src={photo.image} alt={photo.title}></img>
                    <h4>{photo.title}</h4>
                    <h4>{photo.price}</h4>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default AxiosUse;
