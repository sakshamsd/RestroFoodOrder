import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return <Text style={styles.header}>{title}</Text>;
};

export default Header;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
