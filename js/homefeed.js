

   document.addEventListener("DOMContentLoaded",function(){
    db.collection("blogs")
   .get().then((querySnapshot) => {
      if(querySnapshot.empty){
         document.querySelector(".homefeed").innerHTML = "no post yet";
         
      }else{
         querySnapshot.forEach((blog) => {

            let data = blog.data()
            let post = `
            <div id='post${blog.id}' class="w-full max-w-[500px]  shadow-[0px_0px_4px_#00000070] rounded-lg bg-white py-[20px] px-[0px] postsall">
            <div class="p-[10px]">
            <div class="flex items-center">
            <i class="fa fa-user"></i>
            <h1 class="ml-1 text-[15px] text-slate-500 font-semibold">${data.name}</h1>
            </div>
            <h1 class="text-[10px] text-slate-500">${data.Username}</h1>
            </div>
            <div class="min-h-[250px] bg-slate-50 flex justify-center items-center w-full">
                <img src="${data.BlogImg}" alt="">
            </div>
            <div class="p-[10px]">
            <p class="font-bold text-slate-500">${data.blogHeading}</p>
            <p class="text-sm">${data.blogParagraph}</p>
            
            </div>
            <div id="hashtags-div">${data.hashtags}</div>
           </div>
            `
            

            document.querySelector(".homefeed").innerHTML += post ;

            
    
        let allhashtags =data.hashtags 
            // hashtagsData(allhashtags)
         });
      }
           
    })
    .catch((error)=>{
       console.log(error)
    })

   })

    
   

  
let input = document.querySelector("#inputfilterpost");
 
   input.addEventListener("keyup",()=>{

let homefeed = document.querySelector(".homefeed")
let filter = input.value.toUpperCase();
let allPosts = homefeed.querySelectorAll(".postsall")

for (let i = 0; i < allPosts.length; i++) {

   let hashtagsDiv =  allPosts[i].querySelector("#hashtags-div")
let    txtValue = hashtagsDiv.textContent || hashtagsDiv.innerText || hashtagsDiv.innerHTML;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  allPosts[i].style.display = "";
              } else {
                  allPosts[i].style.display = "none";
              }
    
}
   })