import React from 'react';
import SearchResultsUI from './SearchResultsUI';
import i18n from '../../../assets/strings/I18n';
//funcion que crea pantalla 
export default function SearchResults({route}) {
    const { transaction, type  } = route.params;
    console.log(transaction, type);
    return (
        <SearchResultsUI />
    )
}

