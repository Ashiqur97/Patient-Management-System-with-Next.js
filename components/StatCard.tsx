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
    <div className={clsx('stat-card')}>
        test
    </div>
  )
}

export default StatCard
