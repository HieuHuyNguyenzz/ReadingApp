import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableNativeFeedback } from 'react-native';

const defaultBook =  {
    name: "",
    type: "",
    url: "",
    status: "",
    price: "",
    website: "",
    Etp: "",
    description: ""
};
function AddBook({ navigation, route }) {
    const [book, setBook] = useState(defaultBook);
    const {addNewBook} = route.params;
    const handleAddBook = () => {
        addNewBook(book);
        navigation.goBack()
    };

    const onChange = (name, value) => {
        setBook({...book, [name]: value})
    }

    const {name, type, status, etp, price, description, url} = book;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Tên Sách:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={name}
                onChangeText={text => onChange("name", text)}
            />

            <Text style={styles.label}>Thể Loại:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập thể loại sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={type}
                onChangeText={text => onChange("type", text)}
            />

            <Text style={styles.label}>Mô tả:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập mô tả"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={description}
                onChangeText={text => onChange("description", text)}
            />

            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập giá sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={price}
                onChangeText={text => onChange("price", text)}
            />

            {/* <Text style={styles.label}>Website:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập trang bán sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={website}
                onChangeText={text => onChange("website", text)}
            /> */}

            <Text style={styles.label}>Ảnh:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập link ảnh sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={url}
                onChangeText={text => onChange("url", text)}
            />

            {/* <Text style={styles.label}>Etp:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập thể loại sách"
                placeholderTextColor="rgba(0,0,0,0.4)"
                value={etp}
                onChangeText={text => onChange("etp", text)}
            /> */}

            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#D9444B', false)} // Change color on press
                onPress={handleAddBook}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Thêm Sách</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        backgroundColor: 'blue', // Initial background color
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#D9444B', // Text color
        fontSize: 16,
    },
});

export default AddBook;
