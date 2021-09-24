import { GigPreview } from './gig-preview.jsx'
export function GigList({ gigs }) {
    if (!gigs.length) return <div>No Gigs Right Now....</div>
    return (
        <section className="gig-list">
            {gigs.map(gig => <GigPreview key={gig._id}
                gig={gig}
            />)}
        </section>
    )
}