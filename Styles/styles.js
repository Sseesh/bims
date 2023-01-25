import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    
  },
  containerni: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    marginTop:30
  },
  container2: {
    flex:1,
    backgroundColor: 'bac3e4',
    alignItems: 'center',
    width:'100%',
   

  },
  container3: {
    width: '100%',
    alignSelf:'center',
  },

  input: {
    borderWidth: 1, 
    borderColor: '#4267B2', 
    width: '80%', 
    padding: 5, 
    marginBottom: 20, 
    fontSize: 15, 
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    
  },

  search: {
    borderWidth: 1, 
    borderColor: '#96b2ea', 
    width: '80%', 
    padding: 5, 
    marginBottom: 10, 
    fontSize: 15, 
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
 

  },
  //from style
  scroll: {

    backgroundColor: 'white',
  },

  scroll1: {
    width:'100%',
    backgroundColor: 'white',
  
  },
  form_container:{
    alignContent:'stretch',
    with:'100%',
    height: '100%',
    marginTop:30
  },

  //form input style
  textInput:{
    borderWidth: 0.8, 
    borderColor: '#96b2ea',
    width: '100%',
    height: 45,
    padding: 5, 
    fontSize: 15, 
    shadowColor: "#000",
    textAlign: 'left',
    marginRight:100,
    marginLeft:5,
    borderRadius: 5,
  },

  textInputFocused: {
    borderWidth: 1,
    borderColor: '#4267B2',
    width: '100%',
    height: 45,
    padding: 5, 
    fontSize: 15, 
    shadowColor: "#000",
    textAlign: 'left',
    marginRight:100,
    marginLeft:5,
    borderRadius: 5,

    
  },
  //picker
  picker1:{
    borderWidth: 1, 
    borderColor: '#a7b1d9',

  },

  title: {
    fontWeight: 'bold', 
    fontSize: 35, 
    paddingBottom: 40,
    marginBottom: 50, 
    color : '#4267B2'
  },
  labels: {
    fontSize: 15
  },
  labelss: {
    fontSize: 15, marginBottom: 30
  },
  hyper: {
    fontSize: 15, 
    textDecorationLine: 'underline', 
    marginTop: 15
  },
  barangay: {
    fontWeight: 'bold', 
    fontSize: 25, 
    color : 'white'
  },

  button_ni: {
    borderWidth: 1, 
    borderColor: '#4267B2', 
    backgroundcolor: '#4267B2',
    width: 100,
    height: 35, 
    padding: 5, 
    marginBottom: 40, 
    fontSize: 15, 
    borderRadius: 15,
    alignContent: 'center',
    overlayColor: '#4267B2',
    alignSelf: 'center',
    backgroundColor: '#4267B2',
    elevation: 7,
    opacity: 1,
  },


  add: {
    borderWidth: 1, 
    borderColor: '#4267B2', 
    backgroundcolor: '#4267B2',
    width: 150,
    height: 35, 
    padding: 5, 
    
  
    fontSize: 15, 
    alignContent: 'center',
    overlayColor: '#4267B2',
    alignSelf: 'center',
    backgroundColor: '#4267B2',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 15,
    elevation: 7,
    opacity: 1,
  },

  delete: {
    borderWidth: 1, 
    borderColor: 'red', 
    width: 100,
    height: 35, 
    padding: 5, 
    fontSize: 15, 
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 15,
    elevation: 7,
    opacity: 1,
  },
  button_textni:{
    fontSize: 15,
    alignSelf: 'center',
    color: '#bab9b6',

  },
  button_text:{
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',

  },
  

  window_logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    elevation: 10,
    opacity: 1,

},
window_logo_mini: {
  width: 85,
  height: 85,
  resizeMode: "contain",
  marginBottom: 40,
  margintop: 50,
  shadowColor: "#000",
  shadowOffset: {
    width: 50,
    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 1.4,
    
},
tiny_logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
   
    marginTop:7,
    marginRight:10,
    marginLeft: 10

},

update: {
  width:35,
  height: 35,
  resizeMode: "contain",
  alignSelf:'center'
 

},

population:{

 // borderWidth: 1.5, 
  //borderColor: '#4267B2',
  width: '40%',
  height: '100%',
  marginBottom: 10, 
  margintop: 5,
  fontSize: 15, 
  textAlign: 'center',
  shadowColor: "#000",
  alignItems: 'center',
  marginRight:12,
  marginLeft:12,
  borderRadius: 10,
  backgroundColor:'white',
    elevation: 10,
    opacity: 1,

/*
  shadowOffset: {
	width: 50,
	height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 1.4,
  */
},

icon_ni:{
  width: 100,
  height: 100,
  marginLeft: 20,
  marginRight:20,
  resizeMode: "contain",
  alignSelf: 'center'
  
},

text_content:{
fontWeight: 'bold', 
fontSize: 35, 
paddingBottom: 20,
color : '#4267B2'

},
text_gamay:{
  fontSize: 15,
  fontWeight: 'bold'
  
  
},
top_ni:{
  height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  borderBottomColor: 'black',
  borderBottom: 20,
  backgroundColor:'#4267B2',
  width: '100%',
  elevation: 10,
    opacity: 1,
 
  
},
dash:{
  marginTop:20,
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 10,

  
},

form_ni:{

  resizeMode: "contain",
  flexDirection: 'row',
  justifyContent: 'center',
  
},
tableContainer: {
  borderWidth: 1,
  borderColor: '#d3d3d3',
  borderRadius: 5,
  
},

checkbox: {
  height: 30,             // changes the hitspace but not the checkbox itself
  width: 30,
  borderWidth: 0.5,         // does nothing
 
},


headerText: {
    fontWeight:'bold',
    fontSize: 16,
    textAlign: 'center'
},
tableContainer: {
  borderWidth: 1,
  borderColor: '#d3d3d3',
  borderRadius: 5,
  overflow: 'hidden',
},
//table
tableHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  
  backgroundColor: '#f2f2f2',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#d3d3d3',
},
headerText1: {
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  marginRight: 35,
},  
headerText2: {
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  marginRight:30,
},  
headerText3: {
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  marginRight: 5,
},  

divider: {
  borderLeftWidth: 1,
  borderLeftColor: '#d3d3d3',
  height: '100%',
  marginHorizontal: 10
},
divider1: {
  borderLeftWidth: 1,
  borderLeftColor: '#d3d3d3',
  height: '100%',
  marginHorizontal: 10,
},
divider2: {
    borderLeftWidth: 1,
    borderLeftColor: '#d3d3d3',
    height: '100%',
    marginHorizontal: 10,
},
divider3: {
    borderLeftWidth: 1,
    borderLeftColor: '#d3d3d3',
    height: '100%',
    marginHorizontal: 10,
  
 
},
tableRow: {
  flexDirection: 'row',
  padding: 10,
},
tableCell: {
  flex: 1,
  justifyContent: 'flex-start'

},
tableCellText: {
  fontSize: 16,
  textAlign: 'left'
},
table_ni: {
  flex:1,
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  height: '100%',
  width: 130,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black'  
},
lastname_ni: {
  flex:1,
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  height: '100%',
  width: 140,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black'  
},
age_ni: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  width: 45,
  height: 35, 
  padding: 5,   
},
gender_ni: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  width: 60,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black'

},
//household
table_ni1: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  height: '100%',
  width: 140,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black' ,
  fontWeight: 'bold',
},
table_ni2: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  height: '100%',
  width: 200,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black' ,
  fontWeight: 'bold',
},
age_ni1: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  width: 45,
  height: 35, 
  padding: 5,   
  fontWeight: 'bold',
},
gender_ni1: {
  borderrightWidth: 1,
  borderrightColor: '#d3d3d3', 
  fontWeight: 'bold',
  width: 100,
  height: 35, 
  padding: 5, 
  borderBottomWidth: 1,
  borderBottomColor: 'black'  
},


});

export default styles;