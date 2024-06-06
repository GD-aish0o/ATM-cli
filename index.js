// practicing promises /callbacks/resolve/timeouts/.then 
import inquirer from "inquirer";
let cnfrm = await inquirer.prompt({
    name: "Ask",
    type: "confirm",
    default: "true",
    message: "Do You want to book a ride?"
});
// to cnfrm if the usr actually want to book a ride.
if (cnfrm.Ask === true) {
    // The function below will ask what type of vehicle or ride user wants.
    function ride() {
        return new Promise(async (resolve) => {
            const vehicle = await inquirer.prompt({
                name: "ride",
                type: "list",
                //        0         1             2      3         4       5
                choices: ["Bike", "Rickshaw", "Micro", "Mini", "Sedan", "SUV"]
            });
            // console.log(vehicle);
            resolve(" ");
        });
    }
    // the function InitOrder Initializes the order
    function InitOrder() {
        return new Promise((resolve) => {
            console.log(`Accessing your location for "Pickup"`);
            resolve(" ");
            setTimeout(() => {
                console.log("Detecting where do you go often this time");
                resolve(" ");
                // Thought the following setTimeout log is useless for the program
                // setTimeout(() => {
                //     console.log("drop loction detected:\nUse social media wisely ;)");
                //     resolve(" ");
                // }, 2000);
            }, 4000);
        });
    }
    // the function below prompts the user that ride is confirmed from (here) to (there) on (vehicle);
    // function userPrompt() {
    //     console.log("Your ride is confirmed!");
    //     console.log("\n", "\n");
    //     setTimeout(() => {
    //         console.log(`A`,ride(vehicle.ride));
    //     }, 2000);
    // }
    // the function below prompts the user that the ride is now confirmed and the app db is finiding a rider:
    function RideCofirmed() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Ride confirmed,");
            }, 5000);
            setTimeout(() => {
                console.log("Finding a rider...");
                resolve(" ");
            }, 5000);
            setTimeout(() => {
                console.log("Please be patient.!");
                resolve(" ");
            }, 6000);
        });
    }
    // the function rider found is made to prompt the user to stay on the place the rider is arriving:
    function RiderFound() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Rider found!");
                resolve(" ");
            }, 2500);
            setTimeout(() => {
                console.log("Please be ready, Rider is on the way...");
                resolve(" ");
            }, 3000);
        });
    }
    // calling the functions back to back
    InitOrder() //first execute this 
        .then(ride) //then this
        .then(RideCofirmed) //then this
        .then(RiderFound); //then this
}
else {
    console.log("choose Y to run the program");
}
