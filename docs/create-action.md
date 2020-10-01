# `createAction` 

It decorates a function to dispatch a success and a failure event.


## Old Action structure

```js
const ClientsListEvent = createEvent();
const ClientErrorEvent = createEvent();

export const fetchClients = async (
  page: number,
): Promise<RelationType<Client> | void> => {
  console.log('fetchClients');

  const skip = page * 6;

  let response;
  try {
    response = await clientApollo.query({
      query: CLIENTS_LIST_QUERY,
      variables: { first: 6, skip, sortProjects: [{ createdAt: 'DESC' }] },
      fetchPolicy: 'network-only',
    });
  } catch (e) {
    console.log('fetchClients Error: ', e);
    return ClientErrorEvent.dispatch(e);
  }

  const clients = {
    count: response.data.clientsList.count,
    items: response.data.clientsList.items,
  };

  console.log('clients:', clients);

  ClientsListEvent.dispatch(clients);

  return clients;
};
```

## With the `createAction`

```js
const ClientsListEvent = createEvent();
const ClientErrorEvent = createEvent();

export const fetchClients =  createAction(ClientsListEvent, ClientErrorEvent (page: number) => {
  const skip = page * 6;
  const  response = await clientApollo.query({
      query: CLIENTS_LIST_QUERY,
      variables: { first: 6, skip, sortProjects: [{ createdAt: 'DESC' }] },
      fetchPolicy: 'network-only',
    });
  const clients = {
    count: response.data.clientsList.count,
    items: response.data.clientsList.items,
  };
  return clients;
});
```
