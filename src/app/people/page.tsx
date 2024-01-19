import React from 'react'
import PeopleDataTable from './data-table'
import { people } from '@/people'
import { columns } from './columns'

type Props = {}

const People = (props: Props) => {
  return (
    <PeopleDataTable columns={columns} data={people}/>
  )
}

export default People