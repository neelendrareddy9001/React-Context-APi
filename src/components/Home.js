import faker from "faker"

const Home = () => {

  const productArry = [...Array(20)].map(() => ({
      id : faker.datatype.uuid(),
      name : faker.commerce.productName(),
      price : faker.commerce.price(),
      image : faker.random.image(),
  }));

  console.log(productArry);

  return (
    <div>Home</div>
  )
}

export default Home