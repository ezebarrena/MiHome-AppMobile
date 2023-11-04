

export default function Estados(transaction, estado){
    let tipo
    if (transaction == 0 && estado == 1) {
        tipo = 'venta'
    }
    else if (transaction == 1 && estado == 1) {

        tipo='alquiler'
    }
    else if (transaction == 1 && estado == 0) {
        tipo= 'alquilada'
    }
    else if (estado == 2) {
        tipo='pausada'
    }
    else if (transaction == 0 && estado == 0) {
        tipo='vendida'
    }

    return tipo
}