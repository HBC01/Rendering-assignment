export default function ClientData(props) {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-4 m-4 md:max-w-md lg:max-w-lg">
    
      <h1 className="text-lg font-bold mb-2 text-gray-800">{props.title}</h1>

    
      <div className="flex justify-center mb-4">
        <img
          src={props.image}
          alt="product"
          className="w-full h-48 object-contain rounded-md"
        />
      </div>

    
      <div className="flex justify-between text-gray-600 mb-4">
        <span>
          <strong>Rating:</strong> {props.rating.rate}
        </span>
        <span>
          <strong>Count:</strong> {props.rating.count}
        </span>
      </div>

  
      <div className="flex justify-around md:flex-row md:justify-between text-gray-700">
        <span>
          <strong>Rs:</strong> {props.price}
        </span>
        <span>
          <strong>Category:</strong> {props.category}
        </span>
      </div>
    </div>
  );
}