﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesApi.QueryModels
{
    /// <summary>
    /// Модель с пагинацией
    /// </summary>
    public interface IPageModel
    {
        /// <summary>
        /// Количество объектов
        /// </summary>
        int Take { get; set; }
        /// <summary>
        /// Сколько пропустить
        /// </summary>
        int Skip { get; set; }
    }
}
