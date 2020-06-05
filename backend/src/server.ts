import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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
 * Query Param: Parâmetros que vem na própria rota e geralmente são opcionais: filtros e paginação
 * Request Body: Parâmetros para criação/edição de informações
 */

// É utilizado desta maneira para passar arquivos estáticos do backend
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
