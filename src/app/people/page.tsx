import React from 'react'
import PeopleDataTable from './data-table'
import { people } from '@/people'
import { columns } from './columns'

type Props = {}

const People = (props: Props) => {
  return (
    <div className='container py-10 mx-auto'>
      <PeopleDataTable columns={columns} data={people}/>
    </div>
  )
}

export default People