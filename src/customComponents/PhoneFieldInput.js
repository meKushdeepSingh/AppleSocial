import React, { useState, useEffect } from 'react'
import {
    Text,
    TextInput,
    Image,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { Controller } from "react-hook-form";
import { colors } from '../utils/colors';
import Modal from 'react-native-modal';
import { imageStings } from '../utils/strings';
import { country } from '../utils/country';


export const PhoneFieldInput = ({
    type,
    msg,
    inputStyle,
    name,
    rules,
    control,
    icon,
    inputViewStyle,
    flagValue,
    onSelectCode,
    ...props
}) => {

    const [isModal, setisModal] = useState(false)

    const onItemPress = (item) => () => {
        onSelectCode(item.dialCode, item.emoji)
        setisModal(false)
    }

    const renderModalItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.itemList}
                onPress={onItemPress(item)}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text>{item.emoji}</Text>
                    <Text style={[styles.itemListText, { width: '70%' }]}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.itemListText}>{item.dialCode}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View
            style={styles.mainView}>
            <Modal
                animationIn='zoomIn'
                animationOut='zoomOut'
                isVisible={isModal}
                style={styles.modalStyles}
                animationInTiming={1000}
                animationOutTiming={1000}
            >
                <SafeAreaView style={styles.modalView}>
                    <TouchableOpacity
                        onPress={() => setisModal(false)}
                        style={styles.crossButtonWrapper}>
                        <Image
                            style={styles.crossButton}
                            source={imageStings.icCross}
                        />
                    </TouchableOpacity>
                    <FlatList
                        data={country}
                        renderItem={renderModalItem}
                        keyExtractor={item => `countryCode_${item.code}`}
                        showsVerticalScrollIndicator={false}
                    />

                </SafeAreaView>
            </Modal>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <View style={[styles.inputWrapper, inputViewStyle]}>
                        <TouchableOpacity
                            onPress={() => setisModal(true)}
                            style={styles.icon}>
                            <Text>
                                {flagValue}
                            </Text>
                        </TouchableOpacity>

                        <TextInput
                            style={inputStyle}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            keyboardType='phone-pad'
                            {...props}
                        />
                    </View>
                )}
                rules={rules}
                name={name}
                defaultValue=''
            />
            {msg && <Text style={styles.errorMsg}>{msg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%'
    },
    inputWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMsg: {
        fontSize: 12,
        color: colors.red,
        marginBottom: '2%',
    },
    modalStyles: {
        margin: 0
    },
    modalView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    crossButtonWrapper: {
        position: 'absolute',
        zIndex: 1,
        top: '5%',
        right: '5%'
    },
    crossButton: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingLeft: '5%'
    },
    itemListText: { marginLeft: '5%' },
})