const orders = [200,450,130,50,1000,20];

        orders.forEach(order => console.log(order)); 

        console.log(orders.filter(order => order>100));

        let Discounted = orders.map(order => order-10);

        console.log(Discounted);
        
        let total = Discounted.reduce((sum,order) => (sum+order),0);
        
        console.log(total);