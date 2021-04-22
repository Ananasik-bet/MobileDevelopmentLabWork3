import React from "react";
import {
    View, Text,
    StyleSheet, Dimensions, ScrollView
} from 'react-native'
import { Appbar } from "react-native-paper";
import { AppBarTheme, useScreenDimensions } from "../constants/data";

const MainInfo = ({ navigation }) => {

    const Home = () => {
        navigation.navigate('Creator');
    }

    const screenData = useScreenDimensions();

    return (
        <View>
            <View>
                <View>
                    <Appbar.Header theme={ AppBarTheme }>
                        <Appbar.Action
                            icon="home"
                            onPress={Home}
                        />
                        <Appbar.Content title='СЬОРЧ БАР ТІПА' style={{ marginLeft: 0 }} titleStyle={{ marginLeft: 0 }} />
                        <Appbar.Action
                            icon="plus"
                        />
                    </Appbar.Header>
                </View>
            </View>
            <View style={{
                backgroundColor: '#f8ecdd',
                height: Dimensions.get('screen').height,
                paddingTop: screenData.isLandscape ? '15%' : '65%',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Text style={styles.txt}>Дяченко Владислав</Text>
                <Text style={styles.txt}>Група ІО-83</Text>
                <Text style={styles.txt}>ЗК ІО-8309</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    },
});

export default MainInfo
