 //如果一个数组中能找到三个不同元素，便其中两个的和等于第三个元素，返回true 否则返回false

 //首先试一下循环嵌套,这种方法完全是扯淡
 let a = [10, 110, 1110, 11110, 3, 7];

 function findSum(a) {
     for (let i = 0; i < a.length; i++) {
         for (let j = i + 1; j <= a.length - 1; j++) {
             //console.log(a[i], a[j], (a[i]+a[j]));
             console.count('inner');
             if (a.indexOf(a[i] + a[j]) > -1) {
                 return true;
             }
         }
     }

     return false;
 }

 function genArr() {
     let r = [10]
     for (let i = 0; i < 98; i++) {
         r.push(1110);
     }
     r.push(3);
     r.push(7);
     return r;
 }

 let b = genArr();
 console.time();
 let result = findSum(b);
 console.timeEnd();
 console.log(result);