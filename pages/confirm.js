import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from "./components/Map"
import { useRouter } from 'next/router'
 

const Confirm = () => {
  const router = useRouter()
  const {pickup, dropoff} = router.query 
  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
    new URLSearchParams({
      access_token : 'pk.eyJ1IjoiaW1wcmFuc2h1IiwiYSI6ImNsMTI3empxNDAwdTczZG1iZGY3d284ZTYifQ.fTLsYSHaN_dulOVgl6hf7Q',
      limit: 1
    })).then(response => response.json()).then(data => {
      setPickupCoordinates(data.features[0].center);

    })
  }

  const getDropoffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
    new URLSearchParams({
      access_token : 'pk.eyJ1IjoiaW1wcmFuc2h1IiwiYSI6ImNsMTI3empxNDAwdTczZG1iZGY3d284ZTYifQ.fTLsYSHaN_dulOVgl6hf7Q',
      limit: 1
    })).then(response => response.json()).then(data => {
      setDropoffCoordinates(data.features[0].center);
    })
  }
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff); 
  }, [pickup, dropoff])
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