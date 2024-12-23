'use client'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from '@/app/utils/columns'
import { getUsersList } from '@/app/utils/api'
import { useQuery } from '@tanstack/react-query'

const UsersDashboard = () => {
    const { data, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsersList,
    })

    if (error || !data) return <div className='flex items-center justify-center'>Error fetching data</div>
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default UsersDashboard
