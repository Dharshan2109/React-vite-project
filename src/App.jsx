import { useState } from 'react'

function App() {
  const [customers, setCustomers] = useState([])
  const [name, setName] = useState('')

  const addCustomer = () => {
    if (!name.trim()) return
    setCustomers([...customers, { id: Date.now(), name }])
    setName('')
  }

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id))
  }

  return (
    <div className="app-container">
      <nav className="navbar">Dharshan Customer Management System</nav>

      <div className="card">
        <h2>Add Customer</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={addCustomer}>Add</button>
        </div>
      </div>

      <div className="card">
        <h2>Customer List</h2>
        {customers.length === 0 && <p className="empty">No customers added</p>}
        <ul className="list">
          {customers.map(customer => (
            <li key={customer.id}>
              {customer.name}
              <button className="delete" onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">© 2026 Customer App</footer>
    </div>
  )
}

export default App
