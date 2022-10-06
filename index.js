document.addEventListener("keyup", e=>{

   if (e.target.matches("#buscador")){
if (e.key==="Escape")e.target.value = " "

    document.querySelectorAll(".articulo").forEach(telefono =>{

        telefono.textContent.toLowerCase() .includes(e.target.value.toLowerCase())
         ?telefono.classList.remove("filtro")
         :telefono.classList.add( "filtro")
    })
   }
}  
)