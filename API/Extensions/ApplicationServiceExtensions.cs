using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
        public static class ApplicationServiceExtensions
        {
            public static IServiceCollection AddApplicationServices(this IServiceCollection services,
                IConfiguration config)
            {
                /*services.AddDbContext<InternShipAppSystemContext>(options => {
                    options.UseSqlServer(config.GetConnectionString("dbconn"));
                    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                });*/
                services.AddCors();
                return services;
            }
        }
    }