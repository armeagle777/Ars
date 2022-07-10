import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export const MapContainer = (props) =>{
    const containerStyle = {
        width: '100%',
        height: '500px'
      }
      const onMarkerClick = (props, marker, e)=> {
        console.log(e)
      }
    return (
        <Map 
        google={props.google} 
        containerStyle={containerStyle}
        zoom={14}
        initialCenter={{
            lat: 40.1872,
            lng: 44.5152
          }}
          
        >
   
   <Marker
   onClick={onMarkerClick}
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    onClick={onMarkerClick}
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -80.428093}} />
  <Marker />
  <Marker
  onClick={onMarkerClick}
    name={'Your position'}
    position={{lat: 37.762391, lng: -122.439192}}/>
   

        </Map>
      );
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDuhtLlBrFJNko_uT8onXawQW9UmXHMjZU'
  })(MapContainer)