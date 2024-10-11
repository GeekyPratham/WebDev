const URL = "https://fakerapi.it/api/v1/persons";
async function personDetail() {
     const response = await fetch(URL);

    //  console.log(response)
    let data = await response.json();
    //  console.log(data);

     let arr = data.data;
    //  console.log(arr)

    let ulElement = document.querySelector(".container ul");
     let len = arr.length;
     for(let i=0;i<len;i++){
        let name = arr[i].firstname+ " " +arr[i].lastname;
        console.log(name)
        let li = document.createElement("li");
        li.textContent = name;

        ulElement.appendChild(li);
        
     }

  
}
document.querySelector("button").addEventListener("click",()=>{
    setTimeout(function(){
        alert("button clicked")
    },3000)
    
    personDetail();
})
