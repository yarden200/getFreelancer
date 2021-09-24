// import { gigPreview } from './gig-preview.jsx'
export function gigList({ gigs }) {
    if (!gigs.length) return <div>No Gigs Right Now....</div>
    return (
        <section className="gig-list">
            {gigs.map(gig => <gigPreview key={gig._id}
                gig={gig}
            />)}
        </section>
    )
}