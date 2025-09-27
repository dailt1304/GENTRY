using GENTRY.WebApp.Models;

namespace GENTRY.WebApp.Services.Interfaces
{
    public interface ICategoryService
    { 
        Task<List<Category>> GetAllAsync();
    }
}
