import React from 'react';

const Boton = ({ iconSource, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.addButton} >
            <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    addButton: {
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    
    
  });
  
  export default Boton;