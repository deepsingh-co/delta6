let btn = document.querySelector("button");

btn.addEventListener("click" , async () =>{
    let quote =  await getShayrari();
    let p = document.querySelector("#Sahy");
    p.innerText = quote;
});




let url = "https://farzi-vichar-api.vercel.app/language/hindi/random";

async function getShayrari() {
    try{
        let  res = await axios.get(url);
        return (res.data.content);
    } catch (e){
        console.log("error -", e);
        return "Nahi hai kuch aj"
    }
    
}

