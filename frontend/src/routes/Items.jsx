import { useState, useEffect } from "react"
import { useOutletContext, Link } from "react-router-dom"
import { API_BASE } from "../constants"
import ItemsTable from "../components/ItemsTable"

const Items = () => {
  const { user, setMessages } = useOutletContext()
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch(API_BASE + '/api/items', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setItems(data.items)
      })    
  }, [])

  if (!user) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      body: new FormData(form),
      credentials: 'include'
    })
    const json = await response.json()
    if (json.messages) setMessages(json.messages)
    if (json.item) setItems([...items, json.item])
    form.reset()
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(API_BASE + form.getAttribute('action'), {
      method: form.method,
      credentials: 'include'
    })
    const json = await response.json()
    if (json.item) setItems(items.filter(item => item._id !== json.item._id))
  }
  
  return (
    <main className="flex flex-col items-start w-full">
      <div className="hidden mb-2 ml-1 text-sm breadcrumbs lg:inline-block">
        <ul>
          <li>
            <Link to="/app">Dashboard</Link>
          </li>
          <li>Items</li>
        </ul>
      </div>
      <h1 className="ml-1 text-3xl font-bold">Items</h1>
      <div className="ml-1 collapse collapse-arrow">
        <input type="checkbox" />
        <div className="px-0 text-xl font-medium collapse-title">
          <h2>Add an Item</h2>
        </div>
        <div className="collapse-content">
          <form
            className="w-full max-w-4xl"
            action="/api/items/createItem"
            encType="multipart/form-data"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap mb-6">
              <div className="w-full mb-6">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="sku"
                >
                  Product Identifier
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  placeholder="(optional)"
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:mr-4 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="styleNumber"
                >
                  Style Number
                </label>
                <input
                  type="text"
                  id="styleNumber"
                  name="styleNumber"
                  placeholder="A unique style identifier"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder="Canary Yellow"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:mr-4 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="styleName"
                >
                  Style Name
                </label>
                <input
                  type="text"
                  id="styleName"
                  name="styleName"
                  placeholder="Tank Top"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6 md:max-w-xs">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Apparel"
                  required
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full mb-6">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="launchDate"
                >
                  Launch Date
                </label>
                <input
                  type="date"
                  id="launchDate"
                  name="launchDate"
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-none focus:bg-white"
                />
              </div>
              <button type="submit" className="bg-black btn">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>

      <h3 className="w-full mb-6 ml-1 text-lg font-medium">All Items</h3>
      <ItemsTable items={items} handleDelete={handleDelete} />
    </main>
  );
}

export default Items