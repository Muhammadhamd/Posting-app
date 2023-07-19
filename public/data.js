const firebaseConfig = {
    apiKey: "AIzaSyBEDzzo5U16CzvjwjZAF52JFJVHtYcqxlw",
    authDomain: "blogging-hamd.firebaseapp.com",
    projectId: "blogging-hamd",
    storageBucket: "blogging-hamd.appspot.com",
    messagingSenderId: "1082381242714",
    appId: "1:1082381242714:web:8e0fc3375d1fd2a66fe363"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  
   let db = firebase.firestore();

   let auth = firebase.auth();
   let user = auth.currentUser;

   firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
         console.log(user.name)
      }else{
         window.location.href = "signup.html";
      }
   });

   // to sign out
   document.getElementById("signout").addEventListener('click',()=>{
      firebase.auth().signOut().then(() => {
window.location.href ="./signup.html"
}).catch((error) => {
// An error happened.
});
  })
   //   to upload image into storage

  document.querySelector("#addnewblog").addEventListener("submit" ,
   (event) =>{
     event.preventDefault()
     let blogHeading = document.querySelector("#heading").value;
     let blogParagraph = document.querySelector("#paragraph").value;
     let timestamp = firebase.firestore.FieldValue.serverTimestamp()
     let uploadFileToDb = document.getElementById("upload-file").files[0]
     const ref = firebase.storage().ref();
     const name = +new Date() + "-" + uploadFileToDb.name;
     const metadata = {
      contentType: uploadFileToDb.type
   };
   const task = ref.child(name).put(uploadFileToDb, metadata);

   task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
      imageDataURL( url);
      
      alert('image uploaded successfully');
     
   })
   .catch(console.error);


   
   function imageDataURL(url){
      db.collection("blogs")
      .add({
              blogHeading: blogHeading,
              blogParagraph: blogParagraph,
               BlogImg: url,
              createdAt: timestamp
      })
      .then((docRef) =>{
         console.log("Document written with ID: ", docRef.id)
       //   console.log(docRef.data().BlogImg)
      })
      .catch((e) => {
   
         console.log("eroorrr agaya", e)
      })
   
    }
     

 })
 

 
 
  document.addEventListener("DOMContentLoaded",function(){
    db.collection("blogs")
    .get()
    .then((querySnapshot) => {


       querySnapshot.forEach((blog) => {
        
        console.log(blog.data())
        let data = blog.data()
   //      let post = `<div class="max-w-[500px] shadow rounded bg-white p-[15px] mt-[15px]">
   //      <h3>${data.blogHeading}</h3>
   //      <div>
   //          <img src="${data.BlogImg}" alt="">
   //      </div>
   //      <p>${data.blogParagraph}</p>
   //     </div>`
   //      document.querySelector(".blog-div").innerHTML += post; 
     });
    })
    .catch((error)=>{
       console.log(error)
    })
   });