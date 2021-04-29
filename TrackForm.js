import React, {useContext} from 'react';
import {Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import {StyleSheet} from 'react-native';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  console.log(locations.length);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          onChangeText={changeName}
          value={name}
          placeholder="Enter name of the track"
        />
      </Spacer>

      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}

      {!recording || locations.length ? (
        <Button title="Save Record" style={styles.buton} onPress={saveTrack} />
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  buton: {
    marginTop: 10,
  },
});
export default TrackForm;
