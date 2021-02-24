import React from 'react';
import styled from 'styled-components';
import {DeleteButton} from './DeletePropertyButtonStyles' 


type ButtonProps={
    removePropertyHandler:(id:string) => void
}


const DeletePropertyButton=(props:ButtonProps)=>{
    return (
        <DeleteButton onClick={()=>{props.removePropertyHandler("dummy argument")}}>Edit</DeleteButton>
    )
}

export default DeletePropertyButton;