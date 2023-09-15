import StoreContext from "./StoreContext";
const StoreContextProvider = (props) => {
  const contextvalues = {
    products: [
      {
        id: 1,
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        description:
          "A vibrant collection of various colors for the ultimate expression of your style.",
        reviews: [
          {
            username: "Alice",
            review: "I love these colors! They're so vibrant and beautiful.",
            rating: 5.0,
          },
          {
            username: "Bob",
            review: "Great quality! Definitely worth the price.",
            rating: 4.0,
          },
        ],
      },
      {
        id: 2,
        title: "Black and White Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        description:
          "A timeless blend of classic black and white colors, perfect for any occasion.",
        reviews: [
          {
            username: "Carol",
            review: "Simple yet elegant. I wear these everywhere.",
            rating: 5.0,
          },
          {
            username: "David",
            review: "Good value for money. Highly recommended.",
            rating: 4.0,
          },
        ],
      },
      {
        id: 3,
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        description:
          "Bold and striking yellow combined with the elegance of black, a statement in style.",
        reviews: [
          {
            username: "Eve",
            review: "Unique color combination. Stands out in a crowd.",
            rating: 5.0,
          },
          {
            username: "Frank",
            review: "I like the design, but it's a bit pricey for me.",
            rating: 3.0,
          },
        ],
      },
      {
        id: 4,
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        description:
          "A calming and versatile blue color that complements any look with a touch of serenity.",
        reviews: [
          {
            username: "Grace",
            review: "Absolutely love this shade of blue. It's so soothing.",
            rating: 5.0,
          },
          {
            username: "Henry",
            review: "High-quality product, but a bit on the expensive side.",
            rating: 4.0,
          },
        ],
      },
    ],

    // Now each product in the array has a "description" field.
  };
  return (
    <StoreContext.Provider value={contextvalues}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
