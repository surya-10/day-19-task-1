async function getData(){
    try {
        let datas = await fetch("https://kontests.net/api/v1/all", {
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
           
        })
        let output = await datas.json()
        output.map((val, ind)=>{
            displayData(val);
        })
    } catch (error) {
        console.log("error");
    }
}
getData();
let dataDiv = document.querySelector(".data-div");


console.log(dataDiv)

function displayData(data){
    let duration = +data.duration;
    let timeValue = duration/3600;
    console.log(timeValue.toFixed(2))
    let a = document.createElement("div");
    a.innerHTML=`
    <div class="child">
    <h3>${data.name}</h3>
    </div>
    <div class="duration">
        <p>${data.status}</p>
        <p>Duration: ${timeValue.toFixed(2)} hrs</p>
        <small>Start Time: ${data.start_time}</small>
        <small>Start Time: ${data.end_time}</small>
    </div>
    <div class="site">
        <a href=${data.url} target=_blank>${data.site}</a>
        </div>`
    a.className="box";

    dataDiv.appendChild(a);
}
