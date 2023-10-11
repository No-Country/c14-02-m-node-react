import IvpCalendar from '../components/IvpCalendar'
import IvpDescription from '../components/IvpDescription'
import IvpGrid from '../components/IvpGrid'
import IvpReservation from '../components/IvpReservation'
import IvpMaps from '../components/IvpMaps'
import IvpReviews from '../components/IvpReviews'

import SuggestionFooter from '../components/SuggestionFooter'
import HelpFooter from '../components/HelpFooter'

function IndividualViewPage() {
  return (
    <>
      <div className='m-6'>
        <SuggestionFooter/>
        <HelpFooter/>
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