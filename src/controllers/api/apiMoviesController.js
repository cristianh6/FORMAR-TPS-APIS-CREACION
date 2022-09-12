const db = require("../../database/models");
const sequelize = db.sequelize;

const moviesController = {
  list: (req, res) => {
    db.Movie.findAll()
      .then((movies) => {
        let response = {
          ok: true,
          meta: {
            status: 200,
            total: movies.length,
          },
          data: movies,
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
    db.Movie.findByPk(req.params.id)
      .then((movies) => {
        let response = {
          ok: true,
          meta: {
            status: 200,
            total: movies.length,
          },
          data: movies,
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

  create: (req, res) => {
    db.Movies.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id,
    })
      .then((confirm) => {
        let response;
        if (confirm) {
          response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/movies/create",
            },
            data: confirm,
          };
        } else {
          response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/movies/create",
            },
            data: confirm,
          };
        }
        res.json(response);
      })
      .catch((error) => res.send(error));
  },

  destroy: (req, res) => {
    let movieId = req.params.id;
    Movies.destroy({ 
        where: 
        { 
            id: movieId 
        }, 
        force: true 

    }).then((confirm) => {
        let response;
        if (confirm) {
            response = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/movies/destroy/:id",
            },
            data: confirm,
          }
        } else {
            response = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/movies/destroy/:id",
            },
            data: confirm,
          };
        }
        res.json(response);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = moviesController;
