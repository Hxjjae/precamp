let classmates = ["철수", "영희", "훈이"];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0];
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.in;
// undefined
classmates.includes("훈이");
// true
classmates.includes("맹구");
// false
classmates.length;
// 3
classmates.pus;
// undefined
classmates.push("맹구");
// 4
classmates.includes("맹구");
// true
classmates;
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length;
// 4
classmates.pop();
// '맹구'
classmates.length;
// 3
classmates;
// (3) ['철수', '영희', '훈이']

let developer = ["역량", "스킬", "경력", "개발자", "경험"];
// undefined
for (let i = 0; i < developer.length; i++) {
  console.log(developer[i]);
}
