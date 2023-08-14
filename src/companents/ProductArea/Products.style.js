import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#eceff1",
    margin: 7,
    borderRadius: 10,
    marginLeft: 0,
    width: 180,
  },
  body: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
    width: 175,
    height: 180,
  },
  top: {
    marginLeft: 5,
    marginRight: 5,
  },
  bottom: {
    marginTop: 3,
    marginBottom: 4,
  },
  title: {
    fontWeight: "bold",
    width: 120,
  },
  price: {
    fontWeight: "bold",
    color: "#808080",
  },
  inStock: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#ff0000",
  },
});
