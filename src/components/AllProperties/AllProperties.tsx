import React, { useEffect, useState } from "react";
import PropertyCard from "./AllPropertiesComponent/PropertyCard/PropertyCard";
import axios from "axios";
import { HomePageParentDiv } from "./AllPropertiesStyle";

type AllPropertiesPropsType = {
  activeUser: string|null;
};

type PropertiesArgumentType = {
  registrationDateOfProperty: string;
  typeOfProperty: string;
  descriptionOfProperty: string;
  ownerOfProperty: string;
  id: number;
  nameOfProperty: string;
  locationOfProperty: string;
  costOfProperty: string;
};

let AllPropertiesArray: PropertiesArgumentType[] = [];

const AllProperties = (props: AllPropertiesPropsType) => {
  let [DeletePropertyState, setDeletePropertyState] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await axios
        .get("http://localhost:8080/properties")
        .then((response) => {
          AllPropertiesArray = response.data;
        });

      if (DeletePropertyState === true) {
        setDeletePropertyState(false);
      } 
      else {
        setDeletePropertyState(true);
      }
    };
    getData();
  }, []);

  function removePropertyHandler(id: number) {
    AllPropertiesArray = AllPropertiesArray.filter(function (
      property: PropertiesArgumentType
    ) {
      console.log(property.id);
      console.log(id);
      return property.ownerOfProperty !== localStorage.getItem('activeUser');
    });
    let action = "http://localhost:8080/properties";
    action = action + "/" + id;
    //console.log(action);
    axios.delete(action);
    if (DeletePropertyState === true) {
      setDeletePropertyState(false);
    } else {
      setDeletePropertyState(true);
    }
  }

  return (
    <HomePageParentDiv>
      {AllPropertiesArray.map(function (property: PropertiesArgumentType) {
        return (
          <PropertyCard
            typeOfProperty={property.typeOfProperty}
            descriptionOfProperty={property.descriptionOfProperty}
            ownerOfProperty={property.ownerOfProperty}
            registrationDateOfProperty={property.registrationDateOfProperty}
            id={property.id}
            activeUser={props.activeUser ? props.activeUser : ""}
            key={property.id}
            nameOfProperty={property.nameOfProperty}
            locationOfProperty={property.locationOfProperty}
            costOfProperty={property.costOfProperty}
            removePropertyHandler={() => {
              removePropertyHandler(property.id);
            }}
          />
        );
      })}
    </HomePageParentDiv>
  );
};

export default AllProperties;
