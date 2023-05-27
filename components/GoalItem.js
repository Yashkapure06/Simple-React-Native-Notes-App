import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {

    return (
      <View style={styles.goalItem}>
          <Pressable 
            android_ripple={{color:'#dddddd'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed})=> pressed && styles.pressedItem}
          >
            <Text style={styles.goalText}>
                {props.text}
            </Text>
          </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:'#FEE4E5',
    
  },
  goalText:{
    padding:10,
    color:'#312F30',
  },
  pressedItem:{
    opacity:0.5
  }
})