using GENTRY.WebApp.Models;

namespace GENTRY.WebApp.Services.Interfaces
{
    public interface IUserService
    {
        Task UpdateUserAsync(User user);
    }
}
