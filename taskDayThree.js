

//Q1:


        const products = [
            {name: "A",price:200},
            {name: "B",price:100},
            {name: "C",price:150},
            {name: "D",price:200}
        ];

        const sorted=products.sort((a,b)=>a.price-b.price);
        console.log(sorted);

        console.log(products.reduce((acc,product)=>acc+product.price,0));
        

// Q2:

        const items = [2,5,7,8,9,0,3];

        for(let key of items){
            
        }

        items.sort((a,b)=>a-b);
