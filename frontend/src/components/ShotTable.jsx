import { Link } from 'react-router-dom'
import TableHeaderButton from './TableHeaderButton'
import useSortableData from '../utils/useSortableData'

const ShotTable = ({ shots, handleCheck, handleDeleteShot }) => {
  const { data, requestSort, sortConfig } = useSortableData(shots, { key: 'completed', direction: 'ascending' })

  return (
    <div className="w-full overflow-x-auto">
      <table className="border-spacing-0 md:table-auto w-full md:border-[1px] md:border-[#F3F4F6]   rounded-lg border-separate">
        <thead className="hidden md:table-header-group text-left text-[#656565]">
          <tr>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <input type="checkbox" checked readOnly className="align-middle pointer-events-none checkbox checkbox-xs" /> 
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.sku')} 
                sortField="sku"
                columnTitle="Product Code" 
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.styleNumber')} 
                sortField="styleNumber"
                columnTitle="Style #" 
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.color')} 
                sortField="color"
                columnTitle="Color" 
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton
                onClick={() => requestSort('completed')}
                sortField="completed"
                columnTitle="Status"
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.styleName')} 
                sortField="styleName"
                columnTitle="Style Name" 
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.category')} 
                sortField="category"
                columnTitle="Category" 
                sortConfig={sortConfig}
              />
            </th>
            <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
              <TableHeaderButton 
                onClick={() => requestSort('item.launchDate')} 
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
              <tr className="p-4 hover:bg-[#F3F4F6] flex flex-wrap mb-4 md:table-row border-[1px] border-[#F3F4F6] rounded-lg" key={e._id}>
                <td className="pr-3 md:p-4 order-[-3] md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                <form
                    action={`/api/shots/mark${e.completed ? 'Incomplete' : 'Complete'}/${e._id}?_method=PUT`}
                    method="POST"
                  >
                      <input type="checkbox" onChange={handleCheck} checked={e.completed} className="align-middle checkbox checkbox-xs" />
                  </form>
                </td>

                <td className="md:p-4 order-[-3] md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`app/items/${e._id}`}>
                    <span className="font-medium tracking-wide text-gray-900 align-middle md:align-baseline">{e.item.sku}</span>
                  </Link>
                </td>

                <div className="order-[-1] h-0 basis-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`app/items/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.item.styleNumber}</span>
                  </Link>
                </td>

                <div className="self-center w-1 h-1 mx-2 bg-gray-200 rounded-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]  ">                   
                  <Link to={`app/items/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.item.color}</span>
                  </Link>
                </td>

                <div className="self-center w-1 h-1 mx-2 bg-gray-200 rounded-full md:hidden"></div>

                <td className="md:min-w-[125px] self-center md:p-4 md:table-cell md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`app/items/${e._id}`}>
                    <span className={`${e.completed ? 'completed' : 'todo'}`}>{e.completed ? 'Completed' : 'To Do'}</span>
                  </Link>
                </td>

                <div className="h-0 basis-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]  ">                   
                  <Link to={`app/items/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.item.styleName}</span>
                  </Link>
                </td>

                <div className="self-center w-1 h-1 mx-2 bg-gray-200 rounded-full md:hidden"></div>

                <td className="md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]  ">                   
                  <Link to={`app/items/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{e.item.category}</span>
                  </Link>
                </td>

                <td className="hidden md:table-cell md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]  ">                   
                  <Link to={`app/items/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 font-xs md:text-sm">{new Date(e.item.launchDate).toLocaleDateString([], { month: 'short', day: '2-digit', timeZone: 'UTC' })}</span>
                  </Link>
                </td>

                <td className="md:p-4 grow order-[-2] md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <form
                    action={`/api/shots/deleteShot/${e._id}?_method=DELETE`}
                    method="POST"
                    onSubmit={handleDeleteShot}
                    className="text-right"
                  >
                      <button className="fa-solid fa-trash" type="submit"></button>
                  </form>               
                </td>

              </tr>
            ))} 
        </tbody>
      </table>
    </div>
  )
}

export default ShotTable