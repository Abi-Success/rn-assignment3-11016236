import{SafeAreaView, View,Image, Text, TouchableOpacity} from 'react-native';



export default function App() {
  return (
  <SafeAreaView style={{flex:1, backgroundColor: '#fceeeb'}}>
    <View style={{
      gap: 20,
      padding:15,
      width: 393,
      height: 852,
      borderRadius: 40,
      }}>

      <View style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        width: 380,
        height: 60,
        top: 42,
        left:2,
        gap:134,
        }}>
        <View>
          <Text style={{fontSize: 30, fontWeight:700,}}>Hello, Devs</Text>
          <Text style= {{fontSize:12,}}>14 Tasks Today</Text>
        </View>

        <TouchableOpacity style={{
          backgroundColor: '#fff',
          padding:6.5,
          borderRadius: 30,}}>
          <Image source={require("./assets/person.png")}></Image>

        </TouchableOpacity>
      </View>

    </View>
  </SafeAreaView>
  )
}