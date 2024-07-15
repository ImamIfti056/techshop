import useAdminStats from '../../../hooks/useAdminStats'
import Title from '../../Shared/Title'
import './AdminHome.css'

const AdminHome = () => {
  const [stats] = useAdminStats()
  return (
    <div id='adminHome'>
      <Title heading={"Admin home"} />
      <div className="px-6">
        <h1 className='text-center my-6 text-3xl border-2 py-12 bg-base-200'>Total Users: {stats?.users}</h1>
        <h1 className='text-center my-6 text-3xl border-2 py-12 bg-base-200'>Total Products: {stats?.components}</h1>
        <h1 className='text-center my-6 text-3xl border-2 py-12 bg-base-200'>Total Orders: {stats?.orders}</h1>
      </div>

    </div>
  )
}

export default AdminHome