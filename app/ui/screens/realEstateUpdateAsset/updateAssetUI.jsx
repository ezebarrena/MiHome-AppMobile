import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import i18n from "../../../assets/strings/I18n";
import Theme from "../../styles/Theme";
import { Dimensions } from "react-native";
import CustomTextInput from "../../../ui/components/inputs/CustomTextInput";
import ChoiceInput from "../../../ui/components/inputs/ChoiceInput";
import ChoiceMultipleInput from "../../../ui/components/inputs/ChoiceMultipleInput";
import Button from "../../../ui/components/buttons/Button";
import ImagePickerModal from "../../components/modals/ImagePickerModal";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de importar Ionicons desde tu proyecto
import MapView, { Marker } from 'react-native-maps';
import CustomSearchBar from "../../components/inputs/CustomSearchBar";
import { useForm } from "../../../hooks/useForm";

import { postAsset } from "../../../api/idAssets";

const dataTypes = [
    { key: '1', value: 'Casa' },
    { key: '2', value: 'Departamento' },
    { key: '3', value: 'Casa quinta' },
    { key: '4', value: 'PH' },
    { key: '5', value: 'Galpon' },
    { key: '6', value: 'Oficina' },
    { key: '7', value: 'Comercio' },
    { key: '8', value: 'Terreno' },
  ];
  
  const dataTransaccion = [
    { key: '1', value: 'Venta' },
    { key: '2', value: 'Alquiler' },
  ];
  
  const dataCurrency = [
    { key: '1', value: 'U$D dolar estadounidense' },
    { key: '2', value: 'AR$ peso argentino' },
  ];
  
  const dataRooms = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: '7', value: '7' },
    { key: '8', value: '8' },
    { key: '9', value: '9' },
    { key: '10', value: '10' },
    { key: '11', value: 'Mas de 10' },
  ];
  
  const dataFloors = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4 o mas' },
  ];
  
  const dataBaths = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4 o mas' },
  ];
  
  const dataBedrooms = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4 o mas' },
  ];
  
  const dataGarages = [
    { key: '1', value: '1 vehiculo' },
    { key: '2', value: '2 vehiculos' },
    { key: '3', value: '3 vehiculos' },
    { key: '4', value: '4 o mas vehiculos' },
  ];
  
  const dataAmenities = [
    { key: '1', value: 'pileta' },
    { key: '2', value: 'pileta climatizada' },
    { key: '3', value: 'pileta techada' },
    { key: '4', value: 'jacuzzi' },
    { key: '5', value: 'Gimnasio' },
    { key: '6', value: 'Quincho' },
    { key: '7', value: 'Parrilla' },
    { key: '8', value: 'Terraza' },
    { key: '9', value: 'Jardin' },
    { key: '10', value: 'Seguridad privada' },
    { key: '11', value: 'Espacio para deportes' },
  ];

  export default function UpdateAssetUI({}){

    
  }


