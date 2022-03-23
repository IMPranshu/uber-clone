import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from "./components/Map"
 

const Confirm = () => {

  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = () => {
    const pickup = "Sanata Monica";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
    new URLSearchParams({
      access_token : 'pk.eyJ1IjoiaW1wcmFuc2h1IiwiYSI6ImNsMTI3empxNDAwdTczZG1iZGY3d284ZTYifQ.fTLsYSHaN_dulOVgl6hf7Q',
      limit: 1
    })).then(response => response.json()).then(data => {
      setPickupCoordinates(data.features[0].center);

    })
  }

  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
    new URLSearchParams({
      access_token : 'pk.eyJ1IjoiaW1wcmFuc2h1IiwiYSI6ImNsMTI3empxNDAwdTczZG1iZGY3d284ZTYifQ.fTLsYSHaN_dulOVgl6hf7Q',
      limit: 1
    })).then(response => response.json()).then(data => {
      setDropoffCoordinates(data.features[0].center);
    })
  }
  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates(); 
  }, [])
  return (
    <Wrapper>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        {/* Ride Selector */}
      
        {/* Confirm Button */}

      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div` 
flex flex-col h-screen
`
const RideContainer = tw.div` 
flex-1 
`