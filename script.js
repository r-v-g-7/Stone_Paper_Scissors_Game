console.log("js has been set");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {

        var buttonClicked = this.className 
        console.log(buttonClicked);
        
        // Update image in .containerX based on button clicked
        if(buttonClicked === "video1") {
            document.querySelector(".containerX").innerHTML = '<img src="./Stone.png" alt="Image" height="150px" width="270px">';
        } else if(buttonClicked === "video2") {
            document.querySelector(".containerX").innerHTML = '<img src="./Paper.png" alt="Image" height="150px" width="270px">';
        } else if(buttonClicked === "video3") {
            document.querySelector(".containerX").innerHTML = '<img src="./Scissors.png" alt="Image" height="150px" width="270px">';
        }

        let targetDiv = document.querySelector(".container");
        targetDiv.innerHTML = ""; // Clear existing content

        let video = document.createElement("video");
        video.autoplay = true;
        video.style.width = "100%";
        video.style.height = "100%";

        const randomNumber = Math.floor(Math.random() * 3) + 1;

        // Set the video source based on random number
        switch (randomNumber) {
            case 1:
                video.src = "./Rock_Video.mp4"; 
                break;
            case 2:
                video.src = "./Papar_Video.mp4";
                break;
            case 3:
                video.src = "./Scissors_Video.mp4";
                break;
            default:
                break;
        }

        targetDiv.appendChild(video); // Append video to target div

        // Determine the result of the game
        let result = "";
        
        // Use setTimeout to change innerHTML after 3 seconds delay
        setTimeout(() => {
            if (buttonClicked === "video1" && randomNumber === 1) {
                document.querySelector("h1").innerHTML = "It's a Draw";
            } else if (buttonClicked === "video1" && randomNumber === 2) {
                document.querySelector("h1").innerHTML = "Computer Win";
            } else if (buttonClicked === "video1" && randomNumber === 3) {
                document.querySelector("h1").innerHTML = "You Win";
            } else if (buttonClicked === "video2" && randomNumber === 1) {
                document.querySelector("h1").innerHTML = "You Win";
            } else if (buttonClicked === "video2" && randomNumber === 2) {
                document.querySelector("h1").innerHTML = "It's a Draw";
            } else if (buttonClicked === "video2" && randomNumber === 3) {
                document.querySelector("h1").innerHTML = "Computer Win";
            } else if (buttonClicked === "video3" && randomNumber === 1) {
                document.querySelector("h1").innerHTML = "Computer Win";
            } else if (buttonClicked === "video3" && randomNumber === 2) {
                document.querySelector("h1").innerHTML = "You Win";
            } else if (buttonClicked === "video3" && randomNumber === 3) {
                document.querySelector("h1").innerHTML = "It's a Draw";
            }
        }, 1500); // 3000 milliseconds (3 seconds)

    }); 
});
