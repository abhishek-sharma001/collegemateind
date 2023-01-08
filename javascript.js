console.log('hello')

const searchNow = () =>{
    let input = document.getElementById('search_bar').value.toUpperCase();
    const college = document.getElementsByClassName('college');

    for(var i =0; i< college.length ;i++){
        var j=0;
        let collegeName = college[i].getElementsByClassName('targetName')[j];

        let collegesListed = collegeName.innerHTML;

        if(collegesListed.toUpperCase().indexOf(input) > -1){
            college[i].style.display = '';
            

        }else{
            college[i].style.display = 'none';
        }



    }


}

// const content = document.getElementsByClassName('content');
// content.style.display="none"

// document.getElementsByClassName("dtuarrow")[0].style.color = "red";

const nameClickeddtu = () =>{
    const div = document.querySelector('.content.dtu');
    
    const arrow = document.getElementsByClassName("dtuarrow")[0];
    if(div.style.display === 'block'){
        div.style.display = 'none'

        arrow.style.transform ="rotate(0deg)"

    }else{
        div.style.display = 'block';
        arrow.style.transform ="rotate(90deg)"
    }

}



const nameClickednsut = () =>{
    
    const div = document.querySelector('.content.nsut');
   
    const arrow = document.getElementsByClassName("nsutarrow")[0];
    if(div.style.display === 'block'){
        div.style.display = 'none'

        arrow.style.transform ="rotate(0deg)"

    }else{
        div.style.display = 'block';
        arrow.style.transform ="rotate(90deg)"
    }

}
const nameClickediitd = () =>{
    
    const div = document.querySelector('.content.iitd');
    
    const arrow = document.getElementsByClassName("iitdarrow")[0]
    if(div.style.display === 'block'){
        div.style.display = 'none'

        arrow.style.transform ="rotate(0deg)"

    }else{
        div.style.display = 'block';
        arrow.style.transform ="rotate(90deg)"
    }


}
const nameClickediiitd = () =>{
    
    const div = document.querySelector('.content.iiitd');
    
    const arrow = document.getElementsByClassName("iiitdarrow")[0]
    if(div.style.display === 'block'){
        div.style.display = 'none'

        arrow.style.transform ="rotate(0deg)"

    }else{
        div.style.display = 'block';
        arrow.style.transform ="rotate(90deg)"
    }


}
const nameClickedigdtu = () =>{
    
    const div = document.querySelector('.content.igdtu');
   
    const arrow = document.getElementsByClassName("igdtuarrow")[0]
    if(div.style.display === 'block'){
        div.style.display = 'none'

        arrow.style.transform ="rotate(0deg)"

    }else{
        div.style.display = 'block';
        arrow.style.transform ="rotate(90deg)"
    }

}










// Scroll


const scrolltoTop = () =>{
    window.scrollTo({top:0, behaviour:'smooth'})
}



window.onscroll = function scrolled(){
    const scrollarrow = document.getElementById('totop');
    if (document.documentElement.scrollTop > 300) {
        scrollarrow.style.display = 'block';
      } else {
        scrollarrow.style.display = 'none';
      }
    
}




if(screen.width < 790){ 
    window.addEventListener('scroll', function hideSearch(){
    const searchbar = document.getElementById("nav_right_id");
        if (document.documentElement.scrollTop < 50) {
            searchbar.style.display = 'block';
          } else {
            searchbar.style.display = 'none';
          }

    })
    
}


if(true){
    window.addEventListener('scroll', function hidenav(){
    const nav = document.getElementById("nav_bar");
        if (document.documentElement.scrollTop < 800) {
            nav.style.position = '';
          } else {
            nav.style.position = 'relative';
          }

    })
}








// Ul



function displayul(){
    if(screen.width < 790){
       
        let checkbox = document.getElementById('input_checkbox');
        checkbox.checked = false;

    }


}