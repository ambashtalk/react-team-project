import React, { useState } from "react";
import DeletePropertyButton from "../DeletePropertyButton/DeletePropertyButton";
import {
  PropertyDetails,
  CardHolder,
  UniquePropertyDetails,
  PropertyImageStyes,
  ImageWithDetailsStyles,
  CardContainer,
} from "./PropertyCardStyles";
import { FloatButtonArea } from "../../../SignUpForm/SignUpFormComponents";

type CardProps = {
  id: string;
  nameOfProperty: string;
  locationOfProperty: string;
  costOfProperty: string;
  activeUser: string;
  typeOfProperty: string;
  descriptionOfProperty: string;
  ownerOfProperty: string;
  registrationDateOfProperty: string;
  removePropertyHandler: (id: string) => void;
};

const PropertyCard = (props: CardProps) => {
  let [fullPropertyDetailsToggler, setfullPropertyDetailsToggler] = useState(
    false
  );

  function givefullviewofproperty() {
    if (fullPropertyDetailsToggler == false) {
      setfullPropertyDetailsToggler(true);
    } else {
      setfullPropertyDetailsToggler(false);
    }
  }

  let imagesource = "https://picsum.photos/450/450?random=" + props.id;

  return (
    <CardContainer onClick={givefullviewofproperty}>
      <CardHolder>
        <ImageWithDetailsStyles>
          <PropertyDetails>
            <PropertyImageStyes src={imagesource}></PropertyImageStyes>
            <UniquePropertyDetails>
              Name:{props.nameOfProperty}
            </UniquePropertyDetails>
            <UniquePropertyDetails>
              Location:{props.locationOfProperty}
            </UniquePropertyDetails>
            <UniquePropertyDetails>
              Cost:{props.costOfProperty}
            </UniquePropertyDetails>

            {fullPropertyDetailsToggler ? (
              <UniquePropertyDetails>
                Property Type:{props.typeOfProperty}
              </UniquePropertyDetails>
            ) : null}
            {fullPropertyDetailsToggler ? (
              <UniquePropertyDetails>
                Description:{props.descriptionOfProperty}
              </UniquePropertyDetails>
            ) : null}
            {fullPropertyDetailsToggler ? (
              <UniquePropertyDetails>
                Owner:{props.ownerOfProperty}
              </UniquePropertyDetails>
            ) : null}
            {fullPropertyDetailsToggler ? (
              <UniquePropertyDetails>
                Registration Date:{props.registrationDateOfProperty}
              </UniquePropertyDetails>
            ) : null}
          </PropertyDetails>
          <div>
            {props.activeUser == props.ownerOfProperty ? (
              <DeletePropertyButton
                removePropertyHandler={props.removePropertyHandler}
              />
            ) : null}
          </div>
        </ImageWithDetailsStyles>
      </CardHolder>
      <FloatButtonArea />
    </CardContainer>
  );
};

export default PropertyCard;
