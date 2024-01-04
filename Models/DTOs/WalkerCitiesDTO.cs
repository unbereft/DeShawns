using DeShawns.Models.DTOs;

namespace DeShawns.Models;

public class WalkerCityDTO
{public int WalkerId {get;set;}
public int CityId {get;set;}
public WalkerDTO walker {get;set;}
public CityDTO city {get;set;}
}