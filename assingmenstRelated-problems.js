// Problem:1   radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।


function radianToDegree(radian){
    const deg = radian * 180/3.1416;
    const degtwoDecemel = deg.toFixed(2);
    const degNUmber = parseFloat(degtwoDecemel)
    return degNUmber;
}

const deg = radianToDegree(5)
console.log(deg)