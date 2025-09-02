import React, { useState } from "react";
import { View } from "react-native";
import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import { BatForm } from "../BatForm/BatForm";
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    const [showForm, setShowForm] = useState(false);

    const handleBackToHome = () => {
    setShowForm(false);
  };

    return (
        <View style={styles.appContainer}>
            {!showForm ? (
       <View style={styles.homeContainer}>
                    <View style={styles.logoContainer}>
             <BatLogo/>
              </View>
              <BatButton onPress={() => setShowForm(true)} />
        </View>
      ) : (
          <BatForm onBackToHome={handleBackToHome}/>
      )}
          <StatusBar style="light" />
        </View>
    );
}