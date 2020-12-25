import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import { colors, fonts } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, response => {
            console.log('response: ', response);
            if(response.didCancel || response.error){
                showMessage({
                    message: 'oops, sepertinya anda tidak memilih foto nya?',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                });
            } else {
                const source = {uri: response.uri};
                setPhoto(source);
                setHasPhoto(true);
            }    
        });
    };
    return (
        <View style={styles.page}>
          <Header title="Upload Photo" />
          <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                    <Image source={photo} style={styles.avatar} />
                    {hasPhoto && <IconRemovePhoto style={styles.removePhoto} />}
                    {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Gap height={30} />
                    <Text style={styles.name}>Didi Sugiarto</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                    </View>
                <View> 
                     <Button 
                     disable={!hasPhoto}
                     title="Upload and Continue"
                     onPress={() => navigation.replace('MainApp')}
                      />
                     <Gap height={30} />
                     <Link 
                     title="Skip for this"
                      align="center" 
                      size={16} 
                      onPress={() => navigation.replace('MainApp')} 
                      />
                </View>
            </View>
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: colors.white},
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
},
    avatar: {width: 110, height: 110, borderRadius: 110 / 2 },
    avatarWrapper: {
        width: 110,
        height: 110,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 110 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removePhoto: {position: 'absolute', bottom: -26, right: -28},
    addPhoto: {position: 'absolute', bottom: -8, right: -6},
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4,
    },
});