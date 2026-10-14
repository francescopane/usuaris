
document.getElementById("btnNouUsuari").addEventListener("click",function(){


    fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("txtNom").innerHTML=data.results[0].name.first
        document.getElementById("txtCognom").innerHTML=data.results[0].name.last

    document.getElementById("imgUsuari").src=data.results[0].picture.large
    
  });

  
})



