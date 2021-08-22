import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    TouchableOpacity,
} from 'react-native';

export default function MenuPage({navigation}) {
    return (
        <View>
            <SectionList
                sections={[
                    {
                        title: 'Breakfast',
                        data: [
                            {
                                id: '1',
                                item_name: 'Oats',
                                price: '250',
                                menu_category_name: 'Breakfast',
                            },
                            {
                                id: '2',
                                item_name: 'Muesli',
                                price: '230',
                                menu_category_name: 'Breakfast',
                            },
                            {
                                id: '3',
                                item_name: 'Pan Cakes',
                                price: '300',
                                menu_category_name: 'Breakfast',
                            },
                            {
                                id: '4',
                                item_name: 'Chicken Sandwich',
                                price: '350',
                                menu_category_name: 'Breakfast',
                            },
                        ],
                    },
                    {
                        title: 'Veg Snacks',
                        data: [
                            {
                                id: '5',
                                item_name: 'Aloo Sadeko',
                                price: '200',
                                menu_category_name: 'Veg Snacks',
                            },
                            {
                                id: '6',
                                item_name: 'Mushroom Pakoda',
                                price: '350',
                                menu_category_name: 'Veg Snacks',
                            },
                            {
                                id: '7',
                                item_name: 'Paneer Pakoda',
                                price: '400',
                                menu_category_name: 'Veg Snacks',
                            },
                            {
                                id: '8',
                                item_name: 'Peanuts Sadeko',
                                price: '100',
                                menu_category_name: 'Veg Snacks',
                            },
                            {
                                id: '9',
                                item_name: 'Mushroom Sadeko',
                                price: '350',
                                menu_category_name: 'Veg Snacks',
                            },
                        ],
                    },
                    {
                        title: 'Non-Veg Snacks',
                        data: [
                            {
                                id: '10',
                                item_name: 'Buff Chhoila',
                                price: '250',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '11',
                                item_name: 'Buff Sekuwa',
                                price: '350',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '12',
                                item_name: 'Chicken Chhoila',
                                price: '350',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '13',
                                item_name: 'Chicken Sadeko',
                                price: '400',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '14',
                                item_name: 'Chicken Sekuwa',
                                price: '400',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '15',
                                item_name: 'Mutton Sekuwa',
                                price: '500',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '16',
                                item_name: 'Pork Sekuwa',
                                price: '500',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '17',
                                item_name: 'Chicken Chilli',
                                price: '350',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '18',
                                item_name: 'Fish Finger',
                                price: '400',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '19',
                                item_name: 'Chicken Wings',
                                price: '400',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '20',
                                item_name: 'Chicken Drum Sticks',
                                price: '400',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '21',
                                item_name: 'Mutton Ribs',
                                price: '500',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                            {
                                id: '22',
                                item_name: 'Chicken Chilli',
                                price: '350',
                                menu_category_name: 'Non-Veg Snacks',
                            },
                        ],
                    },
                ]}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('AddItemPage', {
                                id: item.id,
                                name: item.item_name,
                                price: item.price,
                            })
                        }>
                        <Text style={styles.item}>{item.item_name}</Text>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#DCDCDC',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
