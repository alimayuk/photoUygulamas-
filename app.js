const form = document.querySelector("#form");
const searchPhoto = document.querySelector("#searchPhoto");
const search = document.querySelector("#search");
const clear = document.querySelector("#clear");
const photosWrapper = document.querySelector(".photos-wrapper");

runEveryTime();

function runEveryTime (){
   form.addEventListener("submit" , getPhotos);
   clear.addEventListener("click",clearAll);
}

function clearAll(e){
 
        searchPhoto.value="";
        photosWrapper.innerHTML = "";
  

}

function getPhotos(e){

    const inputSearch = searchPhoto.value.trim();
    fetch(`https://api.pexels.com/v1/search?query=${inputSearch}`,{
        method : "GET",
        headers : {
            Authorization : "moKcPMsogNu9Nni5N5whoMDfdYIc0lnCybwyKYifRqbEGR0E7t03jFdJ"
        } 
    }).then((response)=> response.json())
    .then((data)=>{
        Array.from(data.photos).forEach(image => {
            showImages(image.src.small)
        })
    })
    .catch((err)=>console.log(err))

    e.preventDefault();
}

function showImages(url){

   const div = document.createElement("div");
   const img = document.createElement("img");
   img.setAttribute("src",url)
   img.height = "300";
   img.width = "300";
  
    div.appendChild(img)
    photosWrapper.appendChild(div)
}