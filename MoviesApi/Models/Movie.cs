using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesApi.Models
{
    public class Movie
    {
        public int Id { get; set; }

        /// <summary>
        /// Название
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// Оригинальное название
        /// </summary>
        public string OriginalTitle { get; set; }
        /// <summary>
        /// Год выпуска
        /// </summary>
        public int Year { get; set; }
        /// <summary>
        /// Описание
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// Длительность в минутах
        /// </summary>
        public int Duration { get; set; }
        /// <summary>
        /// Рейтинг
        /// </summary>
        public float Rating { get; set; }
        /// <summary>
        /// Ссылка на постер
        /// </summary>
        public string PosterUrl { get; set; }
    }
}
