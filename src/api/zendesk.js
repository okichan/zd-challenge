// var fs = require('fs');
var zendesk = require('node-zendesk')

var client = zendesk.createClient({
   username: 'tomomioki@outlook.com',
   token: 'FSksKqJg1TPIz7sOVfYjqtVLtPsS6rsFH8dVjm5L',
   remoteUri: 'https://tomomioki.zendesk.com/api/v2'
})

client.tickets.list(function (err, statusList, body, responseList, resultList) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('data loaded!\n', JSON.stringify(body[0], null, 2, true));//will display all tickets
//   return JSON.stringify(body, null, 2, true)
});