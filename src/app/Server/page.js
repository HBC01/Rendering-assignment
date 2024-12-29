async function Books(){
  let response = await fetch("https://simple-books-api.glitch.me/books");
response=await response.json();
return response;
  
}
import Header from "../components/Header"
export default async function  page(){
  let books = await Books();
  return(  <div className="max-w-screen-xl mx-auto p-6 py-10 space-y-10">
    <Header />
      <h1 className="text-2xl font-bold text-center mb-4">Fetching Data by Server</h1>
      <h2 className="text-xl text-center mb-8">Here is the list of Books</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600">
              <strong>Type:</strong> {item.type}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Available:</strong> {item.available ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
)}