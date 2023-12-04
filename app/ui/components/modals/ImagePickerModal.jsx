import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Importa el icono de Material Icons
import * as ImagePicker from "expo-image-picker";
import Theme from "../../styles/Theme";
import i18n from "../../../assets/strings/I18n";

const ImagePickerModal = ({ buttonText, modalTitle, onImageSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9], // Establece el aspecto 16:9
        quality: 1,
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        const uri = selectedAsset.uri;
        onImageSelected(uri);
        setModalVisible(false);
      }
    } catch (error) {
      console.error('Error al seleccionar una imagen: ', error);
    }
  };

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9], // Establece el aspecto 16:9
        quality: 1,
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        const uri = selectedAsset.uri;
        onImageSelected(uri);
        setModalVisible(false);
      }
    } catch (error) {
      console.error('Error al tomar una foto: ', error);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="attach-file" size={24} color="#fff" />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Agrega un icono de cruz para cerrar el modal */}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => {
                setModalVisible(false);
                setSelectedImage(null);
              }}
            >
              <MaterialIcons name="close" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <TouchableOpacity
              style={styles.pickButton}
              onPress={pickImage}
            >
              <MaterialIcons name="photo-library" size={24} color="#fff" />
              <Text style={styles.buttonText}>{i18n.t('realEstateUploadAsset.adjunto')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pickButton}
              onPress={takePhoto}
            >
              <MaterialIcons name="photo-camera" size={24} color="#fff" />
              <Text style={styles.buttonText}>{i18n.t('realEstateUploadAsset.foto')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.PRIMARY,
    marginVertical: 10,

    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row", // Alinea icono y texto horizontalmente
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10, // Espacio entre el icono y el texto
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pickButton: {
    backgroundColor: Theme.colors.TERCIARIO,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row", // Alinea icono y texto horizontalmente
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default ImagePickerModal;
