using GENTRY.WebApp.Models;
using GENTRY.WebApp.Services.Interfaces;

namespace GENTRY.WebApp.Services.Services
{
    public class CategoryService : BaseService, ICategoryService
    {
        public CategoryService(IRepository repo) : base(repo)
        {
        }

        public async Task<List<Category>> GetAllAsync()
        {
            try
            {
                var categories = await Repo.GetAsync<Category>();

                return categories.ToList();
            }
            catch
            {
                return new List<Category>();
            }
        }
    }
}
