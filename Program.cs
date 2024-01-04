using DeShawns.Models;
using DeShawns.Models.DTOs;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

List<City> cities = new List<City> {
    new City()
    {
        Id = 1, Name = "Nashville"
    },
    new City()
    {
        Id = 2, Name = "Madison"
    },
    new City()
    {
        Id = 3, Name = "Goodlettsville"
    },
    new City()
    {
        Id = 4, Name = "Inglewood"
    },
    new City()
    {
        Id = 5, Name = "Bellevue"
    }
};

List<Walker> walkers = new List<Walker> {
    new Walker()
    {
        Id = 1, Name = "Trudy Blum"
    },
    new Walker()
    {
        Id = 2, Name = "Ricky Thunder"
    },
    new Walker()
    {
        Id = 3, Name = "James Sandwich"
    },
    new Walker()
    {
        Id = 4, Name = "Candice Peaches"
    },
    new Walker()
    {
        Id = 5, Name = "Harold Moss"
    }
};

List<Dog> dogs = new List<Dog> {
    new Dog()
    {
        Id = 1, Name = "Honeybun", CityId = 2, WalkerId = 4
    },
    new Dog()
    {
        Id = 2, Name = "Munchkin", CityId = 3, WalkerId = 5
    },
    new Dog()
    {
        Id = 3, Name = "Bongo", CityId = 1, WalkerId = 3
    },
    new Dog()
    {
        Id = 4, Name = "Cedar", CityId = 4, WalkerId = 1
    },
    new Dog()
    {
        Id = 5, Name = "Sprinkles", CityId = 5, WalkerId = 2,
    },
    new Dog()
    {
        Id = 6, Name = "Socks", CityId = 2, WalkerId = 5
    },
    new Dog()
    {
        Id = 7, Name = "Carrot", CityId = 1, WalkerId = 3
    },
    new Dog()
    {
        Id = 8, Name = "Reginald", CityId = 3, WalkerId = 1
    },
    new Dog()
    {
        Id = 9, Name = "Jitterbug", CityId = 2, WalkerId = 4
    },
    new Dog()
    {
        Id = 10, Name = "Prince", CityId = 5, WalkerId = 2
    },
    new Dog()
    {
        Id = 11, Name = "Boots", CityId = 1, WalkerId = 3
    },
    new Dog()
    {
        Id = 12, Name = "Wrangler", CityId = 5, WalkerId = 5
    }
};

app.MapGet("/walkers", () =>
{
    return walkers.Select(W => new WalkerDTO
    {
        Id = W.Id,
        Name = W.Name
    });
});

app.MapGet("/dogs", () =>
{
    return dogs.Select(d => new DogDTO
    {
        Id = d.Id,
        Name = d.Name,
        WalkerId = d.WalkerId,
        CityId = d.CityId
    });
});

app.MapGet("/cities", () => 
{
    return cities.Select(c => new CityDTO
    {
        Id = c.Id,
        Name = c.Name
    });
});

app.MapGet("/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }
    Walker walkers1 = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);
    City city = cities.FirstOrDefault(c => c.Id == dog.CityId);
    
    return Results.Ok(new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        WalkerId = dog.WalkerId,
        Walker = walkers1 == null ? null : new WalkerDTO
        {
            Id = walkers1.Id,
            Name = walkers1.Name
        },
        CityId = dog.CityId,
        City = city == null ? null : new CityDTO{
            Id = city.Id,
            Name = city.Name
        }
    });
});

app.MapPost("/dogs", (Dog dog) =>
{
    dog.Id = dogs.Max(dog => dog.Id) + 1;
    dogs.Add(dog);
    return Results.Created($"/dogs/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        WalkerId = dog.WalkerId,
        CityId = dog.CityId
    });
});

app.Run();
