import Loading from "../Components/Loading/Loading";

export const Api = {
  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

  authorization: 'priscilarozasilva@gmail.com',

  readOneUrl: (id) => Api.baseUrl + '/' + id,
  readAllUrl: () => Api.baseUrl + '/',
 

  createUrl: () => Api.baseUrl + '/',

  deleteUrl: (id) => Api.baseUrl + '/' + id,
  deleteAllUrl: () => Api.baseUrl + '/',
  

  updateUrl: (id) => Api.baseUrl + '/' + id,

  //ABAIXO REQUISIÇÕES FEITAS PARA CONECTAR DADOS COM A API

  //GET = pegar todos os dados para ler
  buildApiGetRequest: (url) => {
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },

  //POST = Cadastrar novos personagens
  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

  //PUT = Editar personagens que já existem
  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

  //DELETE = deletar dados
  buildApiDeleteRequest: (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },
};
