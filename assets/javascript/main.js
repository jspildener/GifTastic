var dogsArray = ["boston terrier", "corgi", "bulldog", "pittBull", "golden retriever"];

function createButtons() {
    $("#dogBreedButtons").empty();
    for (var i = 0; i < dogsArray.length; i++) {
        var buttons = $("<button>");
        buttons.addClass("dogBreed");
        buttons.attr("nameData", dogsArray[i]);
        buttons.text(dogsArray[i]);
        $("#dogBreedButtons").append(buttons);
    }
}
$("#addDog").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#dogInput").val().trim().toLowerCase();
    if (dogsArray.indexOf(userInput) === -1 && userInput!="") {
        dogsArray.push(userInput);
        createButtons();
    }
});

createButtons();