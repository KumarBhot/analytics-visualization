export function getSummary () {
    return fetch('/api/logs?_page=1&_limit=100', {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(error => error);
}

export function getUniqueUsers () {
    return fetch('/api/logs?_page=1&_limit=20&Category=Track%20Order', {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(error => error);
}
