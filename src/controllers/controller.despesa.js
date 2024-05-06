import prismaClient from "../services/database.js";

const Listar = async (request, response) => {
  const config = {
    include: {
      categoriaDetalhe: true,
    },
    orderBy: {
      id: "desc",
    },
  };

  if (request.query.filtro) {
    config.where = {
      descricao: {
        contains: request.query.filtro,
      },
    };
  }

  const desp = await prismaClient.despesa.findMany(config);

  return response.json(desp);
};

const ListarId = async (request, response) => {
  const config = {
    include: {
      categoriaDetalhe: true,
    },
    where: {
      id: Number(request.params.id),
    },
  };
  const desp = await prismaClient.despesa.findMany(config);

  return response.json(desp[0]);
};

const Inserir = async (request, response) => {
  try {
    const { descricao, categoria, valor } = request.body;
    const desp = await prismaClient.despesa.create({
      data: {
        descricao: descricao,
        categoria: categoria,
        valor: valor,
      },
    });

    return response.status(201).json(desp);
  } catch (error) {
    return response.status(500).send(error);
  }
};

const Editar = async (request, response) => {
  try {
    const { descricao, categoria, valor } = request.body;
    const id = request.params.id;

    const desp = await prismaClient.despesa.update({
      where: {
        id: Number(id),
      },
      data: {
        descricao: descricao,
        categoria: categoria,
        valor: valor,
      },
    });

    return response.json(desp);
  } catch (error) {
    return response.status(500).send(error);
  }
};

const Excluir = async (request, response) => {
  try {
    const id = request.params.id;

    const desp = await prismaClient.despesa.delete({
      where: {
        id: Number(id),
      },
    });

    return response.json(desp);
  } catch (error) {
    return response.status(500).send(error);
  }
};

export default { Listar, ListarId, Inserir, Editar, Excluir };
