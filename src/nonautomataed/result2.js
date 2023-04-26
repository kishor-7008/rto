export const result2=(e)=>{
    if(e.target.innerHTML=="PASS"){
      if (e.target.style.background == "") {
        e.target.style.background = "green"
       e.target.parentNode.parentNode.children[1].children[1].style.background=""

      } else {
        e.target.style.background = ""
      }
    }else if(e.target.innerHTML=="FAIL"){
      if (e.target.style.background == "") {
        e.target.style.background = "red"
        e.target.parentNode.parentNode.children[1].children[0].style.background=""

      } else {
        e.target.style.background = ""
      }
    }
    
  }