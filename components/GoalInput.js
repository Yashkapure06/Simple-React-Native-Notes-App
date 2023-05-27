import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
     };

     function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
     }
    
    return (
        <Modal
            visible={props.visible}
            animationType="fade"
        >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput 
                    placeholder="Your Course Goal!"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View
                    style={styles.buttonContainer}
                >
                    
                    <View
                      style={styles.button}
                    >
                        <Button
                            title="Cancel"
                            color="#EC563D"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View
                        style={styles.button}
                    >
                        <Button 
                            title="Add Goal" 
                            color='#FDA038'
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        borderRadius:8,
        padding: 10
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 16
      },
      button:{
        width:100,
        marginHorizontal: 8,
        height: 40,
      },
      image:{
        width: 300,
        height: 300,
        margin: 20
      }
})