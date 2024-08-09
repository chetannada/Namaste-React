const withRestaurantOffer = (Restaurant) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info;
    console.log(aggregatedDiscountInfoV3);
    return (
      <div className="relative">
        <h1 className="absolute top-32 p-1 bg-black rounded-md text-white">
          {aggregatedDiscountInfoV3?.header + " "}
          {aggregatedDiscountInfoV3?.subHeader}
        </h1>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default withRestaurantOffer;

// higher order component is the component that takes the component input and instance
// that component and return that called the higher order component
