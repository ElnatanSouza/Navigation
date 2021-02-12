import React from 'react'

import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

const Home = (props) => {
    const { navigation } = props

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
        }}
        >
            <Text
             style={{
                 color: '#000'
             }}
            >
                Você falhou mizeravelmante!
            
            </Text>
            <TouchableOpacity
                style={{
                    width: 50,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    borderStartColor: '#875414',
                }}
                title='Ir para a Sobre' 
                onPress={() => navigation.navigate('Sobre')}>

                    <Text
                        style={{color: '#863214' }}
                    >Sobre</Text>

            </TouchableOpacity>

        </View >
    )
}

export default Home


