import { useState } from "react";

const groceryItems = [
{
  id: 1,
  name: 'Kopi Bubuk',
  quantity: 2,
  checked: true,
  },
{
  id: 2,
  name: 'Gula Pasir',
  quantity: 5,
  checked: false,
  },
{
  id: 3,
  name: 'Air Mineral',
  quantity: 3,
  checked: false,
  },
];
 
export default function App() { 
  const [belanja,setBelanja]=useState([])

function anjirTambahBelanja(payload){
setBelanja((anjir=>[...anjir,payload]))
}

  return (
   <div className="app">
      <Header />  
      <Form onTambah={anjirTambahBelanja}/>
      <GroceryList />
      <Footer />
  </div>
  ); 
}

function Header() {
  return<h1>Catatan Belanjaku 📝</h1>
}

function Form({anjirTambahBelanja}) {
  const [name, setName] =useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const nambahBang={name,quantity,packed}
  anjirTambahBelanja()
  }

   const quantityNum = [...Array (10)].map((_, i) => (
    <option value={i + 1} key={i+1}>
      {i+1}
    </option>
  ));

 return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <select>{quantityNum}</select>
      <input type="text" placeholder="nama barang..."value={name} onChange={(e) => setName(e.target.
        value)} />
    <button onClick={handleSubmit}>Tambah</button>
  </form>
  );
}

function GroceryList() {
   return ( 
    <>
    <div className="list">
      <ul>
      {groceryItems.map((item) => (
        <Item item={item}key={item.id} />
      ))}
    </ul>
  </div>
  <div className="actions">
    <select >
      <option value="input">Urutkan berdasarkan urutan input</option>
      <option value="name">Urutkan berdasarkan nama barang</option>
      <option value="checked">Urutkan berdasarkan ceklis</option>
    </select>
    <button>Bersihkan Daftar</button>
  </div>
  </>
   );
}

function Item({item }) {
  return(
    <li key={item.id}>
    <input type="checkbox" />
    <span style={ item.checked ? { textDecoration: 'Line-through'}: {}}>
      {item.quantity} {item.name}
      </span>
    <button>&times;</button>
 </li>
  );
}
function Footer() {
    return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>;
}