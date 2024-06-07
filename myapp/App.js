import{SafeAreaView, View,Image, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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

      {/*First Component starts here*/}
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
      {/* And ends here*/}
      
      {/**  Second Component starts from here */}
      <View style={{
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        width: 380,
        height: 52,
        top: 48,
        left: 2, }}>

        <TouchableOpacity>
          <Icon  style={{
            fontSize: 20,
            borderRadius: 10, 
            padding: 14,  
            display: 'flex', 
            alignItems: 'flex',
            backgroundColor: "white",}} name='search'/>
        </TouchableOpacity>

        <TextInput style={{
          display: 'flex',
          alignItems: 'flex',
          backgroundColor: "white",
          width: 285,
          height: 48,
          borderRadius: 10,
          padding: 5,
          right: 4.5,
          }} placeholder="Search">
        </TextInput>
        <View style={{
          backgroundColor: "#F0522F", 
          padding: 10, 
          borderRadius: 10}}>
          <Image source={require("./assets/vector.png")} />
        </View>
      </View>
       {/*And ends here*/}
    </View>
  </SafeAreaView>
  )
}