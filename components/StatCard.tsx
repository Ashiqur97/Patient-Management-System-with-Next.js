import React from 'react'
import clsx from 'clsx'

interface StateCardProps {
  type:"appointments" | "pending" | "cancelled"
  count:number
  label:string
  icon:string
}

const StatCard = ({count=0, label, icon,type}: StateCardProps) => {
  return (
    <div className={clsx('stat-card',{
      'bg-appointments': type === 'appointments',
      'bg-pending': type === 'pending',
      'bg-cancelled': type === 'cancelled',
    })}>
        test
    </div>
  )
}

export default StatCard
