import React from 'react';
import styled from 'styled-components';


type ButtonProps={
    removePropertyHandler:(id:string) => void
}


const DeletePropertyButton=(props:ButtonProps)=>{
    return (
        <button onClick={()=>{props.removePropertyHandler("dummy argument")}}>X</button>
    )
}

export default DeletePropertyButton;