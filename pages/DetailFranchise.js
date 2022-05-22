import { StyleSheet, Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';



const DetailFranchise = () => {
    const data = [
        {key: 'Minimum Cash Required', value: 'Rp 1.000.000'},
        {key: 'Total Investment', value: 'Rp 1.000.000 - Rp 0'},
        {key: 'Year Founded', value: '2017'},
    ];
    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 25, margin: 10,}}>Detail Franchise</Text>
            <View style={styles.franchiseSum}>
                <View style={styles.franchiseBox1}>
                    <Text style={{fontWeight: 'bold', marginBottom: 15, fontSize: 16,}}>Kopi Kenangan</Text>
                    <View style={styles.imageBox}>
                        <Image source={require('../assets/logo.png')} style={styles.franchiseLogo}/>
                    </View>
                    <Text style={{marginTop: 5, marginBottom: 5}}>Summary</Text>
                    <Text style={{textAlign: 'left', fontSize: 12, maxHeight: 134,}}>
                    Kopi Kenangan is a company engaged in the field of coffee drinks that also enliven the contemporary coffee market in Indonesia.
            
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
                        <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>Business Cost, Fees & Facts</Text>
                           {data.map( item => {
                               return(
                                <View >
                                    <View style={{backgroundColor: '#DADADA', padding: 5}}>
                                        <Text>{item.key}</Text>
                                    </View>
                                    <View style={{backgroundColor: '#FFFFFF', padding: 5}}>
                                        <Text>{item.value}</Text>
                                    </View>
                                </View>
                               )
                           }) 
                           }        
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#3B93FC', borderRadius: 6, marginTop: 20, padding: 5, maxWidth: 100, height: 40, marginLeft: 60, justifyContent: 'center', position: 'relative'}}>
                        <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>Request</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.overview}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>Overview</Text>
                <View>
                    <Text>
                    Kopi Kenangan was founded by Edward Tirtanata, James Prananto and Cynthia Chaerunnisa in 2017. His first shop was in the Kuningan area. On the first day of the opening of Kopi Kenangan, the shop managed to sell only 700 cups of coffee. Two years later, Kopi Kenangan has opened more than 230 shops throughout Indonesia.
                    In 2018, Kopi Kenangan received funding from Alpha JWC of Rp121 billion. In 2019, Kopi Kenangan received another injection of IDR 288 billion, this time from the venture capital of Sequoia India. With that much funding, Kopi Kenangan targets to have 1,000 outlets by 2021.
                    </Text>
                </View>
            </View>
        </View>
        </ScrollView>
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
        borderWidth : 1,
        borderColor : 'black',
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
        marginTop : 355,
        marginLeft : 20,
        position: 'absolute',
    },
    overview : {
        borderColor: 'black',
        borderWidth : 0.3,
        borderRadius : 11,
        padding : 20,
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
       alignItems: 'center',
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