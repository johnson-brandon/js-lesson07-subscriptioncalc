// Your JS code here
var subTypeElement=document.querySelector("#subscription");
var subDurationElement=document.querySelector("#months");
var result=document.querySelector(".result");
var subType="basic";
var subDuration=1;


subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    //console.log(subType);
    updateSubcriptionDiv ();
});

subDurationElement.addEventListener("change", function (e) {
    subDuration = e.target.value;
    //console.log(Number(subDuration));
    updateSubcriptionDiv ();
});
/*something is wrong in the below function. 
it is not updating with selection.*/
var updateSubcriptionDiv = function () {
    var monthlyCost=5;
    if (subType==="standard") {
        monthlyCost=7;
    } else if (subType==="premium") {
        monthlyCost=10;
    }

    var total=(subDuration*monthlyCost);
    
    result.innerText=`You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};