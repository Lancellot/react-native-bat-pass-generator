import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './batButtonStyles';
import { BattextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passawordServices';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)

    }

  return (
    <>
     <BattextInput pass={pass}/>
     
    <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
    >
        <Text style={styles.text} > GENERATE </Text>
    </Pressable>

     <Pressable
        onPress={() => {console.log("Fui pressioando")}}
        style={styles.button}
    >
        <Text style={styles.text}> ⚡COPY </Text>
    </Pressable>
    </>
  );
}