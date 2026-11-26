import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowMarks =  () => {
    const [marks, setMarks] = useState([])

    useEffect(() => {
    
            const token = localStorage.getItem("token");
    
           
    
             
            if (!token) {
                navigate("/login");
                return;
            }
    
             showMarks();
    
        }, []);
    
        const showMarks = async () => {
    
            try {
    
                const token = localStorage.getItem("token");
    
                const response = await axios.get(
                    "http://localhost:3000/marks",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
    
                console.log(response.data.marks)

                setMarks(response.data.marks)
    
                
    
            } catch (error) {
    
                console.log(error);
    
                alert("Session Expired");
    
                localStorage.removeItem("token");
    
                navigate("/login");
            }
        };


  return (
    <div>
        <h1>ShowMarks</h1>

        <div>
            {
                  marks.map((item,i)=>{
                  return <div key={item._id}>
                    <p>Name: {item.name}</p>
                      <p>Marks : {item.marks}</p>
                  </div>
                  })
            }
        </div>
    </div>
  )
}

export default ShowMarks