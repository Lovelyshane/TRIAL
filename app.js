  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDs-6VN11Iav8TBo3dSs_NulaQsQmjiqMo",
    authDomain: "romblonpebbles.firebaseapp.com",
    projectId: "romblonpebbles",
    storageBucket: "romblonpebbles.appspot.com",
    messagingSenderId: "620100154828",
    appId: "1:620100154828:web:71ba3caf9f4425693ad969",
    measurementId: "G-ELR8JCKSMZ"
  };

firebase.initializeApp(config);
var firestore = firebase.firestore()

const docRef = firestore.doc("romblonpebbles/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");

const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function(){
	const textToSave = inputTextField.value;
	console.log("I am going to save" + textToSave + "to Firestore");
	docRef.set(
	{
		hotDogStatus: textToSave
	});
  then(function ()
	{
		console.log("status save!");
	}).catch (function (error){
		console.log("Get an error:" , error);
	});

})