import React, {useEffect, useState} from 'react';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';
import usePermissions from '../../src/hooks/usePermissions';

function Walk() {
  usePermissions();
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>();

  const getLocationUpdates = () => {
    console.log('실행횟수');
    Geolocation.watchPosition(
      info => {
        const {latitude, longitude} = info?.coords;
        const newPosition = {
          latitude,
          longitude,
        };
        console.log('실행게속되는거맞나?', newPosition);
        setMyPosition({...newPosition});
      },
      console.error,
      {
        enableHighAccuracy: true,
        distanceFilter: 0.05,
      },
    );
  };

  useEffect(() => {
    getLocationUpdates();
  }, [myPosition]);

  return (
    myPosition && (
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={false}
        center={{
          ...myPosition,
          zoom: 16,
        }}
        useTextureView={true}
        onTouch={(e: {nativeEvent: any}) => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
        <Marker coordinate={{...myPosition}} />
      </NaverMapView>
    )
  );
}

export default Walk;
