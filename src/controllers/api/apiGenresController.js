const db = require("../../database/models");
const sequelize = db.sequelize;

const genresController = {
  list: (req, res) => {
    db.Genre.findAll()
      .then((genres) => {
        let response = {
          ok: true,
          meta: {
            status: 200,
            total: genres.length,
          },
          data: genres,
        };
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        let response = {
          ok: false,
          meta: {
            status: 500,
          },
        };
        return res.status(200).json(response);
      });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id)
      .then((genres) => {
        let response = {
          ok: true,
          meta: {
            status: 200,
            total: genres.length,
          },
          data: genres,
        };
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        let response = {
          ok: false,
          meta: {
            status: 500,
          },
        };
        return res.status(200).json(response);
      });
  },


};

module.exports = genresController;
