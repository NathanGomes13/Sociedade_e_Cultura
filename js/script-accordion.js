// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) => {
//     let header = item.querySelector("header");
//     header.addEventListener("click", () =>{
//         item.classList.toggle("open");

//         let description = item.querySelector(".description");
//         if(item.classList.contains("open")){
//             description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
//             description.style.opacity = '1';
//             item.querySelector("i").classList.replace("fa-plus", "fa-minus");
//             item.querySelector("i").style.transform = "rotate(180deg) scale(1.25)";
//         }else{
//             description.style.height = "0px";
//             description.style.opacity = '0';
//             item.querySelector("i").classList.replace("fa-minus", "fa-plus");
//             item.querySelector("i").style.transform = "rotate(0deg)";
//         }
//         removeOpen(index); //calling the funtion and also passing the index number of the clicked header
//     })
// })

// function removeOpen(index1){
//     accordionContent.forEach((item2, index2) => {
//         if(index1 != index2){
//             item2.classList.remove("open");

//             let des = item2.querySelector(".description");
//             des.style.height = "0px";
//             description.style.opacity = '0';
//             item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
//             item2.querySelector("i").style.transform = "rotate(0deg)";
//         }
//     })
// }
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
            item.querySelector("i").style.transform = "rotate(180deg) scale(1.25)";
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
            item.querySelector("i").style.transform = "rotate(0deg)";
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
            item2.querySelector("i").style.transform = "rotate(0deg)";
        }
    })
}
 