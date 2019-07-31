using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesApi.QueryModels
{
    public class GetMovies : IPageModel
    {
        public int Take { get; set; }
        public int Skip { get; set; }

        public GetMovies()
        {
            Take = 10;
            Skip = 0;
        }
    }
}
