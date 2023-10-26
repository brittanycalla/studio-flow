import { ReactComponent as Arrow } from '../arrow.svg'

const TableHeaderButton = ({ columnTitle, onClick, sortField, sortConfig }) => {
  const getClassNamesFor = (name, sortConfig) => {
    let adjustedSortConfigKey = ''
    if (!sortConfig) {
      return;
    } else {
      adjustedSortConfigKey = sortConfig.key.replace('item.', '')
    }
    if (sortConfig.direction === 'descending' && adjustedSortConfigKey === name) {
      return `fill-[#656565] rotate-180 transition-all`
    } else if (sortConfig.direction === 'ascending' && adjustedSortConfigKey === name) {
      return `fill-[#656565] transition-all`
    } else {
      return 'fill-none'
    }
  }

  return (
    <button 
      type="button" 
      onClick={onClick}
      className='flex items-center w-full text-xs font-normal tracking-wide uppercase group'
    >
      {columnTitle}
      <Arrow className={`group-hover:fill-[#656565] ${getClassNamesFor(sortField, sortConfig)}`} />
    </button>
  )
}

export default TableHeaderButton