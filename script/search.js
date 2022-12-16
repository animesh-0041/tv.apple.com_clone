let moviegrid=document.getElementById("movie-grid");
let search=document.getElementById("search");
let actualData=[];
Fetch();
async function Fetch(){
    try {
        let res=await fetch("search_page_data.json")
        let actual=await res.json();
        actualData=actual.searchData;
        print(actualData);
        
    } catch (error) {
        console.log(error)
    }
}

function print(data){
    moviegrid.innerHTML=null;
    data.forEach(element => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",element.img);
        div.append(img);
        moviegrid.append(div)
        
    });
}

searchMe();

function searchMe(){
    search.addEventListener("input",(e)=>{
        let searchValue=e.target.value;
        let searchReasult = actualData.filter((el) => {
            return el.name.toLowerCase().includes(searchValue.toLowerCase());
          });
          if(searchReasult.length==[]){
          notFound(searchValue);
          }else{
            print(searchReasult);
          }
         
    })
}
function notFound(na){
    moviegrid.innerHTML=null;
    let div=document.createElement("div");
    div.setAttribute("id","notfound")
    div.innerText="No result"+"\n"+`There were no result for${na}`;
    moviegrid.append(div)

}

