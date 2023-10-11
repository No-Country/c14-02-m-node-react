import IvpCalendar from '../components/IvpCalendar'
import IvpDescription from '../components/IvpDescription'
import IvpGrid from '../components/IvpGrid'
import IvpReservation from '../components/IvpReservation'
import IvpMaps from '../components/IvpMaps'
import IvpReviews from '../components/IvpReviews'

function IndividualViewPage() {
  return (
    <>
      <div className='m-6'>
        <IvpGrid />
        <IvpDescription />
        <IvpReservation />
        <IvpCalendar />
        <IvpMaps />
        <IvpReviews />
      </div>
                
    </>
    
  )
}

export default IndividualViewPage