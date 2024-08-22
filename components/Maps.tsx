import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Maps = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
      mapType="satellite" 
      showsUserLocation={true} 
      followsUserLocation={true} 
      zoomEnabled={true} 
      zoomControlEnabled={true} 
    >
      <Text>Maps</Text>
    </MapView>
  );
};

export default Maps;
