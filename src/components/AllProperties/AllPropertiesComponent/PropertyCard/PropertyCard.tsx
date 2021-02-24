import React, { useState } from "react";
import { TabTitleButton } from "../../../Profile/profile.style";
import DeletePropertyButton from "../DeletePropertyButton/DeletePropertyButton";
import {
  PropertyDetails,
  CardHolder,
  UniquePropertyDetails,
  PropertyImageStyes,
  ImageWithDetailsStyles,
  CardContainer,
  ButtonDiv,
} from "./PropertyCardStyles";

type CardProps = {
  id: number;
  nameOfProperty: string;
  locationOfProperty: string;
  costOfProperty: string;
  activeUser: string|null;

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
    <CardContainer >
      <CardHolder>
        <ImageWithDetailsStyles>
          <PropertyDetails>
              <div>
                  <PropertyImageStyes src={imagesource}></PropertyImageStyes>
              </div>

              <div>
                   <div>
                      
                        <UniquePropertyDetails>
                        Name:{props.nameOfProperty}
                        </UniquePropertyDetails>
                      
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Location:{props.locationOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Cost:{props.costOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Property Type:{props.typeOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Description:{props.descriptionOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Owner:{props.ownerOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>
                  
                  <div>
                      {fullPropertyDetailsToggler ? (
                          <UniquePropertyDetails>
                            Registration Date:{props.registrationDateOfProperty}
                          </UniquePropertyDetails>
                      ) : null}
                  </div>


              </div>
          </PropertyDetails>

          <ButtonDiv>
                 {props.activeUser == props.ownerOfProperty ? (
                    <DeletePropertyButton
                      removePropertyHandler={props.removePropertyHandler}
                    />
                  ) : null}
                <TabTitleButton onClick={givefullviewofproperty}>View</TabTitleButton>
          </ButtonDiv>
          
        </ImageWithDetailsStyles>
      </CardHolder>
    </CardContainer>
  );
};

export default PropertyCard;
