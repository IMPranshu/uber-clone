import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from "./components/Map"
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
 

const Confirm = () => {
  const router = useRouter()
  const {pickup, dropoff} = router.query 
  const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

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
      <BackButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
          </Link>
      </BackButtonContainer>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      >
        
      </Map>
      <RideContainer>
        {/* Ride Selector */}
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
      
        {/* Confirm Button */}
        <ConfirmButtonContainer>
          <ConfirmButton>
          Confirm UberX
          </ConfirmButton>
        </ConfirmButtonContainer>

      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div` 
flex flex-col h-screen
`
const RideContainer = tw.div` 
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div` 
border-t-2
`
const ConfirmButton = tw.div` 
bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`
const BackButtonContainer = tw.div` 
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img` 
h-full object-contain
`