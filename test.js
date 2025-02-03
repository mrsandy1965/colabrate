let obj = new Object();
obj.z="z";
obj.k="k";
obj.a="a";
console.log(obj);
console.log(Object.fromEntries(Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))));