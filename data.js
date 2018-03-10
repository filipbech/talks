export const getTalks = () => 
    fetch('https://spreadsheets.google.com/feeds/list/1V_AL9H3WDTXUvGfZxIQGjMt9Btx9fNWj3eiBVYGFyqo/od6/public/values?alt=json')
    .then(response => response.json())
    .then(result => {
        return result.feed.entry.map(item => {
            return {
                title: item.gsx$title.$t,
                date: new Date(item.gsx$date.$t),
                slides: item.gsx$slides.$t,
                other: item.gsx$other.$t,
                video: item.gsx$video.$t,
                where: item.gsx$where.$t,
                what: item.gsx$what.$t
            }
        });
    })
    .then(list => list.sort((b, a) => a.date - b.date))
