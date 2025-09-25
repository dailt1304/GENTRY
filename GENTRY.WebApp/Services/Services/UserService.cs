using GENTRY.WebApp.Models;
using GENTRY.WebApp.Services.Interfaces;
using System.Runtime.CompilerServices;

namespace GENTRY.WebApp.Services.Services
{
    public class UserService : BaseService, IUserService
    {
        public UserService(IRepository repo) : base(repo)
        {
        }

        public async Task UpdateUserAsync(User user)
        {
            if (user == null) throw new ArgumentNullException(nameof(user));
            Repo.Update(user);
            await Repo.SaveAsync();
        }
    }
}
