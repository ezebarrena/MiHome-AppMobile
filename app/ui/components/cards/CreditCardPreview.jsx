import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const CreditCardPreview = ({ cardNumber, expiryDate, bank, onPressTrashIcon }) => {
  const getCardNetwork = (number) => {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;

    if (visaRegex.test(number)) {
      return 'Visa';
    } else if (mastercardRegex.test(number)) {
      return 'Mastercard';
    } else {
      return null;
    }
  };

  const cardNetwork = getCardNetwork(cardNumber);

  const getLogoSource = () => {
    if (cardNetwork === 'Visa') {
      return require('../../../assets/images/entities/visa-logo.png');
    } else if (cardNetwork === 'Mastercard') {
      return require('../../../assets/images/entities/mastercard-logo.png');
    } else {
      return null;
    }
  };

  const getBankLogoSource = () => {
    switch (bank) {
      case 'SANTANDER':
        return require('../../../assets/images/entities/santander-logo.png');
      case 'GALICIA':
        return require('../../../assets/images/entities/galicia-logo.png');
      case 'BBVA':
        return require('../../../assets/images/entities/bbva-logo.png');
      default:
        return null;
    }
  };

  const logoSource = getLogoSource();
  const bankLogoSource = getBankLogoSource();

  const formatCardNumber = (number) => {
    const hiddenDigits = '••••';
    const visibleDigits = number.slice(-4); // Obtener los últimos cuatro dígitos
    const formattedNumber = hiddenDigits + ' ' + hiddenDigits + ' ' + hiddenDigits + ' ' + visibleDigits;
    return formattedNumber;
  };

  const backgroundColors = {
    SANTANDER: ['#a41304', '#cb0c0c', '#b40c0c', '#e30414', '#d40c14', '#bc0c0c', '#dc0c14', '#cc0c14', '#c8140c'],
    GALICIA: ['#e47a34', '#eba240', '#f0bb4c', '#dc6834', '#e58f3a', '#dc5831', '#d8422c', '#da4834', '#e49354'],
    BBVA: ['#047bbe', '#044484', '#0470b1', '#0488c7', '#0462a8', '#045395', '#055c9b', '#3073af', '#0d84bc'],
    default: ['#6c6cfc', '#6464fc', '#5c5afc', '#645cfc', '#6c64fc', '#746ffc', '#5454fc', '#7070fc', '#6864fc'],
  };

  const selectedColors = backgroundColors[bank] || backgroundColors['default'];

  return (
    <LinearGradient
      colors={selectedColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.cardContainer}
    >
      <TouchableOpacity
        style={styles.trashIconContainer}
        onPress={onPressTrashIcon}
      >
        <Ionicons name="trash-outline" size={24} color="white" style={styles.trashIcon} />
      </TouchableOpacity>

      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardNumber}>{formatCardNumber(cardNumber)}</Text>
        <Text style={styles.cardDetailText}>{`Exp: ${expiryDate}`}</Text>
      </View>

      <View style={styles.logoContainer}>
        {logoSource && <Image source={logoSource} style={styles.logo} />}
      </View>

      <View style={styles.bankLogoContainer}>
        {bankLogoSource && <Image source={bankLogoSource} style={styles.bankLogo} />}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 90,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  bankLogoContainer: {
    width: 70,
    height: 35,
    overflow: 'hidden',
    position: 'absolute',
    top: 5,
    left: 5,
  },
  logo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  bankLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  cardDetailsContainer: {
    marginBottom: 5,
  },
  cardDetailText: {
    fontSize: 12,
    marginTop: 5,
    color: '#fff',
  },
  trashIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  trashIcon: {
    // Puedes ajustar el estilo del ícono aquí si es necesario
  },
});

export default CreditCardPreview;
