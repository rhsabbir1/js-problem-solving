// Problem:1   radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।


function radianToDegree(radian) {

    if (radian <= 0) {
        return 'Input not a number'
    }
    else {
        const deg = radian * 180 / 3.1416;
        const degtwoDecemel = deg.toFixed(2);
        const degNUmber = parseFloat(degtwoDecemel)
        return degNUmber;
    }
}

const deg = radianToDegree(199)
// console.log(deg)


// Problem:2   isJavaScriptFile

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

function isJavaScriptFile(fileName) {
    if (fileName.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }

}

const file = isJavaScriptFile('apps.js')
// console.log(file)


// Problem 5:  isBestFriend


// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।


function isBestFriend(objectOne, objectTow) {
    if (objectOne.name == objectTow.friend && objectTow.name == objectOne.friend){
        return true;
    }
    else{
        return false;
    }
}

const bestFriend = isBestFriend(
    { name: "abul", friend: "babul" },

    { name: "babul", friend: "abul" }
)

// Problem 4:  publicBusFare


// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


function publicBusFare(prticioants){
    let busFare = 50;
    let carFare = 11;
    const publicBusPrice = 250;
    if(prticioants < 50){
        return 'Invaled input';
    }
    let remainingMembers = 0;
    remainingMembers = prticioants % busFare;
    remainingMembers = remainingMembers % carFare;
    const cost = remainingMembers * publicBusPrice;
    return cost;
}

const totalCost = publicBusFare(365)
console.log(totalCost)