import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Products.style";

const Products = ({prod}) => { 

 return(
<View style={styles.container}>

            <View style={styles.body}>

                <View style={styles.top}>
                    <Image style={styles.image} source={{uri: prod.imgURL}} />
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.title}>{prod.title}</Text>
                    <Text style={styles.price}>{prod.price}</Text>
                    <Text style={styles.inStock} >{prod.inStock ? "" : "STOKTA YOK"}</Text>
                </View>

            </View>

        </View>
 )
}

export default Products;