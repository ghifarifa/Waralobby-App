import { Pressable, StyleSheet, Text, Image, FlatList, ScrollView, View } from 'react-native';

const DetailFranchise = () => {
    return(
        <View style = {styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 25, margin: 10,}}>Detail Franchise</Text>
            <View style={styles.franchiseSum}>
                <View style={styles.franchiseBox1}>
                    <Text style={{fontWeight: 'bold', marginBottom: 15, fontSize: 16,}}>Kopi Kenangan</Text>
                    <View style={styles.imageBox}>
                        <Image source={require('../assets/logo.png')} style={styles.franchiseLogo}/>
                    </View>
                    <Text style={{marginTop: 5, marginBottom: 5}}>Summary</Text>
                    <Text style={{textAlign: 'justify', fontSize: 12,}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                    <View style={styles.location}>
                        <Image source={require('../assets/location.png')} style={styles.locationLogo} />
                        <Text>Bandung</Text>
                    </View>
                </View>
                <View style={styles.franchiseBox2}>
                    <View style={{backgroundColor: '#5CA5FC', borderRadius: 10, maxWidth: 75, marginLeft: 80, }}>
                        <Text style={{fontSize: 12, textAlign: 'center', color: 'white'}}>Coffee</Text>
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>Info Biaya</Text>
                            <FlatList
                                        data={[
                                        {key: 'Biaya Minimum', value: 'Rp 1.000.000'},
                                        {key: 'Penghasilan Minimum', value: 'Rp 1.000.000'},
                                        {key: 'Total Investasi', value: 'Rp 1.000.000'},
                                        ]}
                                        renderItem={({item}) => 
                                            <View >
                                                <View style={{backgroundColor: '#DADADA', padding: 5}}>
                                                    <Text>{item.key}</Text>
                                                </View>
                                                <View style={{backgroundColor: '#FFFFFF', padding: 5}}>
                                                    <Text>{item.value}</Text>
                                                </View>
                                            </View>}
                            />
                    </View>
                    <Pressable style={{backgroundColor: '#3B93FC', borderRadius: 6, marginTop: 20, padding: 5, maxWidth: 100, maxHeight: 100, marginLeft: 37,}}>
                        <Text style={{fontSize: 12, textAlign: 'center', color: 'white'}}>Apply Franchise</Text>
                    </Pressable>
                </View>

            </View>
            <View style={styles.overview}>
                <Text>Overview</Text>
                <View>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    franchiseLogo : {
        width : 75,
        height: 30,
    },
    locationLogo : {
        width : 20,
        height: 20,
        marginRight: 5,
    },
    franchiseSum : {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#A0CAFC',
        borderRadius : 17,
    },
    container : {
        margin : 10,
        padding : 20,
    },
    franchiseBox1 : {
        width : '45%',
        padding : 20,
    },
    franchiseBox2 : {
        width : '55%',
        padding : 20,
    },
    location : {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin : 5,
        marginTop: 30,

    },
    overview : {
        borderColor: 'black',
        borderWidth : 0.3,
        borderRadius : 11,
        padding : 10,
        marginTop : 20,
        backgroundColor: '#FDFDFD',

    },
   imageBox : {
       backgroundColor : 'white',
       padding : 10,
       borderRadius : 6,
       maxWidth : 200,
       height : 100,
       borderWidth : 1,
       borderColor : 'black',
       justifyContent : 'center',
   },
   priceBox : {
      marginTop: 20,
      backgroundColor: '#3B93FC',
      paddingTop: 10,
      paddingBottom: 30,
      borderRadius: 6,
   }


});

export default DetailFranchise;