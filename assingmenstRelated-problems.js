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
        console.log('True')
    }
    else{
        console.log('False')
    }
}

const bestFriend = isBestFriend(
    { name: "abul", friend: "babul" },

    { name: "babul", friend: "abul" }
)