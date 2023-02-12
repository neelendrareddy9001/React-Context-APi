import faker from "faker"

const Home = ({cart, setCart) => {

  const productArry = [...Array(20)].map(() => ({
      id : faker.datatype.uuid(),
      name : faker.commerce.productName(),
      price : faker.commerce.price(),
      image : faker.random.image(),
  }));

const [products] = useState(productArry);
  

  console.log(productArry);

  return (
    <div className="productContainer">
      {products.map((prod,i) => (
        <SingleProduct 
          prod={prod}
          cart={cart}
          setCart={setCart}
          key={prod.id} 
        />
      ))};
    </div>
  )
}

export default Home
