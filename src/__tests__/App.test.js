import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import tickets from '../__mocks__/mockData.json'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  
  it('Component', function() {
    const wrapper = shallow(<App />);
    // expect(typeof wrapper.state()).toEqual('object'); // 
    // expect(wrapper.state().value).toEqual('Pineapple');
  });
  // test(`fails with synchronous code`, () => {
  //   const responseJson = fetchResponseJson(`http://foo.bar`)
  //   expect(responseJson).not.toHaveProperty(`Rick`, `I turned myself into a pickle, Morty!`)
  // })

  // test(`using promises`, () => {
  //   expect.assertions(1)
  //   // Must return or the expect will not run within this test!
  //   return fetchResponseJson(`http://foo.bar`).then(
  //     (responseJson) => { expect(responseJson).toHaveProperty(`tickets`, {"count": 100, "requests": [{"description": "abc"}]}) })
  // })

  test(`using promises`, async () => {
    const wrapper = shallow(<App />)
    await wrapper.instance().componentDidMount()
    wrapper.setState({ tickets: {
      "requests": [
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/32.json",
            "id": 32,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "labore pariatur ut laboris laboris",
            "description":
               "Quis veniam consectetur ullamco aute incididunt eiusmod ut consectetur sunt laboris sint officia labore. Incididunt sit elit ipsum esse excepteur veniam Lorem excepteur amet amet tempor officia. Magna reprehenderit voluptate elit adipisicing consectetur laboris eu nisi ad excepteur adipisicing non duis proident.\n\nAliqua sunt ea dolor dolor elit occaecat. Aliqua reprehenderit commodo minim eu exercitation incididunt consectetur. Eiusmod anim ad adipisicing et ullamco id incididunt.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:11:25Z",
            "updated_at": "2018-04-20T14:11:25Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/31.json",
            "id": 31,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "tempor aliquip sint dolore incididunt",
            "description":
               "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:11:24Z",
            "updated_at": "2018-04-20T14:11:24Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/30.json",
            "id": 30,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "quis veniam ad sunt non",
            "description":
               "Magna culpa velit duis nisi sint veniam nisi adipisicing aute. Eiusmod id cupidatat pariatur tempor esse do. Aliquip ipsum voluptate eiusmod mollit. Et ullamco consectetur tempor cillum sunt anim enim cillum reprehenderit cillum proident. Eu aliqua excepteur eiusmod non ullamco aliqua esse laboris ad commodo reprehenderit pariatur consequat est.\n\nVoluptate eiusmod officia culpa nulla culpa mollit reprehenderit cillum adipisicing sit consectetur in. Anim occaecat excepteur commodo officia aute voluptate excepteur do ut esse occaecat duis consequat. Sunt minim est in non exercitation ad minim ullamco dolore in enim mollit aliquip. Ut ex dolore proident Lorem ut dolor ex. Laboris elit in in mollit. Quis id minim ex ad qui velit.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:06:16Z",
            "updated_at": "2018-04-20T14:06:16Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/29.json",
            "id": 29,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "magna reprehenderit nisi est cillum",
            "description":
               "Sit sit consequat magna aliquip officia qui. Fugiat amet id dolor sint exercitation sit. Eiusmod ex eiusmod voluptate voluptate est amet non culpa minim enim minim. Eiusmod fugiat veniam duis eiusmod sint laborum ex amet occaecat.\n\nNostrud consequat officia tempor amet eu. Non adipisicing dolore amet minim id consequat labore irure in esse et aliqua pariatur. Aliquip aliqua id ipsum amet laboris exercitation sunt cillum est et est. Tempor amet qui do dolore fugiat ad id nulla ullamco dolore tempor irure deserunt magna. Ipsum voluptate aliquip ut ad in pariatur adipisicing occaecat ea excepteur Lorem enim exercitation. Lorem sunt officia voluptate pariatur labore esse nostrud ullamco irure sit. Voluptate exercitation do aliquip eu consectetur.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:06:15Z",
            "updated_at": "2018-04-20T14:06:15Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/28.json",
            "id": 28,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "veniam ea eu minim aute",
            "description":
               "Ex non officia in ullamco veniam fugiat cupidatat id aute. Quis minim et quis laborum excepteur. Non officia quis tempor quis nisi et. Aliqua tempor voluptate nulla esse sint. Id nulla consequat sint eiusmod nisi.\n\nCupidatat anim magna qui aliquip. Anim deserunt sint incididunt labore aliquip. Reprehenderit magna deserunt reprehenderit irure Lorem nulla est officia cupidatat in. Dolore ullamco veniam proident consectetur amet ad nulla amet commodo enim occaecat. Sint fugiat dolor aliqua proident. Ex enim eu pariatur qui officia cupidatat adipisicing esse qui fugiat. Do mollit quis cillum quis qui occaecat labore.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:06:15Z",
            "updated_at": "2018-04-20T14:06:15Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/27.json",
            "id": 27,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "proident est nisi non irure",
            "description":
               "Aute mollit ex nulla id culpa nisi enim amet enim duis laborum in. Eiusmod ea quis tempor voluptate deserunt tempor amet fugiat esse ea. Anim sunt nisi laboris dolor. Est ullamco voluptate dolor magna elit eu. Laboris reprehenderit irure occaecat excepteur.\n\nDo nisi commodo dolor eiusmod eiusmod non eu occaecat sunt incididunt irure consectetur do. Exercitation occaecat culpa voluptate exercitation sit. In aute eu nulla anim reprehenderit velit. Eu deserunt aliquip aute Lorem consectetur mollit non esse veniam irure excepteur cupidatat excepteur officia. Velit id et mollit cupidatat cillum elit dolor fugiat pariatur. Deserunt non eu consectetur duis ex consectetur duis eu proident.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:06:15Z",
            "updated_at": "2018-04-20T14:06:15Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         },
         {
            "url": "https://tomomioki.zendesk.com/api/v2/requests/26.json",
            "id": 26,
            "status": "open",
            "priority": null,
            "type": null,
            "subject": "cillum quis nostrud labore amet",
            "description":
               "Deserunt officia ea fugiat dolor eu laboris esse reprehenderit deserunt dolore voluptate amet culpa. Proident ut mollit adipisicing occaecat Lorem do ut ex aute laboris fugiat minim dolor. In anim non nostrud adipisicing aliquip nisi laborum cupidatat officia. Sunt cillum sint anim elit culpa commodo amet excepteur consectetur veniam nulla ut. Officia ut ut sit incididunt cupidatat velit proident cupidatat voluptate eu ex.\n\nVelit nisi voluptate nulla reprehenderit officia consectetur dolor nostrud cillum duis. Dolore cupidatat eu veniam ut fugiat mollit ea. Reprehenderit nulla nisi cillum voluptate ex. Occaecat incididunt id mollit deserunt occaecat adipisicing ullamco ipsum. Minim ullamco adipisicing quis aliquip est ex sunt ea quis. Sint aute occaecat velit ipsum enim qui fugiat esse in officia excepteur irure. Enim eu dolore reprehenderit exercitation ullamco est nulla voluptate consectetur aliqua sit.",
            "organization_id": 360049346632,
            "via": {
               "channel": "api",
               "source": {
                  "from": {},
                  "to": {},
                  "rel": null
               }
            },
            "custom_fields": [],
            "requester_id": 363487458272,
            "collaborator_ids": [],
            "email_cc_ids": [],
            "is_public": true,
            "due_at": null,
            "can_be_solved_by_me": true,
            "created_at": "2018-04-20T14:06:14Z",
            "updated_at": "2018-04-20T14:06:14Z",
            "recipient": null,
            "followup_source_id": null,
            "assignee_id": 363487458272,
            "fields": []
         }
      ],
      "next_page": null,
      "previous_page": null,
      "count": 100
   } })
    // console.log('tickets: ', wrapper.state());
    // expect(wrapper.find('ul').length).toEqual(1)
    
    // expect.assertions(1)
    // // Must return or the expect will not run within this test!
    // return fetchResponseJson(`http://foo.bar`).then(
    //   (responseJson) => { expect(responseJson).toHaveProperty(`tickets`, {"count": 100, "requests": [{"description": "abc"}]}) })
  })
  

   it('renders header', () => {
      const index = shallow(<App />)
      expect(index.find('h1').length).toEqual(1)
   })

  //  it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <App>
  //       <div className="header" />
  //     </App>
  //   ));
  //   expect(wrapper.contains(<div className="header" />)).to.equal(true);
  // });
   
})
