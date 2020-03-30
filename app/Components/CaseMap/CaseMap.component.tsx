import React, { useRef, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Camera, Marker } from 'react-native-maps';

import { CaseMapLocation } from '../../Models';
import { CaseMapProps } from './CaseMap.props';
import s from './CaseMap.style';

const initialCameraRegion: Camera = {
  zoom: 8,
  center: {
    latitude: -6.9032739,
    longitude: 107.5729448,
  },
  altitude: 10,
  pitch: 6,
  heading: 2,
}

const handleCamera = (map: MapView, location: CaseMapLocation) => {
  map.animateCamera({
    ...initialCameraRegion,
    zoom: location.zoom,
    center: {
      ...initialCameraRegion.center,
      latitude: location.location.latitude,
      longitude: location.location.longitude,
    }
  }, { duration: 500 });
};

const CaseMap: React.FC<CaseMapProps> = ({ style, location }) => {
  const ref = useRef<MapView | null>();

  useEffect(() => {
    if (!!ref.current) {
      handleCamera(ref.current, location)
    }
  }, [location]);

  return (
    <MapView
      ref={map => ref.current = map}
      provider={PROVIDER_GOOGLE}
      style={[s.container, style]}
      initialCamera={{
        zoom: location.zoom,
        center: {
          latitude: location.location.latitude,
          longitude: location.location.longitude,
        },
        altitude: 10,
        pitch: 6,
        heading: 2,
      }}
      scrollEnabled={false}
      zoomEnabled={false}
    >
      {location.isCase && (
        <Marker
          coordinate={location.location}
        />)}
    </MapView>
  );
};

export default CaseMap;
