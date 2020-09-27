import {StyleSheet, Dimensions} from "react-native"
const mywidth = Dimensions.get("window").width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: 'space-between',
  },
  container2: {
    backgroundColor: "#F1F1F1",
    justifyContent: 'space-between',
  },
  containerBlue: {
    flex: 1,
    backgroundColor: "#0693E3",
    justifyContent: 'space-between',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  },
  center: {
    textAlign: "center"
  },
  roundButton: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width:50,
    height:50,
    backgroundColor:"#FF4219",
    borderRadius:50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    margin: 20
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  incomeClicked: {
    backgroundColor: "green",
    color: "white",
    width: 200,
    textAlign: "center",
    padding: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  },
  incomeNotClicked: {
    backgroundColor: "#F1F1F1",
    color: "gray",
    width: 200,
    textAlign: "center",
    padding: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  },
  expensesClicked: {
    backgroundColor: "#FF4219",
    color: "white",
    width: 200,
    textAlign: "center",
    padding: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  },
  expensesNotClicked: {
    backgroundColor: "#F1F1F1",
    color: "gray",
    width: 200,
    textAlign: "center",
    padding: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  row3: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "gray"
  },
  dateInput: {
    marginLeft: 10,
    borderWidth: 0.5,
    width: 300,
    borderColor: "gray",
    padding: 18
  },
  modal: {
    borderWidth: 0.5,
    borderColor: "gray",
    color: "gray",
    padding: 20,
    width: 120
  },
  modal2: {
    borderWidth: 0.5,
    borderColor: "gray",
    color: "gray",
    padding: 20,
    width: mywidth-100,
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  bigbox: {
    padding: 10,
    backgroundColor: "pink",
    color: "blue"
  },
  cashcardNotClicked: {
    backgroundColor: "#F1F1F1",
    color: "gray",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    marginHorizontal: 10
  },
  cashcardClicked: {
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    marginHorizontal: 10
  },
  submit: {
    borderWidth: 0.5,
    borderColor: "gray",
    color: "gray",
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(0,145,0,1)",
    marginVertical: 10
  },
  nosubmit: {
    borderWidth: 0.5,
    borderColor: "gray",
    color: "gray",
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(0,145,0,0.2)",
    marginVertical: 10,
  },
  day: {
    textTransform: "uppercase",
    borderBottomWidth:0.5,
    borderColor: "gray",
    padding: 20
  },
  dailyitem: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10
  },
  saveTouchable: {

  },
  saveText: {
    backgroundColor: "#262626",
    color: "white",
    padding: 20,
    fontSize: 20,
    marginVertical: 5
  }
});

export default styles
