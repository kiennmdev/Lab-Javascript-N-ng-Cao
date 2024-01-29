const calcAverageHumanAge = function (ages) {
  //1.  tính tuổi chó sang tuổi người theo công thức đã cho
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  //2. Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi (lấy ra tất cả những chú chó trên 8 tuổi)
  const adults = humanAges.filter(age => age >= 18);
  //3. Tính tuổi trung bình của những chú chó trưởng thành (>=18 tuổi người)
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

//4. Chạy hàm với dữ liệu mẫu đã cho
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
