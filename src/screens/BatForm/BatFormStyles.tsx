import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   scrollContainer: {
    flexGrow: 1,
  },
    container: {
    flex: 1,
    backgroundColor: "#fff",
  },

   logoContainer: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 10,
     alignSelf: 'flex-start',
  },
   logo: {
    width: 100,
    height: 100,
  },

 formContainer: {
   width: "82%",
   alignSelf: "center",
   marginLeft: 10,     
  },
label: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    textAlign: "left",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
 hint: {
    width: "100%",
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
    marginTop:-15,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#f79323",
    fontWeight: "bold",
    fontSize: 18,
  },
});