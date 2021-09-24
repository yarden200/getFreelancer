import {HomePage} from './pages/home-page.jsx'
import {GigApp} from './pages/gig-app.jsx'
import { ExplorePage } from './pages/explore-page.jsx';
// import{}from

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path:'/',
        component: HomePage,
        label: 'Home',
    },
    {
        path:'/gig',
        component: GigApp,
        label: 'Gigs'
    },
    {
        path:'/explore',
        component: ExplorePage,
        label: 'Explore'
    },
    {
        path:'/gig/:gigId',
        component: GigDetails,
        label: 'Details'
    },

    

]

export default routes;