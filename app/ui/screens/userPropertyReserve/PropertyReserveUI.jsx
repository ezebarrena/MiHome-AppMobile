import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CreditCardPreview from "../../components/cards/CreditCardPreview";
import Button from "../../components/buttons/Button";

const PropertyReserveUI = () => {
  const navigation = useNavigation();

  const paymentMethods = [
    {
        id: 1,
        cardNumber: "5555555555555555",
        cardExpiration: "12/25",
        cardBank: "SANTANDER",
    },
    {
        id: 2,
        cardNumber: "4444444444444444",
        cardExpiration: "12/25",
        cardBank: "GALICIA",
    },
    {
        id: 3,
        cardNumber: "5555333333333333",
        cardExpiration: "12/25",
        cardBank: "BBVA",
    },
    {
        id: 4,
        cardNumber: "5555555555555555",
        cardExpiration: "12/25",
        cardBank: "SANTANDER",
    },
    {
        id: 5,
        cardNumber: "4444444444444444",
        cardExpiration: "12/25",
        cardBank: "GALICIA",
    },
    {
        id: 6,
        cardNumber: "5555333333333333",
        cardExpiration: "12/25",
        cardBank: "BBVA",
    },
    {
        id: 7,
        cardNumber: "5555555555555555",
        cardExpiration: "12/25",
        cardBank: "SANTANDER",
    },
    {
        id: 8,
        cardNumber: "4444444444444444",
        cardExpiration: "12/25",
        cardBank: "GALICIA",
    },
    {
        id: 9,
        cardNumber: "5555333333333333",
        cardExpiration: "12/25",
        cardBank: "BBVA",
    },
    {
        id: 10,
        cardNumber: "5555555555555555",
        cardExpiration: "12/25",
        cardBank: "SANTANDER",
    },
    {
        id: 11,
        cardNumber: "4444444444444444",
        cardExpiration: "12/25",
        cardBank: "GALICIA",
    },
    {
        id: 12,
        cardNumber: "5555333333333333",
        cardExpiration: "12/25",
        cardBank: "BBVA",
    },
    ];

  const [sinceDate, setSinceDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const untilDate = new Date();
    untilDate.setMonth(currentDate.getMonth() + 1);

    const formattedSinceDate = formatDate(currentDate);
    const formattedUntilDate = formatDate(untilDate);

    setSinceDate(formattedSinceDate);
    setUntilDate(formattedUntilDate);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // El mes está basado en cero
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const onPressTrashIcon = (id) => {
    console.log("Trash icon pressed for card with id: ", id);
  };

  const handlePress = () => {
    navigation.navigate("PropertyReserve");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/various/imagenCasaTest.png")}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Reservation Details</Text>
        <Text style={styles.detailsText}>Since: {sinceDate}</Text>
        <Text style={styles.detailsText}>Until: {untilDate}</Text>
        <Text style={styles.detailsText}>Amount to pay: $1000</Text>
        <Text style={styles.detailsText}>
          This amount is equivalent to 50% of the advertised price.
        </Text>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Method</Text>
        <FlatList
          data={paymentMethods}
          renderItem={({ item }) => (
            <CreditCardPreview
              cardNumber={item.cardNumber}
              cardExpiration={item.cardExpiration}
              cardBank={item.cardBank}
              onPressTrashIcon={() => onPressTrashIcon(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </View>
      <Button title="Reserve" onPress={handlePress} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  detailsContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    color: "#555",
  },
  paymentContainer: {
    marginBottom: 16,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
};

export default PropertyReserveUI;
