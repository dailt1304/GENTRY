using AutoMapper;
using GENTRY.WebApp.Models;
using GENTRY.WebApp.Services.DataTransferObjects.UserDTOs;

namespace GENTRY.WebApp.Services.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>().ReverseMap();
            
            CreateMap<User, UserProfileDto>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.FullName))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role));
                
            CreateMap<UpdateUserProfileDto, User>()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
        }
    }
}
