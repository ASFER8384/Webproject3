async function display(){
  try{

    let id =document.getElementById("inp-box").value
    for(let i=0;i<id.length;i++){
      console.log(id[i])
    }

    let file=await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
    let finalOutput=await file.json()
    console.log(finalOutput)

let output=document.getElementById("card")
output.innerHTML=`<div class="card" style="width: 25rem;">
<div class="card-body">
  <h5 class="card-title"><strong>Players Details</strong></h5>
  <p class="card-text"><strong>Name :</strong> ${finalOutput.first_name}</p>
  <p class="card-text"><strong>Height :</strong> ${finalOutput.height_feet}feet</p>
  <p class="card-text"><strong>Position : </strong>${finalOutput.position}</p>
  <p class="card-text"><strong>Team :</strong>${finalOutput.team.full_name}</p>
  <p class="card-text"><strong>Weight :</strong>${finalOutput.weight_pounds}</p>
</div>
</div>`
  }catch{
    console.log("INVALID KEY PRESS")
  }

}