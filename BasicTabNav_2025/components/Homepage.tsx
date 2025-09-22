import defaultStyles from '@/styles/defaultStyles';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const Homepage:React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={defaultStyles.buttons}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
            {
            value: 'walk',
            label: 'Walking',
            },
            {
            value: 'train',
            label: 'Transit',
            },
            { 
            value: 'drive', 
            label: 'Driving' 
            },
            {
            value: "Julian",
            label: "julianing"
            },
        ]}
      />
    </SafeAreaView>
  );
};


export default Homepage;