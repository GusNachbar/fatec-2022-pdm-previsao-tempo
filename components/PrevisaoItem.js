import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cartao from './Cartao.js'

const PrevisaoItem = ({previsao}) => {

    const dt = previsao.dt;
    const descricao = previsao.weather[0].description;
    const icon = previsao.weather[0].icon;
    const tempMin = previsao.main.temp_min;
    const tempMax = previsao.main.temp_max;
    const humidade = previsao.main.humidity;

    return (
        <Cartao
            estilo={styles.cartao}>
            <View style={styles.tela}>
                <Image style={styles.imagem}
                    source={{
                        uri: 'https://openweathermap.org/img/wn/' + icon + '.png'
                    }}
                />
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text>{new Date(dt * 1000).toLocaleTimeString()} - {descricao}</Text>
                    </View>
                    <View style={styles.segundaLinha}>
                        <Text style={styles.valor}>Min: {tempMin + '\u00B0C'}</Text>
                        <Text style={styles.valor}>Max: {tempMax + '\u00B0C'}</Text>
                        <Text style={styles.valor}>Hum: {humidade + '%'}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row',
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
})