var isOn = true;
const button = document.getElementById("proj_list_button");
const proj_list = document.getElementById("proj_list");

proj_list_button.addEventListener('click', function() {
    if(isOn == true){
        isOn = false;
        proj_list.style.height = "0px";
        proj_list_button.innerHTML = "(열기)";
    }else if(isOn == false){
        isOn = true;
        proj_list.style.height = "220px";
        proj_list_button.innerHTML = "(닫기)";
    }
})