import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({name, desc,isRemove}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
            <Image source={DummyUser} style={styles.avatar} />
            {isRemove && <IconRemovePhoto style={styles.RemovePhoto} />}
            </View>
            {name && (
                <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{desc}</Text> 
                </View>
            )}
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {justifyContent: 'center', alignItems: 'center'},
    avatar: {width: 110, height: 110, borderRadius: 110 / 2},
    borderProfile: { 
        width: 96, 
        height: 107, 
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
},
name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
},
profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2, 
    textAlign: 'center',
},
RemovePhoto: {position: 'absolute',right: -35, bottom: -18}
});