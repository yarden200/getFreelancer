
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

const gigs = require('../data/gigs.json')
const orders = require('../data/orders.json')

function query(entityType, filterBy, delay = 0) {
    if (entityType === 'gig') {
        var entities = JSON.parse(localStorage.getItem(entityType)) || gigs
        if (entities.length === 0) { entities = gigs }
        _save(entityType, entities)

        const filter = { ...filterBy }
        if (filter.searchKey) {
            const regex = new RegExp(filter.searchKey, 'i');
            console.log('regex:', regex);
            entities = entities.filter(entity => regex.test(entity.title))
            // return entity.title.includes(filter.searchKey)
        }
        if (filter.tag) {
            const regex = new RegExp(filter.searchKey, 'i');
            entities = entities.filter(entity =>regex.test(entity.title) )
                // return entity.tags.includes(filter.tag)
            
        }
        
    } else if (entityType === 'user') {
        entities = JSON.parse(localStorage.getItem(entityType)) || []
    } else if (entityType === 'order') {
        entities = JSON.parse(localStorage.getItem(entityType)) || []
        if (!entities || entities.length === 0) { entities = orders }
        _save(entityType, entities)
       return Promise.resolve(entities) // nedd to return? 
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            console.log('entities from post storage', entities);
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    // console.log('entities from _save storage',entities);
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

// function postMany(entityType, newEntities) {
//     return query(entityType)
//         .then(entities => {
//             newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
//             entities.push(...newEntities)
//             _save(entityType, entities)
//             return entities
//         })
// }