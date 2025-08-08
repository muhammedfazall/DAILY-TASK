
//Q1

        const items = [1,2,3,4,5,6,7,8,9,10];
       
         for(let i=0;i<items.length;i++){
            if(items[i] % 3 !== 0){
                console.log(items[i]);
            }
        }

//Q2

        const arr = [2,3,4,7,9,2,7,3,8];
        let unique = [];
        for(let i=0;i<arr.length;i++){
           let count = 0;
              for(j=0;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    count++;
                }}
            if(count===1){
                unique.push(arr[i]);
            }}
            console.log(unique);
            
//or

        const unique1 = arr.filter((num) => {
            return arr.indexOf(num) === arr.lastIndexOf(num)}
        );
        
        console.log(unique1);
        

