import React from 'react';
import { Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>
    <Image
      source={batLogo}
      style={{
        resizeMode: 'contain',
        height:220,
      }} 
     />
    </>
     );
}