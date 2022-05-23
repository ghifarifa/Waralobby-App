import React from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { db, auth } from '../firebase/config'

const RequestForm = ({ navigation, route }) => {
  console.log(route.params)
  const [number, onChangeNumber] = React.useState(null)
  const [loc, onChangeLoc] = React.useState(null)
  const [selectedImage, setSelectedImage] = React.useState(null)

  const postData = () => {
    db.collection('history')
      .add({
        ...route.params,
        status: 'Offer Sent'
      })
      .then(
        Alert.alert(
          'Success',
          'Your franchise aplication successfully submited!'
        ),
        [{ text: 'Okay', onPress: () => navigation.navigate('HistoryPage') }]
      )
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) {
      return
    }

    setSelectedImage({ localUri: pickerResult.uri })
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 10 }}>
        Request Form
      </Text>
      <View style={styles.containerForm}>
        <Text style={{ margin: 10 }}>Business Capital</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter a number in rupiah. Ex: 1.0000.000"
          keyboardType="numeric"
        />
        <Text style={{ margin: 10 }}>Business Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLoc}
          value={loc}
          placeholder="Enter an address. Ex: Jln. Merpati..."
        />
        <Text style={{ margin: 10 }}>Location Picture</Text>
        <View styles={styles.buttonArea}>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
        </View>
        {selectedImage !== null ? (
          <View style={styles.containerImage}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <TouchableOpacity
        active={selectedImage && number && loc ? true : false}
        disabled={selectedImage && number && loc ? false : true}
        style={{
          backgroundColor: '#3B93FC',
          borderRadius: 6,
          marginTop: 15,
          padding: 5,
          maxWidth: 100,
          height: 40,
          marginLeft: 265,
          justifyContent: 'center'
        }}
        navigation={navigation}
        onPress={() => {
          postData()
          navigation.navigate('HistoryPage')
        }}
      >
        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20
  },
  containerForm: {
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 11,
    padding: 10,
    backgroundColor: '#FDFDFD'
  },
  containerImage: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10
  },
  buttonArea: {
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 5,
    maxWidth: 120,
    margin: 8,
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 10
  },
  thumbnail: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
})

export default RequestForm
