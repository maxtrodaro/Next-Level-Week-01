import express, { request, response } from 'express';

const app = express();

/**
 * Rota: Endereço completo da requisição
 * Recurso: Qual entidade estamos acessando do sistema (/users)
 *
 * GET: Buscar uma ou mais informações do back-end
 * POST: Criar uma nova informação no back-end
 * PUT: Editar uma informação já existente no back-end
 * DELETE: Deletar uma informação no back-end
 *
 * Request Param: Parâmetros que vem da própria rota que identificam um recurso
 * Query Param:
 */

const users = ['Eduardo', 'Diego'];

app.get('/users', (request, response) => {
	const search = String(request.query.search);

	const filteredUsers = search
		? users.filter((user) => user.includes(search))
		: users;

	console.log(filteredUsers);

	response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id);

	const user = users[id];

	return response.json(user);
});

app.post('/users', (request, response) => {
	const user = {
		name: 'Eduardo',
		email: 'dudurossigodoy2010@gmail.com',
	};

	return response.json(user);
});

app.listen(3333);
