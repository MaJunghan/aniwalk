import {useEffect, useState} from 'react';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from 'react-native-nmap';
import usePermissions from '../../src/hooks/usePermissions';
import Geolocation from '@react-native-community/geolocation';

function Walk() {
  usePermissions();
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  console.log(myPosition, '내위치는');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setMyPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      console.error,
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }, []);

  return (
    myPosition && (
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
        <Marker coordinate={myPosition} pinColor="red" onClick={() => console.warn('onClick! p0')} />
        <Path coordinates={myPosition} onClick={() => console.warn('onClick! path')} width={10} />
      </NaverMapView>
    )
  );
}

export default Walk;
