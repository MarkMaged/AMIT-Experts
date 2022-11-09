// This for check local storage and insert array in it then take tha data from it and show it to user

if (localStorage.getItem("New Items") === null) {
    localStorage.setItem("New Items", JSON.stringify([]));
}

// here i take the data form localstorage and put it in araay have objects

let arr = JSON.parse(localStorage.getItem("New Items"))


$("#add-btn").click(Add)


function Add() {
    if ($("#test").val() !== "") {
        let obj = {
            id: Math.random().toString(),
            name: $("#test").val(),
            image: "https://th.bing.com/th/id/R.89a4e46b661ff2a21acbc31afda7db01?rik=aPULti%2bxne6j%2bg&pid=ImgRaw&r=0"
        }
        // get data from user an pudh it in the array in local storage
        arr.push(obj);
        localStorage.setItem("New Items", JSON.stringify(arr));
        show();

        $("#test").val() = "";

    } else {
        alert("You must add the name of the Car")
    }
}

// this function to show the data to user

function show() {
    var empty = "";
    for (let i = 0; i < arr.length; i++) {
        empty = empty + `<div class="continer" id="${arr[i].id}">
        <div class="data">
            <img src="${arr[i].image}"
          alt="" srcset="">
          <h2>${arr[i].name}</h2>

          <div class="buttons">
          <button class="unavailable">Unavailable</button>
          </div>
        </div>
    </div>`
    }

    $(".products").html(empty)
}

show();



$(".unavailable").click(deleteItem)

function deleteItem(e) {
    let item = e.target.parentElement.parentElement.parentElement;
    let itemID = item.id;
    item.remove();

    let newArr = arr.filter((el) => {
        return el.id != itemID;
        /* this function retuen true while loop is find the id of item until check id and don't find it return false
        so i get new array have items except the id i was select to remove */
    })
    localStorage.setItem("New Items", JSON.stringify(newArr))// put the new array to local storage

}