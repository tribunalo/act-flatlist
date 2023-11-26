import * as React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import FiMoreHorizontal from './src/FiMoreHorizontal';

const DATA = [
    
  {id: '1', lastname: 'Angeles',firstname:'Danica',add:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '2', lastname: 'Rhea',firstname: 'Anino', add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '3', lastname: 'Barbanida', firstname:'Analie', add:'Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '4', lastname: 'Batulanon' ,firstname: 'Riza', add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '5', lastname: 'Baugbog', firstname:'Dave Francis', add:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '6', lastname: 'Banaga', firstname:'Bernadeth', add:'Loboc, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '7', lastname: 'Cagay', firstname:'Charlene', add:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '8', lastname: 'Catayas', firstname:'Nina', add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '9', lastname: 'Chatto', firstname:'Marlon', add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '10', lastname: 'Cocmeghod', firstname:'Kimberly', add:'Antiquera, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '11', lastname: 'Dacut', firstname:'Winzel', add:'Antiquera, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '12', lastname: 'Egama', firstname:'Marjoleine', add:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '13', lastname: 'Gension', firstname:'Junrey', add:'Balilihan, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '14', lastname: 'Gultiano', firstname:'Clean May Nina', add:'Balilihan, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />} ,
  {id: '15', lastname: 'Hangad', firstname:'Kyle Joshua', add:'Lapaz, Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '16', lastname: 'Jabines', firstname:'Jian Andrei', add:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '17', lastname: 'Jaum', firstname:'Marie Therese', add:'Valencia, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '18', lastname: 'Jawa', firstname:'Rodel Glenn', add:'Corella, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '19', lastname: 'Jumawan', firstname:'Jess Raphael', add:'Hanopol, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '20', lastname: 'Labesores', firstname:'Karl Jansen', add:'Hanopol, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '21', lastname: 'Liparto', firstname:'Monaliza', add:'Sevilla, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '22', lastname: 'Loquias', firstname:'Karl Patrick', add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '23',  lastname: 'Noble', firstname:'James Raymond', add:'Sevilla, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '24', lastname: 'Padonia', firstname:'Christine', add:'Corella, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '25', lastname: 'Paquinol', firstname:'Sherilyn', add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '26', lastname: 'Patac', firstname:'Darwin', add:'Maribojoc, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />}, 
  {id: '27', lastname: 'Payot', firstname:'John Melvin', add:'Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '28', lastname: 'Rabanes', firstname:'Nilson', add:'Corella, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '29', lastname: 'Razon', firstname:'John Carlo', add:'Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '30', lastname: 'Reformina', firstname:'Orlan', add:'Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '31', lastname: 'Renoblas', firstname:'Ira Jane', add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '32', lastname: 'Sajulga', firstname:'Sherwin George', add:'Maribojoc, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '33', lastname: 'Sanchez', firstname:'Mary Jane', add:'Boctol, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '34', lastname: 'Suizo', firstname:'Rowena', add:'Jagna, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '35', lastname: 'Namor', firstname:'John Carlo', add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '36', lastname: 'Tamayo', firstname:'Loraine',add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '37', lastname: 'Villorejo', firstname:'Jaqueline',add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '38', lastname: 'Tribunalo', firstname:'Nikka Jane',add:'Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '39', lastname: 'Lunzon', firstname:'Jeeve',add:'Cortes, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '40',  lastname: 'Tadlas', firstname:'Kenneth',add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '41', lastname: 'Tahil', firstname:'Adriane Jane',add:'Hanopol, Bohol' ,icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '42', lastname: 'Tinaja', firstname:'Ma. Luisa', add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '43', lastname: 'Valiente', firstname:'Melrose', add:'Tagbilaran, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
];

const Item = ({ lastname, firstname, add,icon }) => {
  // Extract the first letters of the first name and last name
  const firstInitial = firstname.charAt(0);
  const lastInitial = lastname.charAt(0);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.intialsContainer}><Text style={styles.initials}>{firstInitial}{lastInitial}</Text></View>
      <View style={styles.listItem}>
        
        <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
        <Text style={styles.listItemAdd}>{add}</Text>
        
      </View>
      
     
      <View style={styles.iconContainer}>{icon}</View>
   
    </View>
  );
};

export default function App() {
   
      return (
        <SafeAreaView>
            <View style={styles.container}>
                
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item lastname={item.lastname} firstname={item.firstname} add={item.add}  icon={item.icon}/>}
                    
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: 'white',
      alignItems: 'left',
      height: 670,
      marginTop:170,
      
  },
  text: {
      fontSize: 18,
      color: '#101010',
      marginTop: 5,
      fontWeight: '700',
      fontFamily:'Arial',
      marginBottom:10
  },
  listItem: {
      marginTop: 15,
      
      alignItems: 'left',
      backgroundColor: '#fff',
      width: '70%'
  },
  listItemText: {
      fontSize: 18,
      fontWeight:'bold',
      fontFamily:'Arial'
    
  },
  listItemAdd:{
      fontSize:15,
      fontFamily:'Arial'
  },
  wholeContainer:{
      flexDirection:'row' ,
      

  },
  initials:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Arial',
    alignSelf:'center',
    margin:10,
    color:'white'
    
  },
  intialsContainer:{
      alignContent:'center',
      alignItems:'center',
     margin:10,
      backgroundColor:'lightgreen',
      height:35,
      width:35,
      borderRadius:70
  },
  iconContainer: {
      margin: 10,
    },
});