import { Link } from 'react-router-dom'
import TableHeaderButton from './TableHeaderButton'
import useSortableData from '../utils/useSortableData'

const ShootTable = ({ shoots }) => {
  const { data, requestSort, sortConfig } = useSortableData(shoots, { key: 'status', direction: 'descending' })

  return (
    <div className="w-full overflow-x-auto">
    <table className="border-spacing-0 md:table-auto w-full md:border-[1px] md:border-[#F3F4F6] rounded-lg border-separate">
      <thead className="hidden md:table-header-group text-left text-[#656565] text-xs uppercase tracking-wide">
        <tr>
          
          <th className="md:hidden pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]"></th>
          <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
            <TableHeaderButton 
              onClick={() => requestSort('shootName')}
              sortField="shootName"
              columnTitle="Shoot Name"
              sortConfig={sortConfig}
            />
          </th>
          <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
            <TableHeaderButton
            onClick={() => requestSort('contentType')}
              sortField="contentType"
              columnTitle="Content Type"
              sortConfig={sortConfig}
            />
          </th>
          <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
            <TableHeaderButton
            onClick={() => requestSort('status')}
              sortField="status"
              columnTitle="Status"
              sortConfig={sortConfig}
            />
          </th>
          <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
            <TableHeaderButton 
              onClick={() => requestSort('startDate')}
              sortField="startDate"
              columnTitle="Date(s)"
              sortConfig={sortConfig}
            />
          </th>
          <th className="pl-4 p-2 border-b-[1px] border-solid border-b-[#F3F4F6]">
            <TableHeaderButton
            onClick={() => requestSort('shotCount')}
              sortField="shotCount"
              columnTitle="Shot Count"
              sortConfig={sortConfig}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map( e => (
            <tr className="p-4 md:p-0 hover:bg-[#F3F4F6] grid grid-cols-[60px_auto_2px_auto_2px_auto] grid-rows-2 gap-x-2 justify-start items-start mb-4 md:table-row border-[1px] border-[#F3F4F6] rounded-lg" key={e._id}>
              <td className="place-self-center row-span-2 md:hidden md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <div className="rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <Link className="p-2.5 flex flex-col justify-center items-center" to={`/app/shoots/${e._id}`}>
                      <span className="text-xs font-black leading-tight tracking-wider text-center text-black uppercase">{new Date(e.startDate).toLocaleDateString([], { month: 'short', timeZone: 'UTC' })}</span>
                      <span className="text-lg font-black leading-none tracking-wider text-center text-black">{new Date(e.startDate).toLocaleDateString([], { day: '2-digit', timeZone: 'UTC' })}</span>
                    </Link>
                  </div>
              </td>

              <td className="self-end col-span-5 md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                  <Link to={`/app/shoots/${e._id}`}>
                    <span className="font-medium tracking-wide text-gray-900 sm:text-base">{e.shootName}</span>
                  </Link>
              </td>

              <td className="self-center md:p-4 md:table-cell md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                <Link to={`/app/shoots/${e._id}`}>
                    <span className="text-xs tracking-wide text-gray-900 md:text-sm">{e.contentType}</span>
                </Link>
              </td>

              <div className="self-center w-1 h-1 bg-gray-200 rounded-full md:hidden"></div>

              <td className="self-center md:p-4 md:table-cell md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                <Link to={`/app/shoots/${e._id}`}>
                    <span className={ e.status.toLowerCase().split(" ").join("") }>{ e.status }</span>
                </Link>
              </td>              

              <td className="p-4 hidden md:table-cell md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">
                <Link to={`/app/shoots/${e._id}`}>
                  <span className="text-xs tracking-wide text-gray-900 md:text-sm">{new Date(e.startDate).toLocaleDateString([], { month: 'short', day: '2-digit', timeZone: 'UTC' })}{new Date(e.endDate) - new Date(e.startDate) > 0 ? ` - ${new Date(e.endDate).toLocaleDateString([], { month: 'short',
                  day: '2-digit', year: 'numeric', timeZone: 'UTC' })}` : `, ${new Date(e.startDate).toLocaleDateString([], { year: 'numeric', timeZone: 'UTC' })}`}</span>
                </Link>
              </td>

              <div className="self-center w-1 h-1 bg-gray-200 rounded-full md:hidden"></div>

              <td className="self-center text-xs md:text-sm md:p-4 md:border-b-[1px] md:border-solid md:border-b-[#F3F4F6]">                   
                <Link to={`/app/shoots/${e._id}`}><span>{e.shotCount} </span><span className='md:hidden'>Shots</span></Link>
              </td>

            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default ShootTable