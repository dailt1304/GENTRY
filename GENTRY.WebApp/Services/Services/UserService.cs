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

        public async Task<List<User>> GetAllUsers()
        {
            try
            {
                var users = await Repo.GetAsync<User>(
                    filter: u => u.IsActive == true,
                    orderBy: q => q.OrderBy(u => u.CreatedDate)
                );

                return users.ToList();
            }
            catch
            {
                return new List<User>();
            }
        }

        public async Task<User?> GetUserByIdAsync(Guid userId)
        {
            try
            {
                var user = await Repo.GetByIdAsync<User>(userId);
                return user?.IsActive == true ? user : null;
            }
            catch
            {
                return null;
            }
        }

        public async Task<User?> GetUserProfileAsync(Guid userId)
        {
            try
            {
                var user = await Repo.GetByIdAsync<User>(userId);
                return user?.IsActive == true ? user : null;
            }
            catch
            {
                return null;
            }
        }

        public async Task UpdateUserAsync(User user)
        {
            if (user == null) throw new ArgumentNullException(nameof(user));

            user.ModifiedDate = DateTime.UtcNow;
            Repo.Update(user);
            await Repo.SaveAsync();
        }
    }
}
