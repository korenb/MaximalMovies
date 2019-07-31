using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesApi.Data;
using QueryModel = MoviesApi.QueryModels;

namespace MoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        AppDbContext _db;

        public MoviesController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Get([FromQuery]QueryModel.GetMovies query)
        {
            var movies = _db.Movies
                .OrderByDescending(e => e.Year)
                .ThenBy(e => e.Id)
                .Skip(query.Skip)
                .Take(query.Take);

            return Ok(movies.AsNoTracking().ToList());
        }
    }
}
