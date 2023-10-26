import { Link } from 'react-router-dom'
import TableHeaderButton from './TableHeaderButton'
import useSortableData from '../utils/useSortableData'

const ItemsTable = ({ items, handleDelete }) => {
  const { data, requestSort, sortConfig } = useSortableData(items, { key: 'sku', direction: 'descending' })

  return (
    <div className="w-full overflow-x-auto">
      <table className="border-spacing-0 md:table-auto w-full md:border-[1px] md:border-[#F3F4F6] rounded-lg border-separate">
        <thead className="hidden md:table-header-group text-left text-[#656565]">
          <tr>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('sku')} 
                sortField="sku"
                columnTitle="Product Identifier"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('styleNumber')} 
                sortField="styleNumber"
                columnTitle="Style #"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('color')} 
                sortField="color"
                columnTitle="Color"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('styleName')} 
                sortField="styleName"
                columnTitle="Style Name"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('category')} 
                sortField="category"
                columnTitle="Category"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('launchDate')} 
                sortField="launchDate"
                columnTitle="Launch Date"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]"></th>
          </tr>
        </thead>
        <tbody>
          {data
            .map( e => (
              <tr className="p-4 md:p-0 hover:bg-[#F3F4F6] flex flex-row flex-wrap mb-4 md:table-row border-[1px] border-[#F3F4F6] rounded-lg"key={e._id}>
                <td className="md:p-4 order-[-3] md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`/shoot/${e._id}`}>
                    <span className="font-medium tracking-wide text-gray-900">{e.sku}</span>
                  </Link>
                </td>

                <div className="order-[-1] h-0 basis-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`/shoot/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.styleNumber}</span>
                  </Link>
                </td>

                <div className="self-center w-1 h-1 mx-2 bg-gray-200 rounded-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">                   
                  <Link to={`/shoot/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.color}</span>
                  </Link>
                </td>

                <div className="h-0 basis-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">                   
                  <Link to={`/shoot/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.styleName}</span>
                  </Link>
                </td>

                <div className="self-center w-1 h-1 mx-2 bg-gray-200 rounded-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">                   
                  <Link to={`/shoot/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.category}</span>
                  </Link>
                </td>

                <td className="hidden md:table-cell md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6] ">                   
                  <Link to={`/shoot/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{new Date(e.launchDate).toLocaleDateString([], { month: 'short', day: '2-digit', timeZone: 'UTC' })}</span>
                  </Link>
                </td>

                <td className="md:p-4 grow order-[-2] md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <form
                    action={`/api/items/deleteItem/${e._id}?_method=DELETE`}
                    method="POST"
                    onSubmit={handleDelete}
                    className="text-right"
                  >
                      <button className="fa-solid fa-trash"type="submit"></button>
                  </form>               
                </td>

              </tr>
            ))} 
        </tbody>
      </table>
    </div>
  )
}

export default ItemsTable