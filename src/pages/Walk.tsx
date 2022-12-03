import React, {useEffect, useRef, useState} from 'react';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';
import usePermissions from '../../src/hooks/usePermissions';
import {useNavigation} from '@react-navigation/native';

function Walk() {
  usePermissions();
  const navigation = useNavigation();
  const watchId = useRef<null | any>(null);
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>();

  const removeLocationUpdates = () => {
    if (watchId != null) {
      console.log('실행됫어??', myPosition);
      Geolocation.clearWatch(watchId.current);
    }
  };

  const getLocationUpdates = () => {
    watchId.current = Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        console.log(latitude, '업데이트?');
        setMyPosition({
          latitude,
          longitude,
        });
      },
      console.error,
      {
        enableHighAccuracy: true,
        distanceFilter: 0.05,
      },
    );
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getLocationUpdates();
    });
    navigation.addListener('blur', () => {
      removeLocationUpdates();
    });
  }, []);

  return (
    myPosition && (
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={false}
        center={{
          zoom: 15,
          latitude: myPosition.latitude,
          longitude: myPosition.longitude,
        }}
        onTouch={(e: {nativeEvent: any}) => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
        <Marker coordinate={myPosition} />
      </NaverMapView>
    )
  );
}

export default Walk;
