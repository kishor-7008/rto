export const result=(e)=>{
    if(e.target.innerHTML=="PASS"){
      if (e.target.style.background == "") {
        e.target.style.background = "green"
        e.target.parentNode.children[5].style.background = ""

      } else {
        e.target.style.background = ""
      }
    }else if(e.target.innerHTML=="FAIL"){
      if (e.target.style.background == "") {
        e.target.style.background = "red"
        e.target.parentNode.children[4].style.background = ""

      } else {
        e.target.style.background = ""
      }
    }
    
  }