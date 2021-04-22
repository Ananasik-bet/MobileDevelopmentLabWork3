import React from "react";
import {
    View, Text,
    StyleSheet, ScrollView, Dimensions, Image
} from 'react-native'
import { Appbar } from 'react-native-paper';
import BooksList from '../assets/BooksList.json'
import { AppBarTheme, getBookImage, useScreenDimensions } from '../constants/data'

const Books = ({ navigation }) => {

    let booksData = [];

    BooksList.books.map((item, i) => (
        booksData.push(item)
    ))

    const Home = () => {
        navigation.navigate('Creator');
    }

    const dim = Dimensions.get('screen')
    const screenData = useScreenDimensions();

    return (
        <ScrollView style={{ backgroundColor: '#f8ecdd' }}>
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
           <View>
               {
                   booksData.map(( item, index) => {
                       return(
                           <View key={ index }>
                               <View style={{
                                   backgroundColor: '#C78C65',
                                   borderRadius: 30,
                                   flexDirection: 'row',
                                   margin: 10,
                               }}>
                                   <View>
                                       <Image
                                           resizeMode="cover"
                                           source={
                                               getBookImage(item.image)
                                           }
                                           style={{
                                               borderRadius: 30,
                                               height: 200,
                                               width: 150
                                           }}
                                       />
                                   </View>
                                   <View style={{
                                        marginLeft: '5%'
                                   }}>
                                       <Text style={{
                                           flex: 0,
                                           width: screenData.isLandscape ? '100%' : '55%',
                                           fontSize: 18,
                                           marginBottom: 10,
                                           marginTop: 10,
                                           textAlign: 'left',
                                       }}>
                                           {
                                               item.title.length >= 43 ?
                                                   item.title.slice(0, 43 - 1) + '…' :
                                                   item.title
                                           }
                                       </Text>
                                       <Text style={{
                                           flex: 0,
                                           width: screenData.isLandscape ? '100%' : '55%',
                                           fontSize: 15,
                                           marginBottom: 10,
                                           marginTop: 10,
                                           textAlign: 'left',
                                       }}>
                                           {
                                               item.subtitle.length === 0 ?
                                                   'The best book to improve your programming skills' :
                                                   item.subtitle
                                           }
                                       </Text>
                                       <Text style={{
                                           position: 'absolute',
                                           bottom: 0,
                                           marginBottom: '5%'
                                       }}>
                                           Price: {
                                            item.price.length === 0 ?
                                                'Priceless' :
                                                item.price
                                           }
                                       </Text>
                                   </View>
                               </View>
                           </View>
                       )
                   })
               }
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffe1ff',
        flex: 1,
        justifyContent: 'center',
        flexDirection:'column',
        alignItems:'center'
    },
    txt: {
        fontSize: 20
    },
});

export default Books
