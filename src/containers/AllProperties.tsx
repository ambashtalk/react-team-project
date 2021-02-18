import React, { useState } from 'react';
import styled from 'styled-components'
import PropertyCard from '../components/PropertyCard'




const AllProperties=()=>{
    let [DeletePropertyState,setDeletePropertyState]=useState(true);



    let dummyProperties=[{id:"1",nameOfProperty:"simi",locationOfProperty:"america",costOfProperty:"1000"},
                        {id:"2",nameOfProperty:"sim2",locationOfProperty:"india",costOfProperty:"20000"},
                        {id:"3",nameOfProperty:"sim3",locationOfProperty:"england",costOfProperty:"3000"}
                        ]

    function removePropertyHandler(id:string){
        console.log(id);
        //make a call for delete from file
        dummyProperties.filter(function(user) { 
            return user.id !== id; 
        })
        if(DeletePropertyState===true){
            setDeletePropertyState(false);
        }
        else{
            setDeletePropertyState(true);
        }
                            
                          
    }
    
    

    return (
        <div>
       
        {dummyProperties.map(function(user,i){
            return (<PropertyCard key={user.id} nameOfProperty={user.nameOfProperty} locationOfProperty={user.locationOfProperty} costOfProperty={user.costOfProperty} removePropertyHandler={()=>{removePropertyHandler(user.id)}}/>)

        })
        

        }
        </div>



    )
}


export default AllProperties;
