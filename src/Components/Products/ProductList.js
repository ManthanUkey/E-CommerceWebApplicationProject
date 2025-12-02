import Jeans from '../../assets/jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import TShirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'








const products = [
    {
        id:1,
        name:"Sport TShirt",
        image:TShirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        newArrival: false,
        category:"Mens"


    },
    {
        id:2,
        name:"Slim Fit Jeans",
        image:Jeans,
        price: 45.00,
        oldPrice: null,
        onSale: false,
        newArrival: true,
        category:"Mens"


    },
    {
        id:3,
        name:"Leather Jacket",
        image:LeatherJacket,
        price: 89.99,
        oldPrice: 129.99,
        onSale: false,
        newArrival: false,
        category:"Mens"


    },
    {
        id:4,
        name:"Skater Dress",
        image:Skater,
        price: 39.99,
        oldPrice: 59.99,
        onSale: true,
        newArrival: false,
        category:"Womens"


    },
    {
        id:5,
        name:"Baby Sleepsuit",
        image:Sleepsuit,
        price: 29.99,
        oldPrice: null,
        onSale: false,
        newArrival: false,
        category:"Kids"


    },
    {
        id:6,
        name:"Long Sleeve shirt",
        image:Shirt,
        price: 49.99,
        oldPrice: null,
        onSale: false,
        newArrival: false,
        category:"Mens"


    },
    {
        id:7,
        name:"Floral Dress",
        image:Dress,
        price: 120.00,
        oldPrice: null,
        onSale: false,
        newArrival: true,
        category:"Kids"


    },
    {    id:8,
        name:"Stripes Sweater",
        image:Sweater,
        price: 65.00,
        oldPrice: 85.00,
        onSale: true,
        newArrival: false,
        category:"Kids"


    },
    {    id:9,
        name:"Pink Skirt",
        image:Skirt,
        price: 15.99,
        oldPrice: 20.99,
        onSale: false,
        newArrival: true,
        category:"Womens"


    },
    {    id:10,
        name:"Baby Shirt",
        image:BabyShirt,
        price: 22.00,
        oldPrice: null,
        onSale: false,
        newArrival: true,
        category:"Kids"


    },
    {    id:11,
        name:"Hoddie",
        image:Hoodie,
        price: 35.00,
        oldPrice: 45.00,
        onSale: true,
        newArrival: false,
        category:"Mens"


    },
    {
        id:12,
        name:"Full Sleeve Shirt",
        image:ShirtDress,
        price: 10.00,
        oldPrice: 18.00,
        onSale: true,
        newArrival: false,
        category:"Womens"


    },
]

export default products;