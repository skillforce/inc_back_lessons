let addresses = [
    {value:'Dok 15', id:1},
    {value:'Mira 16', id:2},
]


export const addresses_repository = {
    findAddresses(addressValue?: string) {
        if (addressValue) {
            return addresses.filter(address => address.value.includes(addressValue))
        } else {
            return addresses;
        }
    },

    createAddress(newAddressTitle: string) {
        const newAddress = {value: newAddressTitle, id: +new Date()}
        addresses.push(newAddress)
        return newAddress
    },

    getAddressById(addressId: number) {
        const address = addresses.find(address => address.id === addressId);
        if (!address) {
            return null;
        }
        return address
    },

    updateAddress(addressId: number, newAddressTitle: string) {
        const addressToUpdate = addresses.find(address => address.id === +addressId);

        if (!addressToUpdate) {
            return false
        } else {
            const updatedAddress = {...addressToUpdate, value: newAddressTitle}

            addresses = addresses.map(address => address.id === +addressId ? updatedAddress : address);

            return true
        }
    },
    deleteAddress(addressId: number) {
        const addressToUpdate = addresses.find(address => address.id === addressId);

        if(addressToUpdate){
            addresses = addresses.filter(address => address.id !== +addressId);
            return true
        }
            return false


    }
};